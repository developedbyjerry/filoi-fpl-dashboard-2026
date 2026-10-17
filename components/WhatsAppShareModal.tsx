'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Icon } from './Icon';
import { Manager, BlockConfig, BlockStanding } from '@/lib/types';
import { generateWhatsAppBroadcast } from '@/lib/leagueData';

interface WhatsAppShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  managers: Manager[];
  currentBlock: BlockConfig;
  blockStandings: BlockStanding[];
  isAdmin: boolean;
}

export function WhatsAppShareModal({
  isOpen,
  onClose,
  managers,
  currentBlock,
  blockStandings,
  isAdmin,
}: WhatsAppShareModalProps) {
  const [shareType, setShareType] = useState<'link' | 'broadcast'>(isAdmin ? 'broadcast' : 'link');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentAppUrl = typeof window !== 'undefined' ? window.location.origin : 'https://filoi-league.app';

  const linkShareText = `🏆 *FILOI LEAGUE 3.0 (2024/25)* ⚽
🔒 *16 Verified Paid Managers · ₦80,000 Prize Pool*

Check our live standings, block race tracker, and payout allocations:
👉 ${currentAppUrl}

🥇 1st: ₦32,000 | 🥈 2nd: ₦16,000 | 🥉 3rd: ₦8,000
🧱 4 × ₦4,000 Block Bounties`;

  const broadcastText = generateWhatsAppBroadcast(managers, currentBlock, blockStandings);

  const activeText = shareType === 'broadcast' ? broadcastText : linkShareText;

  const handleCopy = () => {
    navigator.clipboard.writeText(activeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleOpenWhatsApp = () => {
    const encoded = encodeURIComponent(activeText);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
  };

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
          className="relative w-full max-w-lg rounded-2xl bg-[var(--surface-1)] border border-emerald-500/30 shadow-2xl overflow-hidden z-10 flex flex-col"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[var(--border-subtle)] bg-[var(--surface-2)]/60 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                <Icon name="Share2" size={18} />
              </div>
              <div>
                <h3 className="text-base font-bold text-[var(--text-main)]">
                  Share to WhatsApp
                </h3>
                <p className="text-xs text-[var(--text-muted)]">
                  Share live dashboard link or official group announcement
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

          {/* Share Type Switcher */}
          <div className="px-5 pt-4">
            <div className="flex p-1 rounded-lg bg-[var(--surface-2)] border border-[var(--border-subtle)] text-xs">
              <button
                onClick={() => setShareType('link')}
                className={`flex-1 py-1.5 rounded-md font-semibold transition-colors flex items-center justify-center gap-1.5 ${
                  shareType === 'link'
                    ? 'bg-emerald-500 text-slate-950 shadow-sm'
                    : 'text-[var(--text-muted)] hover:text-white'
                }`}
              >
                <Icon name="Link2" size={13} />
                <span>Share Dashboard Link</span>
              </button>

              <button
                onClick={() => setShareType('broadcast')}
                className={`flex-1 py-1.5 rounded-md font-semibold transition-colors flex items-center justify-center gap-1.5 ${
                  shareType === 'broadcast'
                    ? 'bg-emerald-500 text-slate-950 shadow-sm'
                    : 'text-[var(--text-muted)] hover:text-white'
                }`}
              >
                <Icon name="MessageSquareText" size={13} />
                <span>Full Standings Post</span>
              </button>
            </div>
          </div>

          {/* Broadcast Preview Box */}
          <div className="p-4 sm:p-5">
            <div className="rounded-xl bg-[#091510] border border-emerald-950 p-4 font-mono text-xs text-emerald-200/90 leading-relaxed whitespace-pre-wrap max-h-56 overflow-y-auto select-all">
              {activeText}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-4 border-t border-[var(--border-subtle)] bg-[var(--surface-2)]/40 flex flex-col sm:flex-row gap-2">
            <button
              onClick={handleCopy}
              className="flex-1 py-2.5 px-4 rounded-lg bg-[var(--surface-2)] hover:bg-[var(--surface-1)] border border-[var(--border-subtle)] text-xs font-semibold text-[var(--text-main)] transition-colors flex items-center justify-center gap-1.5"
            >
              {copied ? (
                <>
                  <Icon name="Check" size={15} className="text-emerald-400" />
                  <span className="text-emerald-400">Copied to clipboard!</span>
                </>
              ) : (
                <>
                  <Icon name="Copy" size={15} />
                  <span>Copy text</span>
                </>
              )}
            </button>

            <button
              onClick={handleOpenWhatsApp}
              className="flex-1 py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-all shadow-md shadow-emerald-950/40 flex items-center justify-center gap-1.5"
            >
              <Icon name="ExternalLink" size={15} />
              <span>Send via WhatsApp</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
