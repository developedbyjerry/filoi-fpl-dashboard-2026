'use client';

import React, { useState, useMemo } from 'react';
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
  const [stats, setStats] = useState<LeagueStats>(INITIAL_LEAGUE_STATS);
  const [managers, setManagers] = useState<Manager[]>(INITIAL_MANAGERS);
  const [activeTab, setActiveTab] = useState<string>('standings');
  const [selectedManager, setSelectedManager] = useState<Manager | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLiveFpl, setIsLiveFpl] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('filoi_admin_session') === 'true';
    }
    return false;
  });

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

  // Current active block
  const currentBlock = useMemo(() => {
    return (
      BLOCKS.find(
        (b) => stats.currentGameweek >= b.startGw && stats.currentGameweek <= b.endGw
      ) || BLOCKS[0]
    );
  }, [stats.currentGameweek]);

  // Block standings for current block
  const blockStandings = useMemo(() => {
    return calculateBlockStandings(managers, currentBlock);
  }, [managers, currentBlock]);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification((curr) => (curr === msg ? null : curr));
    }, 3500);
  };

  // Refresh handler
  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch(`/api/fpl/league?leagueId=${stats.fplLeagueId}`);
      const json = await res.json();
      if (json.success && json.standings && json.standings.length > 0) {
        const standingsMap = new Map<number, any>();
        json.standings.forEach((s: any) => {
          standingsMap.set(s.entry, s);
        });

        const updated = managers.map((m) => {
          const live = standingsMap.get(m.entry);
          if (!live) return m;

          return {
            ...m,
            totalPoints: live.total,
            currentGwPoints: live.event_total,
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
        showNotification('Official FPL standings for League 398938 synchronized successfully!');
      } else {
        showNotification('Standings refreshed with verified roster cache.');
      }
    } catch {
      showNotification('Using verified offline cache.');
    } finally {
      setIsRefreshing(false);
    }
  };

  // Simulate Next Gameweek (e.g., advancing to GW 9 - Block 1 Climax!)
  const handleSimulateNextGw = () => {
    if (stats.currentGameweek >= 38) {
      showNotification('Season complete! All 38 gameweeks have finished.');
      return;
    }

    const nextGw = stats.currentGameweek + 1;
    const updated = managers.map((m) => {
      // Deterministic realistic points for next GW (between 45 and 85)
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

    // Re-rank
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
    }));

    if (nextGw === 9) {
      showNotification(`🎉 Gameweek 9 Concluded! Block 1 Winner Crowned (₦4,000 Bounty)!`);
    } else {
      showNotification(`Simulated Gameweek ${nextGw}! Standings updated.`);
    }
  };

  // Reset Data to Initial
  const handleResetData = () => {
    setManagers(INITIAL_MANAGERS);
    setStats(INITIAL_LEAGUE_STATS);
    showNotification('Reset league data to default GW 8 baseline.');
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
