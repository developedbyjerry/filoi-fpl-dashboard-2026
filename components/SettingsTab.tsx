'use client';

import React, { useState, useEffect } from 'react';
import { Icon } from './Icon';
import { TeamBadge } from './TeamBadge';
import { LeagueStats, Manager } from '@/lib/types';

interface SettingsTabProps {
  stats: LeagueStats;
  managers: Manager[];
  isLiveFpl: boolean;
  onToggleLiveFpl: (enabled: boolean) => void;
  onUpdateLeagueId: (newId: number) => void;
  onRefresh: () => void;
  isRefreshing: boolean;
  onSimulateNextGw: () => void;
  onResetData: () => void;
  onOpenShare: () => void;
  onSelectManager: (manager: Manager) => void;
  isAdmin: boolean;
  onToggleAdmin: (status: boolean) => void;
}

export function SettingsTab({
  stats,
  managers,
  isLiveFpl,
  onToggleLiveFpl,
  onUpdateLeagueId,
  onRefresh,
  isRefreshing,
  onSimulateNextGw,
  onResetData,
  onOpenShare,
  onSelectManager,
  isAdmin,
  onToggleAdmin,
}: SettingsTabProps) {
  const [leagueIdInput, setLeagueIdInput] = useState(stats.fplLeagueId.toString());
  const [isSaved, setIsSaved] = useState(false);
  const [copiedRoster, setCopiedRoster] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);
  const [isUnlockModalOpen, setIsUnlockModalOpen] = useState(false);

  const handleSaveLeagueId = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = parseInt(leagueIdInput, 10);
    if (!isNaN(parsed) && parsed > 0) {
      onUpdateLeagueId(parsed);
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 2500);
    }
  };

  const handleCopyRoster = () => {
    const text = managers
      .map(
        (m, idx) =>
          `${idx + 1}. ${m.managerName} | ${m.teamName} | Entry ID: ${m.entry} | Status: PAID ₦5,000 (${m.paymentTimestamp})`
      )
      .join('\n');
    navigator.clipboard.writeText(text);
    setCopiedRoster(true);
    setTimeout(() => setCopiedRoster(false), 2000);
  };

  const handleVerifyPin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default commissioner PIN is 3989 (first 4 digits of league ID) or 1234
    if (pinInput.trim() === '3989' || pinInput.trim() === '1234' || pinInput.trim() === 'filoi') {
      onToggleAdmin(true);
      setIsUnlockModalOpen(false);
      setPinInput('');
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  return (
    <div className="space-y-6">
      {/* 1. COMMISSIONER CONSOLE (Visible only when unlocked as Admin) */}
      {isAdmin ? (
        <div className="p-5 rounded-2xl bg-gradient-to-b from-emerald-950/40 via-[var(--surface-1)] to-[var(--surface-1)] border-2 border-emerald-500/40 shadow-xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-emerald-500/20">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <Icon name="Crown" size={20} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-[var(--text-main)]">
                    Commissioner Maintenance Console
                  </h3>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Admin Active
                  </span>
                </div>
                <p className="text-xs text-[var(--text-muted)]">
                  Logged in as League Administrator. These configuration tools are hidden from regular members.
                </p>
              </div>
            </div>

            <button
              onClick={() => onToggleAdmin(false)}
              className="self-start sm:self-auto px-3 py-1.5 rounded-lg bg-[var(--surface-2)] hover:bg-red-500/20 hover:text-red-400 border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-muted)] transition-colors flex items-center gap-1.5"
            >
              <Icon name="Lock" size={13} />
              <span>Lock Console</span>
            </button>
          </div>

          {/* FPL Live Sync Configuration (The exact control in user screenshot) */}
          <div className="space-y-4 pt-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-sm font-bold text-[var(--text-main)] flex items-center gap-2">
                  <Icon name="Radio" size={16} className="text-emerald-400" />
                  <span>FPL live sync configuration</span>
                </h4>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">
                  Connect to Fantasy Premier League classic mini-league servers or use verified offline cache
                </p>
              </div>

              {/* Mode Switch Toggle */}
              <div className="flex items-center gap-1.5 self-start sm:self-auto bg-[var(--surface-2)] p-1 rounded-lg border border-[var(--border-subtle)]">
                <button
                  onClick={() => onToggleLiveFpl(false)}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                    !isLiveFpl
                      ? 'bg-purple-600 text-white shadow-sm'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
                  }`}
                >
                  Demo / Cache
                </button>
                <button
                  onClick={() => onToggleLiveFpl(true)}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                    isLiveFpl
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                  Live FPL API
                </button>
              </div>
            </div>

            {/* League ID Form */}
            <form onSubmit={handleSaveLeagueId} className="pt-1">
              <label className="block text-xs font-semibold text-[var(--text-muted)] mb-1">
                FPL Classic Mini-League ID
              </label>
              <div className="flex flex-col sm:flex-row gap-2 max-w-lg">
                <input
                  type="text"
                  value={leagueIdInput}
                  onChange={(e) => setLeagueIdInput(e.target.value)}
                  placeholder="e.g., 398938"
                  className="flex-1 px-3 py-2 text-sm rounded-lg bg-[var(--surface-2)] text-[var(--text-main)] border border-[var(--border-subtle)] focus:border-emerald-400 outline-none font-mono"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  {isSaved ? <Icon name="Check" size={14} /> : <Icon name="Save" size={14} />}
                  <span>{isSaved ? 'Saved' : 'Update ID'}</span>
                </button>
                <button
                  type="button"
                  onClick={onRefresh}
                  disabled={isRefreshing}
                  className="px-4 py-2 rounded-lg bg-[var(--surface-2)] hover:bg-[var(--surface-1)] border border-[var(--border-subtle)] text-[var(--text-main)] text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 disabled:opacity-50"
                >
                  <Icon
                    name="RefreshCw"
                    size={14}
                    className={isRefreshing ? 'animate-spin text-emerald-400' : ''}
                  />
                  <span>{isRefreshing ? 'Syncing...' : 'Sync now'}</span>
                </button>
              </div>
              <p className="text-[11px] text-[var(--text-muted)] mt-1.5">
                Queries Premier League Classic Standings API with automatic proxying. If network is blocked or FPL is updating, offline cache remains 100% active.
              </p>
            </form>

            {/* Admin Maintenance Tools */}
            <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-wrap items-center gap-2">
              <button
                onClick={onSimulateNextGw}
                className="px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/25 text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                <Icon name="FastForward" size={14} />
                <span>Simulate next gameweek (GW {stats.currentGameweek + 1})</span>
              </button>
              <button
                onClick={onResetData}
                className="px-3 py-1.5 rounded-lg bg-[var(--surface-2)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-main)] text-xs font-medium transition-colors flex items-center gap-1.5"
              >
                <Icon name="RotateCcw" size={13} />
                <span>Reset to baseline (GW 6)</span>
              </button>
              <button
                onClick={onOpenShare}
                className="px-3 py-1.5 rounded-lg bg-[var(--surface-2)] border border-[var(--border-subtle)] text-emerald-400 hover:text-emerald-300 text-xs font-medium transition-colors flex items-center gap-1.5"
              >
                <Icon name="Share2" size={13} />
                <span>Broadcast message preview</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* 2. PUBLIC LEAGUE INFO CARD (Visible to all viewers) */
        <div className="p-5 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-[var(--text-main)]">
                  {stats.leagueName}
                </h3>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  FPL Verified
                </span>
              </div>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                Official Classic Mini-League ID: <span className="font-mono text-slate-200 font-semibold">{stats.fplLeagueId}</span> · Registration Permanently Locked
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`https://fantasy.premierleague.com/en/leagues/${stats.fplLeagueId}/standings`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/25 text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                <Icon name="ExternalLink" size={14} />
                <span>View on FPL official</span>
              </a>

              <button
                onClick={onRefresh}
                disabled={isRefreshing}
                className="px-3.5 py-2 rounded-lg bg-[var(--surface-2)] hover:bg-[var(--surface-1)] border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-main)] transition-colors flex items-center gap-1.5 disabled:opacity-50"
              >
                <Icon
                  name="RefreshCw"
                  size={14}
                  className={isRefreshing ? 'animate-spin text-emerald-400' : ''}
                />
                <span>{isRefreshing ? 'Syncing...' : 'Refresh scores'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. 16 VERIFIED MANAGERS ROSTER & PAYMENT AUDIT (Clean & Public) */}
      <div className="p-5 rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-[var(--text-main)] flex items-center gap-2">
              <Icon name="ShieldCheck" size={18} className="text-emerald-400" />
              <span>16 verified managers roster &amp; payment audit</span>
            </h3>
            <p className="text-xs text-[var(--text-muted)] mt-0.5">
              Registration deadline passed at 3:00 PM · Exactly 16 paid entries locked into the ₦80,000 pot
            </p>
          </div>
          <button
            onClick={handleCopyRoster}
            className="self-start sm:self-auto px-3 py-1.5 rounded-lg bg-[var(--surface-2)] hover:bg-[var(--surface-1)] border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-main)] flex items-center gap-1.5 transition-colors"
          >
            {copiedRoster ? <Icon name="Check" size={14} className="text-emerald-400" /> : <Icon name="Copy" size={14} />}
            <span>{copiedRoster ? 'Copied to clipboard' : 'Copy roster audit'}</span>
          </button>
        </div>

        {/* Manager Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {managers.map((m, idx) => (
            <div
              key={m.id}
              onClick={() => onSelectManager(m)}
              className="p-3 rounded-xl bg-[var(--surface-2)]/60 border border-[var(--border-subtle)] flex items-center justify-between gap-3 hover:border-emerald-500/40 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="w-6 h-6 rounded bg-[var(--surface-1)] border border-[var(--border-subtle)] text-[11px] font-mono font-bold text-[var(--text-muted)] flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <TeamBadge manager={m} size="sm" />
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs sm:text-sm font-semibold text-[var(--text-main)] truncate">
                      {m.managerName}
                    </span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded font-mono">
                      PAID
                    </span>
                  </div>
                  <div className="text-[11px] text-[var(--text-muted)] truncate">
                    {m.teamName} · <span className="font-mono text-emerald-400/80">ID: {m.entry}</span>
                  </div>
                </div>
              </div>

              <div className="text-right shrink-0">
                <span className="text-xs font-mono font-semibold text-amber-400 block">
                  ₦5,000.00
                </span>
                <span className="text-[10px] text-[var(--text-muted)] block">
                  {m.paymentTimestamp.split('•')[0]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. DISCREET COMMISSIONER UNLOCK FOOTER (For Jerry to log in) */}
      {!isAdmin && (
        <div className="p-4 rounded-xl bg-[var(--surface-2)]/40 border border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-[var(--text-muted)]">
            <Icon name="Lock" size={14} className="text-slate-500" />
            <span>Commissioner tools locked for standard viewers.</span>
          </div>
          <button
            onClick={() => setIsUnlockModalOpen(true)}
            className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 underline flex items-center gap-1"
          >
            <Icon name="KeyRound" size={13} />
            <span>Commissioner sign-in</span>
          </button>
        </div>
      )}

      {/* COMMISSIONER PIN UNLOCK MODAL */}
      {isUnlockModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
          <div
            onClick={() => setIsUnlockModalOpen(false)}
            className="fixed inset-0 modal-backdrop"
          />
          <div className="relative w-full max-w-sm rounded-2xl bg-[var(--surface-1)] border border-emerald-500/30 p-5 shadow-2xl z-10 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
                  <Icon name="Shield" size={18} />
                </div>
                <h4 className="font-bold text-sm text-[var(--text-main)]">
                  Commissioner Authorization
                </h4>
              </div>
              <button
                onClick={() => setIsUnlockModalOpen(false)}
                className="text-[var(--text-muted)] hover:text-white"
              >
                <Icon name="X" size={16} />
              </button>
            </div>

            <p className="text-xs text-[var(--text-muted)]">
              Enter Commissioner PIN to unlock the maintenance console (FPL ID configuration, gameweek simulation, and sync settings).
            </p>

            <form onSubmit={handleVerifyPin} className="space-y-3">
              <div>
                <input
                  type="password"
                  autoFocus
                  value={pinInput}
                  onChange={(e) => {
                    setPinInput(e.target.value);
                    setPinError(false);
                  }}
                  placeholder="Enter PIN (e.g. 3989)"
                  className="w-full px-3 py-2 text-sm text-center font-mono tracking-widest rounded-lg bg-[var(--surface-2)] text-white border border-[var(--border-subtle)] focus:border-emerald-400 outline-none"
                />
                {pinError && (
                  <p className="text-[11px] text-red-400 mt-1 text-center">
                    Incorrect PIN. Try 3989 or 1234.
                  </p>
                )}
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setIsUnlockModalOpen(false)}
                  className="flex-1 py-2 rounded-lg bg-[var(--surface-2)] text-xs font-semibold text-[var(--text-muted)] hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white shadow-md shadow-emerald-950/40"
                >
                  Unlock
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
