'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Icon } from './Icon';
import { Manager } from '@/lib/types';

interface TeamBadgeProps {
  manager: Manager;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showGlow?: boolean;
}

export function TeamBadge({
  manager,
  size = 'md',
  className = '',
  showGlow = false,
}: TeamBadgeProps) {
  const [imgError, setImgError] = useState(false);

  const dimensionMap = {
    sm: { width: 28, height: 28, iconSize: 13, textClass: 'text-[9px]' },
    md: { width: 38, height: 38, iconSize: 17, textClass: 'text-[11px]' },
    lg: { width: 50, height: 50, iconSize: 22, textClass: 'text-xs' },
    xl: { width: 68, height: 68, iconSize: 30, textClass: 'text-sm' },
  };

  const dim = dimensionMap[size] || dimensionMap.md;
  const gradient = manager.badgeGradient || 'from-emerald-600 to-slate-900';
  const iconName = manager.badgeIcon || 'Shield';

  // Two letter team initials
  const initials = manager.teamName
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() || '')
    .join('') || 'FC';

  const hasBadgeUrl = manager.badgeUrl && !imgError;

  return (
    <div
      style={{ width: dim.width, height: dim.height }}
      className={`relative shrink-0 flex items-center justify-center rounded-xl overflow-hidden transition-transform duration-200 ${
        showGlow ? 'shadow-lg shadow-emerald-500/20' : ''
      } ${className}`}
    >
      {hasBadgeUrl ? (
        <div className="relative w-full h-full p-0.5 rounded-xl bg-slate-900/80 border border-emerald-500/30 flex items-center justify-center">
          <Image
            src={manager.badgeUrl!}
            alt={`${manager.teamName} logo`}
            fill
            sizes={`${dim.width}px`}
            className="object-contain p-0.5 drop-shadow-sm"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
          />
        </div>
      ) : (
        /* Bespoke Soccer Heraldic Crest */
        <div
          className={`w-full h-full rounded-xl bg-gradient-to-br ${gradient} border border-emerald-400/30 shadow-inner flex flex-col items-center justify-center relative p-1`}
        >
          {/* Subtle crest sheen */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/30 pointer-events-none rounded-xl" />

          {size === 'xl' || size === 'lg' ? (
            <div className="flex flex-col items-center justify-center relative z-10">
              <Icon name={iconName} size={dim.iconSize} className="text-white drop-shadow-md" />
              <span className={`font-mono font-black text-white/90 ${dim.textClass} tracking-tighter mt-0.5 drop-shadow`}>
                {initials}
              </span>
            </div>
          ) : (
            <div className="relative z-10 flex items-center justify-center">
              <Icon name={iconName} size={dim.iconSize} className="text-white drop-shadow" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
