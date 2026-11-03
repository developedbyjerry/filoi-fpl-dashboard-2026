'use client';

import React, { useState, useMemo, useEffect } from 'react';
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
  // Determine active block ID based on currentGw
  const activeBlockId = useMemo(() => {
    if (currentGw >= 10 && currentGw <= 18) return 2;
    if (currentGw >= 19 && currentGw <= 27) return 3;
    if (currentGw >= 28) return 4;
    // If currentGw is 9 and GW9 matches have completed, default to Block 2 (Fresh Start) or Block 1
    return 2;
  }, [currentGw]);

  const [userSelectedBlockId, setUserSelectedBlockId] = useState<number | null>(null);
  const selectedBlockId = userSelectedBlockId ?? activeBlockId;

  const selectedBlock = useMemo(() => {
    return BLOCKS.find((b) => b.id === selectedBlockId) || BLOCKS[1] || BLOCKS[0];
  }, [selectedBlockId]);

  // Dynamically calculate block standings from each manager's gwScores strictly within [startGw, endGw]
  const standings: BlockStanding[] = useMemo(() => {
    return calculateBlockStandings(managers, selectedBlock);
  }, [managers, selectedBlock]);

  const leader = standings[0];
  const secondPlace = standings[1];
  const leadMargin = leader && secondPlace ? leader.blockPoints - secondPlace.blockPoints : 0;
  
  const isBlockCompleted = selectedBlock.id === 1 || currentGw > selectedBlock.endGw;
  const isBlockActive = selectedBlock.id === activeBlockId || (currentGw >= selectedBlock.startGw && currentGw <= selectedBlock.endGw);
  const isBlockFreshStart = selectedBlock.id === 2 && standings.every((s) => s.blockPoints === 0);

  return (
    <div className="space-y-4">
      {/* Block Selector Tabs */}
      <div className="bg-[var(--surface-1)] p-2.5 rounded-2xl border border-emerald-500/20 shadow-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {BLOCKS.map((block) => {
            const isSelected = selectedBlock.id === block.id;
            const isBlock1Completed = block.id === 1;
            const isBlock2Active = block.id === 2;
            const isFinished = block.status === 'completed' || isBlock1Completed;
            const isLive = (block.id === activeBlockId || block.status === 'active') && !isFinished;

            return (
              <button
                key={block.id}
                onClick={() => setUserSelectedBlockId(block.id)}
                className={`flex flex-col p-3 rounded-xl text-left transition-all duration-200 border ${
                  isSelected
                    ? 'bg-[var(--surface-2)] border-emerald-400 shadow-md shadow-emerald-950/40 scale-[1.02]'
                    : 'bg-transparent border-transparent hover:bg-[var(--surface-2)]/60 text-[var(--text-muted)]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-xs sm:text-sm font-bold ${isSelected ? 'text-[var(--text-main)]' : ''}`}>
                    {block.name}
                  </span>
                  {isBlock1Completed && (
                    <span className="flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                      <Icon name="Award" size={11} />
                      Completed
                    </span>
                  )}
                  {isBlock2Active && (
                    <span className="flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      FRESH RACE
                    </span>
                  )}
                  {!isBlock1Completed && !isBlock2Active && isLive && (
                    <span className="flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      LIVE
                    </span>
                  )}
                  {!isFinished && !isLive && (
                    <span className="text-[10px] font-medium text-slate-500">
                      Upcoming
                    </span>
                  )}
                </div>

                <div className="flex items-baseline justify-between mt-0.5">
                  <span className="text-[11px] sm:text-xs text-[var(--text-muted)]">
                    GW {block.startGw}–{block.endGw}
                  </span>
                  <span className="font-mono text-xs font-bold text-amber-400">
                    ₦4,000.00
                  </span>
                </div>

                {/* Subtitle tag */}
                <div className="mt-1 pt-1 border-t border-[var(--border-subtle)]/40 text-[10px] truncate">
                  {isBlock1Completed ? (
                    <span className="text-amber-300/90 font-medium flex items-center gap-1">
                      <Icon name="Crown" size={10} className="text-amber-400" />
                      Won by Balogzee FC
                    </span>
                  ) : isBlock2Active ? (
                    <span className="text-emerald-400 font-medium">
                      All teams at 0 pts fresh start
                    </span>
                  ) : (
                    <span className="text-slate-500">
                      Sprint bounty
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* --- BANNER TYPE 1: COMPLETED BLOCK 1 WINNER BANNER --- */}
      {selectedBlock.id === 1 && (
        <div className="relative overflow-hidden rounded-2xl border-2 border-amber-500/50 bg-gradient-to-r from-amber-950/70 via-[var(--surface-1)] to-emerald-950/50 p-4 sm:p-6 shadow-xl shadow-amber-950/30">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {leader && <TeamBadge manager={leader.manager} size="xl" showGlow />}
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-full border border-amber-500/30">
                    <Icon name="Crown" size={14} className="text-amber-400" />
                    Block 1 Champion Declared
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">·</span>
                  <span className="text-xs font-medium text-emerald-400">
                    GW 1–9 Finalized
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                  Ayodele Balogun · Balogzee FC
                </h3>
                <p className="text-xs text-[var(--text-muted)] mt-0.5">
                  Dominant sprint finish with <span className="text-emerald-300 font-bold font-mono">607 Net Points</span> across Gameweeks 1–9.
                  {secondPlace && (
                    <span className="text-slate-300 ml-2">
                      (Held off {secondPlace.manager.managerName} by 6 pts!)
                    </span>
                  )}
                </p>
              </div>
            </div>

            {/* Winner Bounty Award Badge */}
            <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto pt-3 sm:pt-0 border-t border-amber-500/20 sm:border-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black font-mono bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/30">
                <Icon name="CheckCircle2" size={14} strokeWidth={2.5} />
                ₦4,000.00 Awarded &amp; Banked
              </span>
              <div className="text-right mt-1.5">
                <span className="text-2xl sm:text-3xl font-black font-mono tabular-nums text-emerald-400">
                  607
                </span>
                <span className="text-xs text-[var(--text-muted)] ml-1">net pts</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- BANNER TYPE 2: BLOCK 2 FRESH SLATE SPRINT BANNER --- */}
      {selectedBlock.id === 2 && (
        <div className="relative overflow-hidden rounded-2xl border-2 border-emerald-500/50 bg-gradient-to-r from-emerald-950/70 via-[var(--surface-1)] to-cyan-950/50 p-4 sm:p-6 shadow-xl shadow-emerald-950/40">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 border border-emerald-300 flex items-center justify-center text-slate-950 shadow-lg shadow-emerald-500/30 shrink-0">
                <Icon name="Zap" size={28} strokeWidth={2.5} />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-emerald-300 bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Block 2 Race: Fresh Slate Start
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">·</span>
                  <span className="text-xs font-medium text-cyan-300">
                    Gameweeks 10–18
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                  All 16 Teams Reset to 0 Points
                </h3>
                <p className="text-xs text-slate-300 mt-0.5 max-w-xl leading-relaxed">
                  Every manager starts completely equal for the next <span className="text-amber-400 font-bold">₦4,000.00 Bounty</span>! Scores accumulate strictly from Gameweek 10 kickoff through Gameweek 18. Points from Block 1 are archived and do not carry over.
                </p>
              </div>
            </div>

            {/* Block 2 Bounty Badge */}
            <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto pt-3 sm:pt-0 border-t border-emerald-500/20 sm:border-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black font-mono bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-lg shadow-amber-500/25">
                <Icon name="Trophy" size={14} strokeWidth={2.5} />
                ₦4,000.00 Prize at Stake
              </span>
              <div className="text-right mt-1.5">
                <span className="text-xs font-mono font-medium text-emerald-400">
                  {isBlockFreshStart ? 'Starts GW 10 (Nov 6)' : 'Live Sprint in Progress'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- BANNER TYPE 3: UPCOMING BLOCKS (3 & 4) --- */}
      {selectedBlock.id > 2 && (
        <div className="relative overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-1)] p-4 sm:p-5 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-slate-800 text-slate-400">
                <Icon name="Calendar" size={22} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[var(--text-main)]">
                  {selectedBlock.name} Sprint (GW {selectedBlock.startGw}–{selectedBlock.endGw})
                </h3>
                <p className="text-xs text-[var(--text-muted)]">
                  Upcoming ₦4,000.00 block race. All teams will reset to 0 points at GW {selectedBlock.startGw}.
                </p>
              </div>
            </div>
            <span className="font-mono text-sm font-bold text-amber-400">
              ₦4,000.00 Prize Pool
            </span>
          </div>
        </div>
      )}

      {/* Block Standings Table */}
      <div className="rounded-2xl border border-emerald-500/20 bg-[var(--surface-1)] overflow-hidden shadow-lg">
        {/* Table Header Strip */}
        <div className="px-4 py-3 bg-[var(--surface-2)]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="text-xs sm:text-sm font-bold text-[var(--text-main)] flex items-center gap-2">
              <Icon name="Layers" size={15} className="text-emerald-400" />
              <span>{selectedBlock.name} Official Standings (GW {selectedBlock.startGw}–{selectedBlock.endGw})</span>
            </h4>
            <span className="text-xs text-[var(--text-muted)]">·</span>
            <span className="text-xs text-emerald-400 font-medium">
              {selectedBlock.id === 1
                ? 'Finalized & Verified'
                : selectedBlock.id === 2
                ? 'Fresh Slate Table'
                : 'Scheduled'}
            </span>
          </div>
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
              Bounty: ₦4,000.00
            </span>
          </div>
        </div>

        {/* Table Column Header */}
        <div className="hidden sm:grid grid-cols-12 gap-3 px-4 py-2.5 bg-[var(--surface-2)]/40 text-[11px] font-semibold text-[var(--text-muted)] border-b border-[var(--border-subtle)]">
          <div className="col-span-1 text-center">Rank</div>
          <div className="col-span-5">Manager &amp; team</div>
          <div className="col-span-2 text-center">Hits in block</div>
          <div className="col-span-2 text-right">Gap to 1st</div>
          <div className="col-span-2 text-right">Block net points</div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-[var(--border-subtle)]">
          {standings.map((item) => {
            const isWinner = selectedBlock.id === 1 && item.blockRank === 1;
            const isLeading = selectedBlock.id !== 1 && item.blockRank === 1 && item.blockPoints > 0;

            return (
              <div
                key={item.manager.id}
                onClick={() => onSelectManager(item.manager)}
                className={`p-3 sm:px-4 sm:py-3 grid grid-cols-12 items-center gap-2 sm:gap-3 transition-colors cursor-pointer ${
                  isWinner
                    ? 'bg-amber-500/[0.08] hover:bg-amber-500/[0.14]'
                    : isLeading
                    ? 'bg-emerald-500/[0.08] hover:bg-emerald-500/[0.12]'
                    : 'hover:bg-[var(--surface-2)]/60'
                }`}
              >
                {/* Rank */}
                <div className="col-span-2 sm:col-span-1 flex items-center gap-1.5 sm:justify-center">
                  {isWinner ? (
                    <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 font-black text-xs flex items-center justify-center shadow-md shadow-amber-500/30">
                      🥇
                    </span>
                  ) : item.blockRank === 2 && selectedBlock.id === 1 ? (
                    <span className="w-6 h-6 rounded-md bg-slate-300 text-slate-950 font-black text-xs flex items-center justify-center">
                      2
                    </span>
                  ) : item.blockRank === 3 && selectedBlock.id === 1 ? (
                    <span className="w-6 h-6 rounded-md bg-amber-700 text-white font-black text-xs flex items-center justify-center">
                      3
                    </span>
                  ) : (
                    <span className="w-6 h-6 flex items-center justify-center font-mono font-semibold text-xs text-[var(--text-muted)]">
                      {item.blockRank}
                    </span>
                  )}
                </div>

                {/* Team & Manager with Logo */}
                <div className="col-span-6 sm:col-span-5 min-w-0 flex items-center gap-2.5">
                  <TeamBadge manager={item.manager} size="sm" showGlow={isWinner} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold text-xs sm:text-sm text-[var(--text-main)] truncate">
                        {item.manager.teamName}
                      </span>
                      {isWinner && (
                        <span className="text-[10px] text-amber-300 bg-amber-500/20 px-1.5 py-0.2 rounded font-mono font-bold shrink-0 border border-amber-500/30">
                          🏆 Won ₦4,000
                        </span>
                      )}
                      {isLeading && (
                        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded font-mono shrink-0">
                          ₦4k spot
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
                    <span className="text-red-400 font-semibold">-{item.hitsTaken} pts</span>
                  ) : (
                    <span className="text-slate-600">0</span>
                  )}
                </div>

                {/* Gap to 1st */}
                <div className="col-span-2 text-right font-mono text-xs text-[var(--text-muted)]">
                  {item.blockRank === 1 ? (
                    <span className={isWinner ? 'text-amber-400 font-bold' : 'text-emerald-400 font-semibold'}>
                      {isWinner ? 'Champion' : isBlockFreshStart ? 'Level' : 'Leader'}
                    </span>
                  ) : (
                    <span>{item.pointsBehindLeader > 0 ? `-${item.pointsBehindLeader}` : '0'}</span>
                  )}
                </div>

                {/* Block Points */}
                <div className="col-span-2 text-right">
                  <span
                    className={`font-mono font-black text-sm sm:text-base tabular-nums ${
                      isWinner
                        ? 'text-amber-300'
                        : item.blockPoints > 0
                        ? 'text-emerald-400'
                        : 'text-slate-400'
                    }`}
                  >
                    {item.blockPoints}
                  </span>
                  <span className="text-[10px] text-[var(--text-muted)] ml-1">pts</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Table Footer / Rules info */}
        <div className="p-3 bg-[var(--surface-2)]/40 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)] flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <Icon name="Info" size={13} className="text-emerald-400 shrink-0" />
            <span>
              Net Points = Total points scored in GW {selectedBlock.startGw}–{selectedBlock.endGw} minus transfer hits.
            </span>
          </div>
          <span className="text-slate-400 font-mono">
            {selectedBlock.id === 1 ? 'Block 1 Payout: ₦4,000.00 Awarded' : 'Block 2 Payout: ₦4,000.00 on GW 18'}
          </span>
        </div>
      </div>
    </div>
  );
}
