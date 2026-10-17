'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Icon } from './Icon';

interface RulesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RulesModal({ isOpen, onClose }: RulesModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 modal-backdrop"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl max-h-[90vh] flex flex-col rounded-2xl bg-[var(--surface-1)] border border-[var(--border-subtle)] shadow-2xl overflow-hidden z-10"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[var(--border-subtle)] bg-[var(--surface-2)]/60 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-amber-500/15 text-amber-400">
                <Icon name="ShieldCheck" size={20} />
              </div>
              <div>
                <h3 className="text-base font-bold text-[var(--text-main)]">
                  Official League Governance &amp; Payout Rules
                </h3>
                <p className="text-xs text-[var(--text-muted)]">
                  Filoi Fantasy League 2024/25 Season Terms
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--surface-2)]"
            >
              <Icon name="X" size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 sm:p-5 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-300">
            {/* Rule 1 */}
            <div className="p-3.5 rounded-xl bg-[var(--surface-2)]/40 border border-[var(--border-subtle)]">
              <h4 className="font-bold text-[var(--text-main)] flex items-center gap-2 mb-1">
                <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 text-xs flex items-center justify-center font-mono">1</span>
                <span>Payment Deadline &amp; Roster Lockdown</span>
              </h4>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                The payment deadline expired strictly at 3:00 PM before season kickoff. Exactly 16 managers met the verification criterion with an entry fee of ₦5,000.00 each. Registration is permanently CLOSED. No additional managers may buy in mid-season under any circumstances.
              </p>
            </div>

            {/* Rule 2 */}
            <div className="p-3.5 rounded-xl bg-[var(--surface-2)]/40 border border-[var(--border-subtle)]">
              <h4 className="font-bold text-[var(--text-main)] flex items-center gap-2 mb-1">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 text-xs flex items-center justify-center font-mono">2</span>
                <span>Prize Pool Allocation (₦80,000.00 Total)</span>
              </h4>
              <ul className="text-xs space-y-1 text-slate-300 list-disc list-inside mt-1">
                <li><strong className="text-amber-400">1st Place (Champion):</strong> ₦32,000.00 (40%)</li>
                <li><strong className="text-slate-200">2nd Place (Runner-up):</strong> ₦16,000.00 (20%)</li>
                <li><strong className="text-amber-600">3rd Place:</strong> ₦8,000.00 (10%)</li>
                <li><strong className="text-purple-400">FPL Cup Champion:</strong> ₦8,000.00 (10%)</li>
                <li><strong className="text-emerald-400">4 Block Winners:</strong> ₦4,000.00 each (₦16,000.00 / 20% total)</li>
              </ul>
            </div>

            {/* Rule 3 */}
            <div className="p-3.5 rounded-xl bg-[var(--surface-2)]/40 border border-[var(--border-subtle)]">
              <h4 className="font-bold text-[var(--text-main)] flex items-center gap-2 mb-1">
                <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs flex items-center justify-center font-mono">3</span>
                <span>Block Races Scoring &amp; Transfer Hits</span>
              </h4>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                Block scores are calculated strictly from points scored within that block&apos;s specified gameweek window. Any transfer hit deductions (-4 pts) taken during those weeks are subtracted from that block&apos;s net score. Chips (Wildcard, Free Hit, Bench Boost, Triple Captain) count normally towards block points.
              </p>
            </div>

            {/* Rule 4 */}
            <div className="p-3.5 rounded-xl bg-[var(--surface-2)]/40 border border-[var(--border-subtle)]">
              <h4 className="font-bold text-[var(--text-main)] flex items-center gap-2 mb-1">
                <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 text-xs flex items-center justify-center font-mono">4</span>
                <span>Tie-Break Protocol</span>
              </h4>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                In the event of a points tie for any podium or block bounty, the tie-breaker follows official FPL standards: (1) Fewest transfers made during the period; (2) Most goals scored by starting XI players; (3) If still tied, the prize will be split equally.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-[var(--border-subtle)] bg-[var(--surface-2)]/40 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-xs font-semibold text-white transition-colors"
            >
              Understood
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
