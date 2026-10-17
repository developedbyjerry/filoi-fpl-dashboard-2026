'use client';

import React, { useState, useMemo } from 'react';
import { Icon } from './Icon';
import { TeamBadge } from './TeamBadge';
import { Manager } from '@/lib/types';

interface StandingsTabProps {
  managers: Manager[];
  onSelectManager: (manager: Manager) => void;
  currentGw: number;
}

export function StandingsTab({ managers, onSelectManager, currentGw }: StandingsTabProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [sortBy, setSortBy] = useState<'total' | 'gw' | 'rank'>('total');

  // Filter & sort
  const filteredManagers = useMemo(() => {
    let result = managers.filter((m) => {
      const q = searchQuery.toLowerCase().trim();
      return (
        m.managerName.toLowerCase().includes(q) ||
        m.teamName.toLowerCase().includes(q) ||
        m.whatsappTag.toLowerCase().includes(q)
      );
    });

    if (sortBy === 'gw') {
      result.sort((a, b) => b.currentGwPoints - a.currentGwPoints);
    } else if (sortBy === 'total') {
      result.sort((a, b) => b.totalPoints - a.totalPoints);
    } else {
      result.sort((a, b) => a.overallRank - b.overallRank);
    }

    return result;
  }, [managers, searchQuery, sortBy]);

  return (
    <div className="space-y-4">
      {/* Control Header Strip (Sort on Left, Compact Search Icon at Top Right) */}
      <div className="flex items-center justify-between gap-3 bg-[var(--surface-1)] px-4 py-2.5 rounded-xl border border-[var(--border-subtle)]">
        {/* Left: Sort switcher */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[var(--text-muted)]">Sort:</span>
          <div className="flex items-center gap-1 p-0.5 bg-[var(--surface-2)] rounded-lg border border-[var(--border-subtle)] text-xs">
            <button
              onClick={() => setSortBy('total')}
              className={`px-3 py-1 rounded font-medium transition-colors ${
                sortBy === 'total'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
              }`}
            >
              Total pts
            </button>
            <button
              onClick={() => setSortBy('gw')}
              className={`px-3 py-1 rounded font-medium transition-colors ${
                sortBy === 'gw'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
              }`}
            >
              GW {currentGw} pts
            </button>
          </div>
          {searchQuery && (
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
              <span>Filter: &quot;{searchQuery}&quot;</span>
              <button onClick={() => setSearchQuery('')} className="hover:text-white">
                <Icon name="X" size={12} />
              </button>
            </span>
          )}
        </div>

        {/* Right: Small Search Icon / Expandable Compact Search Box */}
        <div className="flex items-center gap-2">
          {isSearchOpen ? (
            <div className="relative flex items-center animate-in fade-in slide-in-from-right-2 duration-150">
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search manager..."
                className="w-40 sm:w-56 pl-7 pr-7 py-1 text-xs rounded-lg bg-[var(--surface-2)] text-[var(--text-main)] placeholder-[var(--text-muted)] border border-emerald-500/50 focus:border-emerald-400 outline-none"
              />
              <div className="absolute left-2 text-[var(--text-muted)] pointer-events-none">
                <Icon name="Search" size={13} />
              </div>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setIsSearchOpen(false);
                }}
                title="Close search"
                aria-label="Close search"
                className="absolute right-2 text-[var(--text-muted)] hover:text-white"
              >
                <Icon name="X" size={13} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsSearchOpen(true)}
              title="Search manager or team"
              aria-label="Search manager or team"
              className={`p-2 rounded-lg border transition-all ${
                searchQuery
                  ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 shadow-sm'
                  : 'bg-[var(--surface-2)] text-[var(--text-muted)] border-[var(--border-subtle)] hover:text-[var(--text-main)] hover:border-emerald-500/40'
              }`}
            >
              <Icon name="Search" size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Standings List / Table */}
      <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-1)] overflow-hidden shadow-sm">
        {/* Table Header (Desktop) */}
        <div className="hidden md:grid grid-cols-12 gap-3 px-4 py-3 bg-[var(--surface-2)]/60 text-xs font-semibold text-[var(--text-muted)] border-b border-[var(--border-subtle)]">
          <div className="col-span-1 text-center">Rank</div>
          <div className="col-span-5">Manager & team</div>
          <div className="col-span-2 text-center">Captain (GW {currentGw})</div>
          <div className="col-span-2 text-right">GW {currentGw} pts</div>
          <div className="col-span-2 text-right">Total points</div>
        </div>

        {/* Manager Rows */}
        <div className="divide-y divide-[var(--border-subtle)]">
          {filteredManagers.map((m) => {
            const isFirst = m.overallRank === 1;
            const isSecond = m.overallRank === 2;
            const isThird = m.overallRank === 3;

            return (
              <div
                key={m.id}
                onClick={() => onSelectManager(m)}
                className={`group relative p-3 sm:px-4 sm:py-3.5 flex flex-col md:grid md:grid-cols-12 md:items-center gap-2 md:gap-3 transition-colors cursor-pointer ${
                  isFirst
                    ? 'bg-amber-500/[0.04] hover:bg-amber-500/[0.09]'
                    : isSecond
                    ? 'bg-slate-300/[0.03] hover:bg-slate-300/[0.07]'
                    : isThird
                    ? 'bg-amber-700/[0.03] hover:bg-amber-700/[0.07]'
                    : 'hover:bg-[var(--surface-2)]/70'
                }`}
              >
                {/* Mobile & Desktop Row Content */}
                <div className="flex items-center justify-between md:contents">
                  {/* Rank & Movement Column */}
                  <div className="col-span-1 flex items-center gap-2 md:justify-center">
                    {/* Podium Badges */}
                    {isFirst ? (
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 font-black text-xs flex items-center justify-center shadow-md shadow-amber-500/20">
                        1st
                      </div>
                    ) : isSecond ? (
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-slate-200 to-slate-400 text-slate-950 font-black text-xs flex items-center justify-center shadow-sm">
                        2nd
                      </div>
                    ) : isThird ? (
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-600 to-amber-800 text-white font-black text-xs flex items-center justify-center shadow-sm">
                        3rd
                      </div>
                    ) : (
                      <span className="w-7 h-7 flex items-center justify-center font-mono font-bold text-sm text-[var(--text-muted)]">
                        {m.overallRank}
                      </span>
                    )}

                    {/* Rank Movement Indicator */}
                    <div className="flex items-center text-xs font-mono">
                      {m.overallRankMovement === 'up' && (
                        <span className="text-emerald-400 flex items-center" title={`Up ${m.rankDelta} places`}>
                          <Icon name="ArrowUp" size={13} strokeWidth={2.5} />
                          {m.rankDelta > 1 && <span className="text-[10px] ml-0.5">{m.rankDelta}</span>}
                        </span>
                      )}
                      {m.overallRankMovement === 'down' && (
                        <span className="text-red-400 flex items-center" title={`Down ${m.rankDelta} places`}>
                          <Icon name="ArrowDown" size={13} strokeWidth={2.5} />
                          {m.rankDelta > 1 && <span className="text-[10px] ml-0.5">{m.rankDelta}</span>}
                        </span>
                      )}
                      {m.overallRankMovement === 'same' && (
                        <span className="text-slate-500 flex items-center" title="No rank change">
                          <Icon name="Minus" size={13} />
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Manager and Team Column with Logo */}
                  <div className="col-span-5 flex items-center gap-3 min-w-0 pr-2">
                    <TeamBadge manager={m} size="md" showGlow={isFirst} />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm sm:text-base text-[var(--text-main)] group-hover:text-emerald-300 transition-colors truncate">
                          {m.teamName}
                        </span>
                        {m.paid && (
                          <span className="inline-flex items-center text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20 shrink-0">
                            Paid
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-[var(--text-muted)] flex items-center gap-2 mt-0.5 truncate">
                        <span className="text-slate-300">{m.managerName}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono text-[11px] text-emerald-400/80">{m.whatsappTag}</span>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Captain Column */}
                  <div className="hidden md:flex col-span-2 items-center justify-center text-xs text-[var(--text-muted)]">
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[var(--surface-2)] border border-[var(--border-subtle)] truncate max-w-full">
                      <Icon name="UserCheck" size={12} className="text-purple-400 shrink-0" />
                      <span className="truncate">{m.captain}</span>
                    </div>
                  </div>

                  {/* Points on Desktop & Mobile */}
                  <div className="col-span-2 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <span className="text-xs font-semibold text-emerald-400 font-mono tabular-nums">
                        +{m.currentGwPoints}
                      </span>
                      <span className="text-[10px] text-[var(--text-muted)] md:hidden">GW</span>
                    </div>
                  </div>

                  <div className="col-span-2 text-right">
                    <div className="text-base sm:text-lg font-bold font-mono tabular-nums text-[var(--text-main)] group-hover:text-purple-300 transition-colors">
                      {m.totalPoints}
                    </div>
                  </div>
                </div>

                {/* Floating Podium Payout Tag */}
                {isFirst && (
                  <div className="mt-1.5 md:mt-0 md:absolute md:right-4 md:-top-2.5">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold font-mono px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30">
                      <Icon name="Crown" size={11} strokeWidth={2.5} />
                      Standing to win ₦32,000 (1st)
                    </span>
                  </div>
                )}
                {isSecond && (
                  <div className="mt-1.5 md:mt-0 md:absolute md:right-4 md:-top-2.5">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold font-mono px-2 py-0.5 rounded-full bg-slate-200 text-slate-900 shadow-sm">
                      <Icon name="Award" size={11} strokeWidth={2.5} />
                      Standing to win ₦16,000 (2nd)
                    </span>
                  </div>
                )}
                {isThird && (
                  <div className="mt-1.5 md:mt-0 md:absolute md:right-4 md:-top-2.5">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold font-mono px-2 py-0.5 rounded-full bg-amber-700 text-amber-100 shadow-sm">
                      <Icon name="Medal" size={11} strokeWidth={2.5} />
                      Standing to win ₦8,000 (3rd)
                    </span>
                  </div>
                )}
              </div>
            );
          })}

          {filteredManagers.length === 0 && (
            <div className="text-center py-12 px-4 text-[var(--text-muted)]">
              <Icon name="SearchX" size={36} className="mx-auto mb-2 opacity-40" />
              <p className="text-sm font-medium">No managers match &quot;{searchQuery}&quot;</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-2 text-xs text-[var(--primary)] hover:underline"
              >
                Clear filter
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
