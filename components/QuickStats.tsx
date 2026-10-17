'use client';

import React from 'react';
import { Icon } from './Icon';
import { LeagueStats, BlockConfig } from '@/lib/types';

interface QuickStatsProps {
  stats: LeagueStats;
  currentBlock: BlockConfig;
  onSelectTab: (tab: string) => void;
}

export function QuickStats({ stats, currentBlock, onSelectTab }: QuickStatsProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 my-4">
      {/* Total Pot Card */}
      <div 
        onClick={() => onSelectTab('prizes')}
        className="cursor-pointer group p-3.5 sm:p-4 rounded-xl bg-[var(--surface-1)] border border-[var(--border-subtle)] hover:border-amber-500/40 transition-all duration-200"
      >
        <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mb-1">
          <span className="font-medium">Total prize pool</span>
          <div className="p-1 rounded bg-amber-500/10 text-amber-400">
            <Icon name="Coins" size={14} />
          </div>
        </div>
        <div className="text-lg sm:text-2xl font-bold font-mono tabular-nums text-amber-400">
          {stats.totalPotFormatted}
        </div>
        <p className="text-[11px] text-[var(--text-muted)] mt-1 flex items-center justify-between">
          <span>16 paid × ₦5,000</span>
          <span className="text-amber-400/90 group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
            Breakdown
            <Icon name="ChevronRight" size={12} />
          </span>
        </p>
      </div>

      {/* 1st Place Bounty Card */}
      <div 
        onClick={() => onSelectTab('standings')}
        className="cursor-pointer group p-3.5 sm:p-4 rounded-xl bg-[var(--surface-1)] border border-[var(--border-subtle)] hover:border-purple-500/40 transition-all duration-200"
      >
        <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mb-1">
          <span className="font-medium">1st place prize (40%)</span>
          <div className="p-1 rounded bg-purple-500/10 text-purple-400">
            <Icon name="Crown" size={14} />
          </div>
        </div>
        <div className="text-lg sm:text-2xl font-bold font-mono tabular-nums text-[var(--text-main)]">
          ₦32,000.00
        </div>
        <p className="text-[11px] text-[var(--text-muted)] mt-1 flex items-center justify-between">
          <span>League champion</span>
          <span className="text-purple-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
            Race
            <Icon name="ChevronRight" size={12} />
          </span>
        </p>
      </div>

      {/* Block Bounty Card */}
      <div 
        onClick={() => onSelectTab('blocks')}
        className="cursor-pointer group p-3.5 sm:p-4 rounded-xl bg-[var(--surface-1)] border border-[var(--border-subtle)] hover:border-emerald-500/40 transition-all duration-200"
      >
        <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mb-1">
          <span className="font-medium">{currentBlock.name} bounty</span>
          <div className="p-1 rounded bg-emerald-500/10 text-emerald-400">
            <Icon name="Flame" size={14} />
          </div>
        </div>
        <div className="text-lg sm:text-2xl font-bold font-mono tabular-nums text-emerald-400">
          {currentBlock.prizeFormatted}
        </div>
        <p className="text-[11px] text-[var(--text-muted)] mt-1 flex items-center justify-between">
          <span>GW {currentBlock.startGw}–{currentBlock.endGw}</span>
          <span className="text-emerald-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
            Leaderboard
            <Icon name="ChevronRight" size={12} />
          </span>
        </p>
      </div>

      {/* Registration Locked Status Card */}
      <div 
        onClick={() => onSelectTab('settings')}
        className="cursor-pointer group p-3.5 sm:p-4 rounded-xl bg-[var(--surface-1)] border border-[var(--border-subtle)] hover:border-blue-500/40 transition-all duration-200"
      >
        <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mb-1">
          <span className="font-medium">Manager roster</span>
          <div className="p-1 rounded bg-blue-500/10 text-blue-400">
            <Icon name="ShieldAlert" size={14} />
          </div>
        </div>
        <div className="text-lg sm:text-2xl font-bold font-mono tabular-nums text-[var(--text-main)] flex items-center gap-2">
          <span>16 / 16</span>
          <span className="text-xs px-2 py-0.5 rounded font-sans font-semibold bg-red-500/15 text-red-400 border border-red-500/30">
            Closed
          </span>
        </div>
        <p className="text-[11px] text-[var(--text-muted)] mt-1 flex items-center justify-between">
          <span>All ₦5k dues verified</span>
          <span className="text-blue-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
            Audit
            <Icon name="ChevronRight" size={12} />
          </span>
        </p>
      </div>
    </div>
  );
}
