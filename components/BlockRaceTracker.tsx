'use client';

import React, { useState, useMemo } from 'react';
import { Icon } from './Icon';
import { TeamBadge } from './TeamBadge';
import { Manager, BlockConfig, BlockStanding } from '@/lib/types';
import { BLOCKS, calculateBlockStandings } from '@/lib/leagueData';

interface BlockRaceTrackerProps {
  managers: Manager[];
  onSelectManager: (manager: Manager) => void;
  currentGw: number;
}

export function BlockRaceTracker({ managers, onSelectManager, currentGw }: BlockRaceTrackerProps) {
  // Find current active block based on currentGw
  const defaultBlock = useMemo(() => {
    return BLOCKS.find((b) => currentGw >= b.startGw && currentGw <= b.endGw) || BLOCKS[0];
  }, [currentGw]);

  const [selectedBlockId, setSelectedBlockId] = useState<number>(defaultBlock.id);

  const selectedBlock = useMemo(() => {
    return BLOCKS.find((b) => b.id === selectedBlockId) || BLOCKS[0];
  }, [selectedBlockId]);

  const standings: BlockStanding[] = useMemo(() => {
    return calculateBlockStandings(managers, selectedBlock);
  }, [managers, selectedBlock]);

  const leader = standings[0];
  const secondPlace = standings[1];
  const leadMargin = leader && secondPlace ? leader.blockPoints - secondPlace.blockPoints : 0;
  const isBlockActive = currentGw >= selectedBlock.startGw && currentGw <= selectedBlock.endGw;
  const isBlockCompleted = currentGw > selectedBlock.endGw;
  const isBlockUpcoming = currentGw < selectedBlock.startGw;

  return (
    <div className="space-y-4">
      {/* Block Selector Tabs */}
      <div className="bg-[var(--surface-1)] p-2 rounded-xl border border-[var(--border-subtle)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {BLOCKS.map((block) => {
            const isSelected = selectedBlock.id === block.id;
            const isLive = currentGw >= block.startGw && currentGw <= block.endGw;
            const isFinished = currentGw > block.endGw;

            return (
              <button
                key={block.id}
                onClick={() => setSelectedBlockId(block.id)}
                className={`flex flex-col p-3 rounded-lg text-left transition-all duration-200 border ${
                  isSelected
                    ? 'bg-[var(--surface-2)] border-emerald-500 shadow-md shadow-emerald-950/30'
                    : 'bg-transparent border-transparent hover:bg-[var(--surface-2)]/60 text-[var(--text-muted)]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-xs font-bold ${isSelected ? 'text-[var(--text-main)]' : ''}`}>
                    {block.name}
                  </span>
                  {isLive && (
                    <span className="flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.2 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      LIVE
                    </span>
                  )}
                  {isFinished && (
                    <span className="text-[10px] font-medium text-slate-400">
                      Completed
                    </span>
                  )}
                  {isBlockUpcoming && (
                    <span className="text-[10px] font-medium text-slate-500">
                      Upcoming
                    </span>
                  )}
                </div>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-xs text-[var(--text-muted)]">
                    GW {block.startGw}–{block.endGw}
                  </span>
                  <span className="font-mono text-xs font-bold text-amber-400">
                    ₦4,000
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Current Block Leader Banner */}
      {leader && (
        <div className="relative overflow-hidden rounded-xl border border-emerald-500/40 bg-gradient-to-r from-emerald-950/60 via-[var(--surface-1)] to-cyan-950/40 p-4 sm:p-5 shadow-lg shadow-emerald-950/30">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <TeamBadge manager={leader.manager} size="lg" showGlow />
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                    <Icon name="Crown" size={13} className="text-amber-400" />
                    {selectedBlock.name} Frontrunner
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">·</span>
                  <span className="text-xs text-[var(--text-muted)]">
                    {isBlockActive
                      ? `Through GW ${currentGw} (Ends GW ${selectedBlock.endGw})`
                      : isBlockCompleted
                      ? 'Final Result'
                      : 'Not Started'}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[var(--text-main)] mt-0.5">
                  {leader.manager.teamName}
                </h3>
                <p className="text-xs text-[var(--text-muted)]">
                  Managed by <span className="text-slate-200 font-medium">{leader.manager.managerName}</span>
                  {secondPlace && leadMargin > 0 && (
                    <span className="text-emerald-400 ml-2 font-mono">
                      (+{leadMargin} pts clear of 2nd)
                    </span>
                  )}
                </p>
              </div>
            </div>

            {/* Bounty Badge */}
            <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto pt-2 sm:pt-0 border-t border-[var(--border-subtle)] sm:border-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20">
                <Icon name="Trophy" size={13} strokeWidth={2.5} />
                Standing to win ₦4,000.00
              </span>
              <div className="text-right mt-1">
                <span className="text-2xl font-black font-mono tabular-nums text-emerald-400">
                  {leader.blockPoints}
                </span>
                <span className="text-xs text-[var(--text-muted)] ml-1">pts</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Block Standings Table */}
      <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-1)] overflow-hidden shadow-sm">
        <div className="px-4 py-3 bg-[var(--surface-2)]/60 flex items-center justify-between border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-2">
            <h4 className="text-xs sm:text-sm font-semibold text-[var(--text-main)]">
              {selectedBlock.name} Standings (GW {selectedBlock.startGw}–{selectedBlock.endGw})
            </h4>
            <span className="text-xs text-[var(--text-muted)]">· Sorted by net points in block</span>
          </div>
          <span className="text-xs font-mono font-medium text-amber-400">
            Prize: ₦4,000
          </span>
        </div>

        {/* Table Column Header */}
        <div className="hidden sm:grid grid-cols-12 gap-3 px-4 py-2.5 bg-[var(--surface-2)]/30 text-[11px] font-semibold text-[var(--text-muted)] border-b border-[var(--border-subtle)]">
          <div className="col-span-1 text-center">Rank</div>
          <div className="col-span-5">Manager & team</div>
          <div className="col-span-2 text-center">Hits in block</div>
          <div className="col-span-2 text-right">Gap to 1st</div>
          <div className="col-span-2 text-right">Block points</div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-[var(--border-subtle)]">
          {standings.map((item) => {
            const isWinner = item.blockRank === 1;

            return (
              <div
                key={item.manager.id}
                onClick={() => onSelectManager(item.manager)}
                className={`p-3 sm:px-4 sm:py-3 grid grid-cols-12 items-center gap-2 sm:gap-3 transition-colors cursor-pointer ${
                  isWinner
                    ? 'bg-emerald-500/[0.08] hover:bg-emerald-500/[0.12]'
                    : 'hover:bg-[var(--surface-2)]/60'
                }`}
              >
                {/* Rank */}
                <div className="col-span-2 sm:col-span-1 flex items-center gap-1.5 sm:justify-center">
                  {isWinner ? (
                    <span className="w-6 h-6 rounded-md bg-emerald-500 text-slate-950 font-black text-xs flex items-center justify-center">
                      1
                    </span>
                  ) : (
                    <span className="w-6 h-6 flex items-center justify-center font-mono font-semibold text-xs text-[var(--text-muted)]">
                      {item.blockRank}
                    </span>
                  )}
                </div>

                {/* Team & Manager with Logo */}
                <div className="col-span-6 sm:col-span-5 min-w-0 flex items-center gap-2.5">
                  <TeamBadge manager={item.manager} size="sm" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold text-xs sm:text-sm text-[var(--text-main)] truncate">
                        {item.manager.teamName}
                      </span>
                      {isWinner && (
                        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded font-mono shrink-0">
                          ₦4,000 spot
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-[var(--text-muted)] truncate">
                      {item.manager.managerName}
                    </p>
                  </div>
                </div>

                {/* Transfer Hits */}
                <div className="hidden sm:flex col-span-2 items-center justify-center text-xs font-mono text-[var(--text-muted)]">
                  {item.hitsTaken > 0 ? (
                    <span className="text-red-400">-{item.hitsTaken} pts</span>
                  ) : (
                    <span className="text-slate-600">0</span>
                  )}
                </div>

                {/* Gap */}
                <div className="col-span-2 text-right font-mono text-xs text-[var(--text-muted)]">
                  {isWinner ? (
                    <span className="text-emerald-400 font-semibold">Leader</span>
                  ) : (
                    <span>-{item.pointsBehindLeader}</span>
                  )}
                </div>

                {/* Points */}
                <div className="col-span-2 text-right">
                  <span className={`font-mono font-bold text-sm sm:text-base tabular-nums ${
                    isWinner ? 'text-emerald-400' : 'text-[var(--text-main)]'
                  }`}>
                    {item.blockPoints}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
