'use client';

import React from 'react';
import { Icon } from './Icon';
import { TeamBadge } from './TeamBadge';
import { LeagueStats, Manager } from '@/lib/types';
import { BLOCKS } from '@/lib/leagueData';

interface PrizePoolTabProps {
  stats: LeagueStats;
  managers: Manager[];
  onOpenRules: () => void;
}

export function PrizePoolTab({ stats, managers, onOpenRules }: PrizePoolTabProps) {
  // Current standings leaders
  const leader = managers[0];
  const runnerUp = managers[1];
  const thirdPlace = managers[2];

  const prizeAllocations = [
    {
      title: "League champion",
      rank: "🥇 1st place",
      amount: "₦32,000.00",
      percentage: "40%",
      bgGrad: "from-amber-500/20 via-amber-600/10 to-transparent",
      borderColor: "border-amber-500/40",
      textColor: "text-amber-400",
      badgeColor: "bg-amber-400 text-slate-950",
      icon: "Crown",
      manager: leader,
      currentPacer: leader ? `${leader.managerName} (${leader.teamName})` : null,
      desc: "Awarded to the manager with the highest cumulative points after 38 gameweeks.",
    },
    {
      title: "Runner-up",
      rank: "🥈 2nd place",
      amount: "₦16,000.00",
      percentage: "20%",
      bgGrad: "from-slate-300/15 via-slate-400/5 to-transparent",
      borderColor: "border-slate-400/30",
      textColor: "text-slate-200",
      badgeColor: "bg-slate-200 text-slate-900",
      icon: "Award",
      manager: runnerUp,
      currentPacer: runnerUp ? `${runnerUp.managerName} (${runnerUp.teamName})` : null,
      desc: "Awarded to the manager finishing in 2nd place in the overall classic table.",
    },
    {
      title: "Third place podium",
      rank: "🥉 3rd place",
      amount: "₦8,000.00",
      percentage: "10%",
      bgGrad: "from-amber-700/20 via-amber-800/10 to-transparent",
      borderColor: "border-amber-700/40",
      textColor: "text-amber-600",
      badgeColor: "bg-amber-700 text-amber-100",
      icon: "Medal",
      manager: thirdPlace,
      currentPacer: thirdPlace ? `${thirdPlace.managerName} (${thirdPlace.teamName})` : null,
      desc: "Awarded to the manager finishing in 3rd place on the final day.",
    },
    {
      title: "FPL cup winner",
      rank: "🏆 Cup champion",
      amount: "₦8,000.00",
      percentage: "10%",
      bgGrad: "from-purple-500/20 via-purple-600/10 to-transparent",
      borderColor: "border-purple-500/40",
      textColor: "text-purple-400",
      badgeColor: "bg-purple-500 text-white",
      icon: "Trophy",
      manager: null,
      currentPacer: "Head-to-head knockout commences mid-season",
      desc: "Mini-league head-to-head knockout tournament winner.",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Official Strict Notice Box */}
      <div className="rounded-xl border border-red-500/40 bg-red-950/30 p-4 sm:p-5 relative overflow-hidden">
        <div className="flex items-start gap-3.5">
          <div className="p-2.5 rounded-lg bg-red-500/20 text-red-400 shrink-0 mt-0.5">
            <Icon name="AlertTriangle" size={20} />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                Official League Notice
              </span>
              <span className="text-xs text-[var(--text-muted)]">·</span>
              <span className="text-xs font-mono text-red-300">
                Payment Deadline Passed at 3:00 PM
              </span>
            </div>
            <h4 className="text-sm sm:text-base font-bold text-[var(--text-main)] mt-1">
              Registration permanently closed • 16 verified managers
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
              No pay, no points. Only the 16 verified managers who completed their ₦5,000.00 entry before the strict 3:00 PM deadline are eligible for any prize pool disbursements. Unpaid managers are excluded and must wait until next season.
            </p>
            <div className="mt-3 flex items-center gap-3">
              <button
                onClick={onOpenRules}
                className="text-xs font-semibold text-red-400 hover:text-red-300 underline flex items-center gap-1"
              >
                <span>Read full governance rules</span>
                <Icon name="ArrowRight" size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Pot Allocation Progress Strip */}
      <div className="bg-[var(--surface-1)] p-5 rounded-xl border border-[var(--border-subtle)] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-[var(--text-main)] flex items-center gap-2">
              <Icon name="PieChart" size={18} className="text-amber-400" />
              <span>Prize pool capital allocation (₦80,000.00)</span>
            </h3>
            <p className="text-xs text-[var(--text-muted)] mt-0.5">
              100% of entry funds locked for season rewards · Zero administrative deduction
            </p>
          </div>
          <div className="text-left sm:text-right">
            <span className="text-xs text-[var(--text-muted)]">Treasury balance:</span>
            <div className="font-mono font-bold text-amber-400 text-lg">
              ₦80,000.00 / ₦80,000.00
            </div>
          </div>
        </div>

        {/* Visual Progress Bar */}
        <div className="w-full h-4 rounded-full bg-[var(--surface-2)] overflow-hidden flex p-0.5 gap-0.5 border border-[var(--border-subtle)]">
          <div
            style={{ width: '40%' }}
            className="h-full bg-amber-500 rounded-l-full relative group transition-all"
            title="1st Place (40% - ₦32,000)"
          />
          <div
            style={{ width: '20%' }}
            className="h-full bg-slate-300 relative group transition-all"
            title="2nd Place (20% - ₦16,000)"
          />
          <div
            style={{ width: '10%' }}
            className="h-full bg-amber-700 relative group transition-all"
            title="3rd Place (10% - ₦8,000)"
          />
          <div
            style={{ width: '10%' }}
            className="h-full bg-purple-500 relative group transition-all"
            title="FPL Cup (10% - ₦8,000)"
          />
          <div
            style={{ width: '20%' }}
            className="h-full bg-emerald-500 rounded-r-full relative group transition-all"
            title="4 Block Winners (20% - 4 × ₦4,000)"
          />
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0"></span>
            <span className="text-slate-300">1st (40% · ₦32k)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300 shrink-0"></span>
            <span className="text-slate-300">2nd (20% · ₦16k)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-700 shrink-0"></span>
            <span className="text-slate-300">3rd (10% · ₦8k)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shrink-0"></span>
            <span className="text-slate-300">Cup (10% · ₦8k)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
            <span className="text-slate-300">Blocks (20% · ₦16k)</span>
          </div>
        </div>
      </div>

      {/* Main Major Prize Cards Grid */}
      <div>
        <h4 className="text-sm font-bold text-[var(--text-main)] mb-3 flex items-center gap-2">
          <span>Major season rewards</span>
          <span className="text-xs font-normal text-[var(--text-muted)]">(₦64,000 total)</span>
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {prizeAllocations.map((p, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl bg-gradient-to-b ${p.bgGrad} bg-[var(--surface-1)] border ${p.borderColor} flex flex-col justify-between shadow-sm`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${p.badgeColor}`}>
                    {p.percentage} of pot
                  </span>
                  <div className={`p-1.5 rounded-lg bg-[var(--surface-2)] ${p.textColor}`}>
                    <Icon name={p.icon} size={16} />
                  </div>
                </div>
                <h5 className="font-semibold text-sm text-[var(--text-main)]">{p.title}</h5>
                <div className={`text-xl font-bold font-mono tabular-nums my-1 ${p.textColor}`}>
                  {p.amount}
                </div>
                <p className="text-[11px] text-[var(--text-muted)] leading-relaxed mt-1">
                  {p.desc}
                </p>
              </div>

              {p.currentPacer && (
                <div className="mt-3 pt-2.5 border-t border-[var(--border-subtle)]/60 text-[11px]">
                  <span className="text-[var(--text-muted)] block text-[10px] uppercase tracking-wider mb-1">
                    Current track leader:
                  </span>
                  <div className="flex items-center gap-2 min-w-0">
                    {p.manager && <TeamBadge manager={p.manager} size="sm" />}
                    <span className="font-medium text-[var(--text-main)] truncate block">
                      {p.currentPacer}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Block Winners Breakdown (4 Blocks at ₦4,000 = ₦16,000 Total) */}
      <div className="bg-[var(--surface-1)] p-5 rounded-xl border border-[var(--border-subtle)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-[var(--text-main)] flex items-center gap-2">
              <Icon name="Layers" size={16} className="text-emerald-400" />
              <span>Block bounties breakdown (4 × ₦4,000.00 = ₦16,000.00)</span>
            </h4>
            <p className="text-xs text-[var(--text-muted)] mt-0.5">
              Sprint races keep every manager engaged throughout the entire 38-game marathon
            </p>
          </div>
          <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 self-start sm:self-auto">
            20% of prize pool
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {BLOCKS.map((block) => {
            const isActive = stats.currentGameweek >= block.startGw && stats.currentGameweek <= block.endGw;
            const isFinished = stats.currentGameweek > block.endGw;

            return (
              <div
                key={block.id}
                className={`p-3.5 rounded-lg border transition-all ${
                  isActive
                    ? 'bg-emerald-950/20 border-emerald-500/50 shadow-sm'
                    : 'bg-[var(--surface-2)]/50 border-[var(--border-subtle)]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-xs text-[var(--text-main)]">{block.name}</span>
                  {isActive ? (
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/20 px-1.5 py-0.2 rounded flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      ACTIVE
                    </span>
                  ) : isFinished ? (
                    <span className="text-[10px] font-medium text-slate-400">Done</span>
                  ) : (
                    <span className="text-[10px] font-medium text-slate-500">Scheduled</span>
                  )}
                </div>
                <div className="text-xs text-[var(--text-muted)]">
                  Gameweeks {block.startGw} to {block.endGw}
                </div>
                <div className="text-base font-bold font-mono text-emerald-400 mt-2">
                  ₦4,000.00
                </div>
                <p className="text-[10px] text-slate-400 mt-1">
                  Paid immediately following GW {block.endGw} deadline verification.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
