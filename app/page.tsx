'use client';

import React, { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { Header } from '@/components/Header';
import { QuickStats } from '@/components/QuickStats';
import { NavigationTabs } from '@/components/NavigationTabs';
import { StandingsTab } from '@/components/StandingsTab';
import { BlockRaceTracker } from '@/components/BlockRaceTracker';
import { PrizePoolTab } from '@/components/PrizePoolTab';
import { SettingsTab } from '@/components/SettingsTab';
import { ManagerModal } from '@/components/ManagerModal';
import { WhatsAppShareModal } from '@/components/WhatsAppShareModal';
import { RulesModal } from '@/components/RulesModal';
import { BackToTop } from '@/components/BackToTop';
import { SoccerPitchBackground } from '@/components/SoccerPitchBackground';
import {
  INITIAL_MANAGERS,
  INITIAL_LEAGUE_STATS,
  BLOCKS,
  calculateBlockStandings,
} from '@/lib/leagueData';
import { Manager, LeagueStats } from '@/lib/types';

export default function HomePage() {
  const [stats, setStats] = useState<LeagueStats>(() => {
    if (typeof window !== 'undefined') {
      try {
        const cachedStats = localStorage.getItem('filoi_league_stats_v3');
        if (cachedStats) {
          const parsed = JSON.parse(cachedStats);
          return {
            ...INITIAL_LEAGUE_STATS,
            ...parsed,
          };
        }
      } catch {
        // ignore localStorage errors
      }
    }
    return INITIAL_LEAGUE_STATS;
  });

  const [managers, setManagers] = useState<Manager[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const cached = localStorage.getItem('filoi_synced_managers_v3');
        if (cached) {
          const parsed = JSON.parse(cached);
          if (Array.isArray(parsed) && parsed.length > 0) {
            return parsed;
          }
        }
      } catch {
        // ignore localStorage errors
      }
    }
    return INITIAL_MANAGERS;
  });

  const [activeTab, setActiveTab] = useState<string>('standings');
  const [selectedManager, setSelectedManager] = useState<Manager | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLiveFpl, setIsLiveFpl] = useState(true);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('filoi_admin_session') === 'true';
    }
    return false;
  });

  const notificationTimerRef = useRef<NodeJS.Timeout | null>(null);
  const showNotification = useCallback((msg: string) => {
    if (notificationTimerRef.current) {
      clearTimeout(notificationTimerRef.current);
    }
    setNotification(msg);
    notificationTimerRef.current = setTimeout(() => {
      setNotification((curr) => (curr === msg ? null : curr));
    }, 3500);
  }, []);

  const handleToggleAdmin = (status: boolean) => {
    setIsAdmin(status);
    if (typeof window !== 'undefined') {
      if (status) {
        localStorage.setItem('filoi_admin_session', 'true');
        showNotification('👑 Commissioner mode unlocked.');
      } else {
        localStorage.removeItem('filoi_admin_session');
        showNotification('🔒 Commissioner mode locked. Viewing public dashboard.');
      }
    }
  };

  // Current active block: Block 1 is completed with Ayodele Balogun winning; Block 2 is the active fresh race
  const currentBlock = useMemo(() => {
    if (stats.activeBlockId === 2 || stats.currentGameweek >= 9) {
      return BLOCKS.find((b) => b.id === 2) || BLOCKS[1] || BLOCKS[0];
    }
    return (
      BLOCKS.find(
        (b) => stats.currentGameweek >= b.startGw && stats.currentGameweek <= b.endGw
      ) || BLOCKS[0]
    );
  }, [stats.currentGameweek, stats.activeBlockId]);

  // Block standings for current block (calculated dynamically from managers' gwScores)
  const blockStandings = useMemo(() => {
    return calculateBlockStandings(managers, currentBlock);
  }, [managers, currentBlock]);

  // Manual Refresh Handler with visual spinner and user feedback
  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch(`/api/fpl/league?leagueId=${stats.fplLeagueId}`, {
        cache: 'no-store',
      });
      const json = await res.json();

      if (json.success && json.standings && json.standings.length > 0) {
        setManagers(json.standings);
        setIsLiveFpl(!json.isFallback);
        setStats((prev) => ({
          ...prev,
          currentGameweek: json.currentGameweek || prev.currentGameweek,
          activeBlockId: json.activeBlockId || 2,
          lastSyncedAt: json.timestamp || new Date().toISOString(),
          isAutoSyncing: true,
        }));

        try {
          localStorage.setItem('filoi_synced_managers_v3', JSON.stringify(json.standings));
          localStorage.setItem(
            'filoi_league_stats_v3',
            JSON.stringify({
              currentGameweek: json.currentGameweek,
              activeBlockId: json.activeBlockId || 2,
              lastSyncedAt: json.timestamp,
            })
          );
        } catch {}

        showNotification('Official FPL standings synchronized successfully!');
      } else {
        showNotification('Standings refreshed with verified roster cache.');
      }
    } catch {
      showNotification('Using verified offline cache.');
    } finally {
      setIsRefreshing(false);
    }
  };

  // Automated Zero-Click Sync Engine:
  // 1. Silent sync on page load
  // 2. Continuous 60s background polling
  // 3. Tab visibility and window focus re-validation
  useEffect(() => {
    let isSubscribed = true;

    const silentAutoSync = async () => {
      try {
        const res = await fetch(`/api/fpl/league?leagueId=${stats.fplLeagueId}`, {
          cache: 'no-store',
        });
        const json = await res.json();

        if (isSubscribed && json.success && json.standings && json.standings.length > 0) {
          setManagers(json.standings);
          setIsLiveFpl(!json.isFallback);
          setStats((prev) => ({
            ...prev,
            currentGameweek: json.currentGameweek || prev.currentGameweek,
            activeBlockId: json.activeBlockId || 2,
            lastSyncedAt: json.timestamp || new Date().toISOString(),
            isAutoSyncing: true,
          }));

          try {
            localStorage.setItem('filoi_synced_managers_v3', JSON.stringify(json.standings));
            localStorage.setItem(
              'filoi_league_stats_v3',
              JSON.stringify({
                currentGameweek: json.currentGameweek,
                activeBlockId: json.activeBlockId || 2,
                lastSyncedAt: json.timestamp,
              })
            );
          } catch {}
        }
      } catch {
        // Silent background fallback
      }
    };

    // Run silent auto-sync
    silentAutoSync();

    // 60-second periodic background polling
    const intervalId = setInterval(silentAutoSync, 60000);

    // Auto-update when user returns to window or switches tab
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        silentAutoSync();
      }
    };
    const handleFocus = () => {
      silentAutoSync();
    };

    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('focus', handleFocus);

    return () => {
      isSubscribed = false;
      clearInterval(intervalId);
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('focus', handleFocus);
    };
  }, [stats.fplLeagueId]);

  // Simulate Next Gameweek (for commissioner testing)
  const handleSimulateNextGw = () => {
    if (stats.currentGameweek >= 38) {
      showNotification('Season complete! All 38 gameweeks have finished.');
      return;
    }

    const nextGw = stats.currentGameweek + 1;
    const updated = managers.map((m) => {
      const pts = Math.floor(45 + ((m.id * 17 + nextGw * 23) % 41));
      const hits = (m.id + nextGw) % 5 === 0 ? 4 : 0;
      const net = pts - hits;
      const newTotal = m.totalPoints + net;

      const newScores = [
        ...m.gwScores,
        {
          gw: nextGw,
          points: pts,
          hits,
          netPoints: net,
          captain: m.captain,
          chip: null,
        },
      ];

      return {
        ...m,
        currentGwPoints: pts,
        totalPoints: newTotal,
        gwScores: newScores,
      };
    });

    updated.sort((a, b) => b.totalPoints - a.totalPoints);
    const reRanked = updated.map((m, idx) => {
      const newRank = idx + 1;
      const oldRank = m.overallRank;
      const delta = Math.abs(oldRank - newRank);
      return {
        ...m,
        lastRank: oldRank,
        overallRank: newRank,
        rankDelta: delta,
        overallRankMovement:
          newRank < oldRank ? ('up' as const) : newRank > oldRank ? ('down' as const) : ('same' as const),
      };
    });

    setManagers(reRanked);
    setStats((prev) => ({
      ...prev,
      currentGameweek: nextGw,
      activeBlockId: nextGw >= 10 ? 2 : 1,
    }));

    if (nextGw === 10) {
      showNotification(`⚡ Gameweek 10 Commenced! Block 2 Fresh Race is underway!`);
    } else {
      showNotification(`Simulated Gameweek ${nextGw}! Standings updated.`);
    }
  };

  // Reset Data to Initial Verified Baseline
  const handleResetData = () => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem('filoi_synced_managers_v3');
        localStorage.removeItem('filoi_league_stats_v3');
      } catch {}
    }
    setManagers(INITIAL_MANAGERS);
    setStats(INITIAL_LEAGUE_STATS);
    showNotification('Reset league data to default GW 9 baseline.');
  };

  const handleUpdateLeagueId = (newId: number) => {
    setStats((prev) => ({ ...prev, fplLeagueId: newId }));
    showNotification(`Updated FPL Mini-League ID to ${newId}.`);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-main)] flex flex-col pb-20 sm:pb-8 relative">
      {/* Dynamic Soccer Pitch Background Drawing & Stadium Lighting */}
      <SoccerPitchBackground />

      {/* Top Header */}
      <Header
        stats={stats}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onRefresh={handleRefresh}
        isRefreshing={isRefreshing}
        onOpenShare={() => setIsShareModalOpen(true)}
        onOpenRules={() => setIsRulesModalOpen(true)}
        isLiveFpl={isLiveFpl}
        isAdmin={isAdmin}
      />

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* Floating In-App Toast Notification */}
        {notification && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm font-medium shadow-lg shadow-emerald-950/30 flex items-center justify-between animate-in fade-in slide-in-from-top-2">
            <span>{notification}</span>
            <button
              onClick={() => setNotification(null)}
              className="text-emerald-300 hover:text-white ml-2 text-xs"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Quick Stat Highlights */}
        <QuickStats
          stats={stats}
          currentBlock={currentBlock}
          onSelectTab={setActiveTab}
        />

        {/* Navigation Tabs (Segmented bar on Desktop, bottom bar on mobile) */}
        <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Tab Content Panels */}
        <div className="mt-4">
          {activeTab === 'standings' && (
            <StandingsTab
              managers={managers}
              onSelectManager={setSelectedManager}
              currentGw={stats.currentGameweek}
            />
          )}

          {activeTab === 'blocks' && (
            <BlockRaceTracker
              managers={managers}
              onSelectManager={setSelectedManager}
              currentGw={stats.currentGameweek}
            />
          )}

          {activeTab === 'prizes' && (
            <PrizePoolTab
              stats={stats}
              managers={managers}
              onOpenRules={() => setIsRulesModalOpen(true)}
            />
          )}

          {activeTab === 'settings' && (
            <SettingsTab
              key={stats.fplLeagueId}
              stats={stats}
              managers={managers}
              isLiveFpl={isLiveFpl}
              onToggleLiveFpl={setIsLiveFpl}
              onUpdateLeagueId={handleUpdateLeagueId}
              onRefresh={handleRefresh}
              isRefreshing={isRefreshing}
              onSimulateNextGw={handleSimulateNextGw}
              onResetData={handleResetData}
              onOpenShare={() => setIsShareModalOpen(true)}
              onSelectManager={setSelectedManager}
              isAdmin={isAdmin}
              onToggleAdmin={handleToggleAdmin}
            />
          )}
        </div>
      </main>

      {/* Manager Detail Modal */}
      <ManagerModal
        manager={selectedManager}
        onClose={() => setSelectedManager(null)}
        currentGw={stats.currentGameweek}
      />

      {/* WhatsApp Share Broadcast Modal */}
      <WhatsAppShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        managers={managers}
        currentBlock={currentBlock}
        blockStandings={blockStandings}
        isAdmin={isAdmin}
      />

      {/* Official Rules Modal */}
      <RulesModal
        isOpen={isRulesModalOpen}
        onClose={() => setIsRulesModalOpen(false)}
      />

      {/* Smooth Back to Top Button */}
      <BackToTop />
    </div>
  );
}
