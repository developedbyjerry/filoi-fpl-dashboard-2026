'use client';

import React from 'react';
import { Icon } from './Icon';

interface NavigationTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function NavigationTabs({ activeTab, onTabChange }: NavigationTabsProps) {
  const tabs = [
    {
      id: 'standings',
      label: 'Overall Standings',
      subtitle: '16 Paid Managers',
      icon: 'Trophy',
      badge: '16 Live',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    },
    {
      id: 'blocks',
      label: 'Block Race Tracker',
      subtitle: '4 × ₦4,000 Bounties',
      icon: 'Layers',
      badge: '₦16,000 Pot',
      badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
    },
    {
      id: 'prizes',
      label: 'Prize Pool Stakes',
      subtitle: '40% · 20% · 10% · 10% · 20%',
      icon: 'Coins',
      badge: '₦80,000',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    },
    {
      id: 'settings',
      label: 'League & FPL Sync',
      subtitle: 'Rules, Roster & API',
      icon: 'Settings',
      badge: 'ID 398938',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    },
  ];

  return (
    <>
      {/* Desktop & Tablet Major Arena Navigation Bar (Much Bigger & Bolder) */}
      <div className="hidden sm:block my-5">
        <div className="p-2 sm:p-2.5 rounded-2xl bg-[var(--surface-1)]/95 backdrop-blur-xl border border-emerald-500/30 shadow-2xl shadow-emerald-950/40">
          <div className="grid grid-cols-4 gap-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`relative group flex items-center gap-3.5 py-4 px-4 sm:px-5 rounded-xl transition-all duration-200 text-left border ${
                    isActive
                      ? 'bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 text-slate-950 border-emerald-300 shadow-lg shadow-emerald-500/25 scale-[1.01]'
                      : 'bg-[var(--surface-2)]/60 text-[var(--text-muted)] border-transparent hover:bg-[var(--surface-2)] hover:border-emerald-500/20 hover:text-[var(--text-main)]'
                  }`}
                >
                  {/* Icon container */}
                  <div
                    className={`p-2.5 rounded-xl shrink-0 transition-transform group-hover:scale-105 ${
                      isActive
                        ? 'bg-slate-950 text-emerald-400 shadow-md'
                        : 'bg-[var(--surface-1)] text-emerald-400 border border-emerald-500/30'
                    }`}
                  >
                    <Icon name={tab.icon} size={22} strokeWidth={isActive ? 2.5 : 2} />
                  </div>

                  {/* Text labels */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 justify-between">
                      <span
                        className={`font-black text-sm md:text-base lg:text-lg tracking-tight truncate block ${
                          isActive ? 'text-slate-950' : 'text-[var(--text-main)]'
                        }`}
                      >
                        {tab.label}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-1 mt-0.5">
                      <span
                        className={`text-[11px] lg:text-xs truncate block ${
                          isActive ? 'text-slate-900 font-semibold' : 'text-slate-400'
                        }`}
                      >
                        {tab.subtitle}
                      </span>
                      {tab.badge && (
                        <span
                          className={`hidden lg:inline-block text-[10px] font-mono font-bold px-1.5 py-0.2 rounded border ${
                            isActive
                              ? 'bg-slate-950/90 text-emerald-400 border-slate-900'
                              : `${tab.badgeColor}`
                          }`}
                        >
                          {tab.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Top Generous Carousel Strip */}
      <div className="sm:hidden my-3">
        <div className="p-1.5 rounded-xl bg-[var(--surface-1)]/95 border border-emerald-500/30 shadow-lg">
          <div className="grid grid-cols-2 gap-1.5">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`flex items-center gap-2.5 p-3 rounded-lg text-left transition-all ${
                    isActive
                      ? 'bg-emerald-500 text-slate-950 font-black shadow-md shadow-emerald-500/30'
                      : 'bg-[var(--surface-2)]/70 text-[var(--text-muted)]'
                  }`}
                >
                  <div
                    className={`p-1.5 rounded-md shrink-0 ${
                      isActive ? 'bg-slate-950 text-emerald-400' : 'bg-[var(--surface-1)] text-emerald-400'
                    }`}
                  >
                    <Icon name={tab.icon} size={18} strokeWidth={2.5} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span
                      className={`text-xs font-bold truncate block ${
                        isActive ? 'text-slate-950' : 'text-[var(--text-main)]'
                      }`}
                    >
                      {tab.label}
                    </span>
                    <span
                      className={`text-[10px] truncate block ${
                        isActive ? 'text-slate-900 font-medium' : 'text-slate-400'
                      }`}
                    >
                      {tab.badge}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Fixed Bottom Nav Bar (Thumb-friendly with enlarged targets) */}
      <nav
        aria-label="Mobile navigation"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--surface-1)]/95 backdrop-blur-xl border-t border-emerald-500/20 px-2 py-1 shadow-2xl"
      >
        <div className="grid grid-cols-4 items-center h-16">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex flex-col items-center justify-center h-full min-h-[48px] transition-all ${
                  isActive ? 'text-emerald-400 font-bold scale-105' : 'text-[var(--text-muted)]'
                }`}
              >
                <div
                  className={`p-1.5 rounded-lg transition-all ${
                    isActive ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : ''
                  }`}
                >
                  <Icon name={tab.icon} size={20} strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span className="text-[11px] font-semibold tracking-tight mt-0.5 whitespace-nowrap">
                  {tab.id === 'standings'
                    ? 'Standings'
                    : tab.id === 'blocks'
                    ? 'Blocks'
                    : tab.id === 'prizes'
                    ? 'Prizes'
                    : 'Sync'}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
