'use client';

import React from 'react';
import { Icon } from './Icon';
import { LeagueStats } from '@/lib/types';

interface HeaderProps {
  stats: LeagueStats;
  activeTab: string;
  onTabChange: (tab: string) => void;
  onRefresh: () => void;
  isRefreshing: boolean;
  onOpenShare: () => void;
  onOpenRules: () => void;
  isLiveFpl: boolean;
  isAdmin?: boolean;
}

export function Header({
  stats,
  activeTab,
  onTabChange,
  onRefresh,
  isRefreshing,
  onOpenShare,
  onOpenRules,
  isLiveFpl,
  isAdmin = false,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-emerald-500/20 bg-[var(--surface-1)]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Brand & Trophy */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-500/20 via-emerald-500/20 to-cyan-500/20 border border-emerald-500/40 flex items-center justify-center text-amber-400 shadow-md shadow-emerald-950/40">
              <Icon name="Trophy" size={20} className="text-amber-400 drop-shadow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-bold text-[var(--text-main)] tracking-tight">
                  {stats.leagueName}
                </h1>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  GW {stats.currentGameweek} active
                </span>
                {isAdmin && (
                  <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    <Icon name="Crown" size={11} />
                    Commissioner
                  </span>
                )}
              </div>
              <p className="text-xs text-[var(--text-muted)] flex items-center gap-1.5">
                <Icon name="Lock" size={12} className="text-amber-400" />
                <span>Registration locked</span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-400 font-medium">16 paid managers</span>
              </p>
            </div>
          </div>

          {/* Quick Info & Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Live Indicator on Mobile */}
            <span className="inline-flex sm:hidden items-center px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              GW {stats.currentGameweek}
            </span>

            {/* FPL Connection Mode Pill */}
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--surface-2)] text-xs text-[var(--text-muted)] border border-[var(--border-subtle)]">
              <span className={`w-2 h-2 rounded-full ${isLiveFpl ? 'bg-emerald-400' : 'bg-purple-400'}`}></span>
              <span>{isLiveFpl ? 'FPL Live Sync' : 'Verified Cache'}</span>
            </div>

            {/* Payment Rules Button */}
            <button
              onClick={onOpenRules}
              title="Official payment rules"
              aria-label="Official payment rules"
              className="p-2 rounded-lg bg-[var(--surface-2)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-emerald-500/40 transition-colors"
            >
              <Icon name="ShieldCheck" size={18} />
            </button>

            {/* WhatsApp Share Button */}
            <button
              onClick={onOpenShare}
              title="Share league standings to WhatsApp"
              aria-label="Share league standings to WhatsApp"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-all duration-200 active:scale-95"
            >
              <Icon name="Share2" size={14} />
              <span>{isAdmin ? 'Broadcast update' : 'Share league'}</span>
            </button>

            {/* Refresh Data Button */}
            <button
              onClick={onRefresh}
              disabled={isRefreshing}
              title="Refresh gameweek scores"
              aria-label="Refresh gameweek scores"
              className="p-2 rounded-lg bg-[var(--surface-2)] border border-[var(--border-subtle)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-emerald-500/40 transition-colors disabled:opacity-50"
            >
              <Icon
                name="RefreshCw"
                size={18}
                className={isRefreshing ? 'animate-spin text-emerald-400' : ''}
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
