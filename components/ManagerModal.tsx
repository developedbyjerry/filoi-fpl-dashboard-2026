'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Icon } from './Icon';
import { TeamBadge } from './TeamBadge';
import { Manager } from '@/lib/types';
import { BLOCKS } from '@/lib/leagueData';

interface ManagerModalProps {
  manager: Manager | null;
  onClose: () => void;
  currentGw: number;
}

export function ManagerModal({ manager, onClose, currentGw }: ManagerModalProps) {
  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (manager) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [manager, onClose]);

  if (!manager) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 modal-backdrop"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-2xl overflow-hidden z-10"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[var(--border-subtle)] bg-[var(--surface-2)]/60 flex items-start justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="relative">
                <TeamBadge manager={manager} size="lg" showGlow />
                <span className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-emerald-500 text-slate-950 font-mono font-black text-[11px] flex items-center justify-center border-2 border-[var(--surface-1)] shadow">
                  #{manager.overallRank}
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-base sm:text-xl font-bold text-[var(--text-main)]">
                    {manager.teamName}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                    <Icon name="CheckCircle2" size={12} />
                    Verified ₦5,000
                  </span>
                </div>
                <div className="text-xs text-[var(--text-muted)] flex items-center gap-2 mt-0.5">
                  <span className="font-medium text-slate-200">{manager.managerName}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono text-emerald-400/80">{manager.whatsappTag}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono text-slate-400">FPL ID: {manager.entry}</span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close manager detail modal"
              className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--surface-2)] transition-colors"
            >
              <Icon name="X" size={20} />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-4 sm:p-5 overflow-y-auto space-y-5">
            {/* KPI Cards Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="p-3 rounded-xl bg-[var(--surface-2)]/70 border border-[var(--border-subtle)]">
                <span className="text-[11px] text-[var(--text-muted)] block">Overall rank</span>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="text-xl font-bold font-mono tabular-nums text-[var(--text-main)]">
                    #{manager.overallRank}
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">/ 16</span>
                </div>
                <div className="text-[10px] text-emerald-400 mt-0.5 font-medium">
                  {manager.overallPercentile || 'Top tier'}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[var(--surface-2)]/70 border border-[var(--border-subtle)]">
                <span className="text-[11px] text-[var(--text-muted)] block">Total points</span>
                <span className="text-xl font-bold font-mono tabular-nums text-purple-400 mt-0.5 block">
                  {manager.totalPoints}
                </span>
                <span className="text-[10px] text-[var(--text-muted)] mt-0.5 block">
                  Season aggregate
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[var(--surface-2)]/70 border border-[var(--border-subtle)]">
                <span className="text-[11px] text-[var(--text-muted)] block">GW {currentGw} score</span>
                <span className="text-xl font-bold font-mono tabular-nums text-emerald-400 mt-0.5 block">
                  +{manager.currentGwPoints}
                </span>
                <span className="text-[10px] text-[var(--text-muted)] mt-0.5 block">
                  Latest round
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[var(--surface-2)]/70 border border-[var(--border-subtle)]">
                <span className="text-[11px] text-[var(--text-muted)] block">Captaincy</span>
                <span className="text-xs font-semibold text-[var(--text-main)] mt-1 truncate block">
                  {manager.captain}
                </span>
                <span className="text-[10px] text-[var(--text-muted)] truncate block">
                  VC: {manager.viceCaptain}
                </span>
              </div>
            </div>

            {/* Chips Used & Payment Audit Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-[var(--surface-2)]/40 border border-[var(--border-subtle)]">
                <span className="font-semibold text-slate-300 block mb-1.5 flex items-center gap-1.5">
                  <Icon name="Zap" size={13} className="text-amber-400" />
                  <span>Chips played</span>
                </span>
                {manager.chipsUsed.length > 0 ? (
                  <div className="flex flex-wrap gap-1.5">
                    {manager.chipsUsed.map((chip, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 font-medium text-[11px]"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="text-[var(--text-muted)]">No chips played yet (all active)</span>
                )}
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--surface-2)]/40 border border-[var(--border-subtle)]">
                <span className="font-semibold text-slate-300 block mb-1.5 flex items-center gap-1.5">
                  <Icon name="ShieldCheck" size={13} className="text-emerald-400" />
                  <span>Dues verification</span>
                </span>
                <p className="text-[11px] text-[var(--text-muted)] font-mono">
                  {manager.paymentTimestamp}
                </p>
                <p className="text-[10px] text-emerald-400 mt-1">
                  100% verified for prize pool eligibility
                </p>
              </div>
            </div>

            {/* Block Breakdown */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2 flex items-center gap-1.5">
                <Icon name="Layers" size={13} />
                <span>Block performance breakdown</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {BLOCKS.map((block) => {
                  const scoresInBlock = manager.gwScores.filter(
                    (s) => s.gw >= block.startGw && s.gw <= block.endGw
                  );
                  const blockPts = scoresInBlock.reduce((acc, c) => acc + c.netPoints, 0);
                  const isActive = currentGw >= block.startGw && currentGw <= block.endGw;

                  return (
                    <div
                      key={block.id}
                      className={`p-2.5 rounded-lg border text-center ${
                        isActive
                          ? 'bg-emerald-950/20 border-emerald-500/40'
                          : 'bg-[var(--surface-2)]/40 border-[var(--border-subtle)]'
                      }`}
                    >
                      <div className="text-[11px] font-semibold text-[var(--text-muted)]">
                        {block.name} (GW {block.startGw}–{block.endGw})
                      </div>
                      <div className="text-base font-bold font-mono text-[var(--text-main)] mt-0.5">
                        {scoresInBlock.length > 0 ? `${blockPts} pts` : '—'}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Gameweek History Table */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2 flex items-center gap-1.5">
                <Icon name="Calendar" size={13} />
                <span>Gameweek-by-gameweek log</span>
              </h4>
              <div className="rounded-lg border border-[var(--border-subtle)] overflow-hidden">
                <table className="w-full text-xs">
                  <thead className="bg-[var(--surface-2)] text-[var(--text-muted)] border-b border-[var(--border-subtle)]">
                    <tr>
                      <th className="py-2 px-3 text-left font-semibold">GW</th>
                      <th className="py-2 px-3 text-left font-semibold">Captain</th>
                      <th className="py-2 px-3 text-center font-semibold">Chip</th>
                      <th className="py-2 px-3 text-right font-semibold">Hits</th>
                      <th className="py-2 px-3 text-right font-semibold">Net pts</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border-subtle)] font-mono">
                    {manager.gwScores.map((score) => (
                      <tr key={score.gw} className="hover:bg-[var(--surface-2)]/40">
                        <td className="py-2 px-3 text-[var(--text-main)] font-semibold">
                          GW {score.gw}
                        </td>
                        <td className="py-2 px-3 font-sans text-slate-300">
                          {score.captain}
                        </td>
                        <td className="py-2 px-3 text-center font-sans">
                          {score.chip ? (
                            <span className="px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-300 text-[10px]">
                              {score.chip}
                            </span>
                          ) : (
                            <span className="text-slate-600">—</span>
                          )}
                        </td>
                        <td className="py-2 px-3 text-right">
                          {score.hits > 0 ? (
                            <span className="text-red-400">-{score.hits}</span>
                          ) : (
                            <span className="text-slate-500">0</span>
                          )}
                        </td>
                        <td className="py-2 px-3 text-right font-bold text-emerald-400">
                          {score.netPoints}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-3.5 sm:p-4 border-t border-[var(--border-subtle)] bg-[var(--surface-2)]/40 flex items-center justify-between">
            <span className="text-[11px] text-[var(--text-muted)] font-mono">
              Ref: {manager.paymentTimestamp}
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-[var(--surface-2)] hover:bg-[var(--surface-1)] border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-main)] transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
