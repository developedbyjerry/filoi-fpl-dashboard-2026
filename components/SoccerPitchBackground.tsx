'use client';

import React from 'react';

export function SoccerPitchBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
      {/* 1. Deep Turf Midnight Canvas */}
      <div className="absolute inset-0 bg-[#040d09]" />

      {/* 2. Fantasy Stadium Atmospheric Aurora Lights (Light Green & Fantasy Cyan/Blue) */}
      {/* Top Left Fantasy Cyan Floodlight */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-500/15 via-blue-600/10 to-transparent blur-3xl" />
      {/* Top Right Light Emerald Pitch Floodlight */}
      <div className="absolute -top-28 -right-28 w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-emerald-400/18 via-teal-500/10 to-transparent blur-3xl" />
      {/* Center Field Fantasy Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-b from-emerald-500/8 via-cyan-500/6 to-transparent blur-[120px]" />
      {/* Bottom Pitch Deep Glow */}
      <div className="absolute -bottom-40 left-1/4 w-[800px] h-[500px] rounded-full bg-emerald-950/40 blur-3xl" />

      {/* 3. Alternating Pitch Lawn Mower Stripes */}
      <div className="absolute inset-0 opacity-[0.035] bg-[repeating-linear-gradient(0deg,#000_0px,#000_64px,transparent_64px,transparent_128px)]" />

      {/* 4. Full Tactical Soccer Pitch Lines Drawing */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.13]"
        preserveAspectRatio="none"
        viewBox="0 0 1000 1600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Luminous Pitch Line Gradient */}
          <linearGradient id="pitchLineGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
          </linearGradient>

          <filter id="lineGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Boundary Touchlines */}
        <rect
          x="60"
          y="60"
          width="880"
          height="1480"
          rx="6"
          stroke="url(#pitchLineGlow)"
          strokeWidth="3.5"
          filter="url(#lineGlow)"
        />

        {/* Halfway Line */}
        <line
          x1="60"
          y1="800"
          x2="940"
          y2="800"
          stroke="url(#pitchLineGlow)"
          strokeWidth="3.5"
        />

        {/* Center Circle */}
        <circle
          cx="500"
          cy="800"
          r="140"
          stroke="url(#pitchLineGlow)"
          strokeWidth="3.5"
        />

        {/* Center Spot */}
        <circle cx="500" cy="800" r="7" fill="#38bdf8" />

        {/* --- NORTH GOAL AREA (Top) --- */}
        {/* Penalty Box (18-yard box) */}
        <rect
          x="260"
          y="60"
          width="480"
          height="250"
          stroke="url(#pitchLineGlow)"
          strokeWidth="3"
        />

        {/* 6-Yard Goal Area */}
        <rect
          x="370"
          y="60"
          width="260"
          height="95"
          stroke="url(#pitchLineGlow)"
          strokeWidth="2.5"
        />

        {/* Top Penalty Spot */}
        <circle cx="500" cy="200" r="6" fill="#34d399" />

        {/* Top Penalty Arc (The "D") */}
        <path
          d="M 420 310 A 100 100 0 0 0 580 310"
          stroke="url(#pitchLineGlow)"
          strokeWidth="2.5"
        />

        {/* Top Goal Net Frame */}
        <rect
          x="420"
          y="30"
          width="160"
          height="30"
          stroke="url(#pitchLineGlow)"
          strokeWidth="2"
          strokeDasharray="4 4"
        />

        {/* --- SOUTH GOAL AREA (Bottom) --- */}
        {/* Penalty Box */}
        <rect
          x="260"
          y="1290"
          width="480"
          height="250"
          stroke="url(#pitchLineGlow)"
          strokeWidth="3"
        />

        {/* 6-Yard Goal Area */}
        <rect
          x="370"
          y="1445"
          width="260"
          height="95"
          stroke="url(#pitchLineGlow)"
          strokeWidth="2.5"
        />

        {/* Bottom Penalty Spot */}
        <circle cx="500" cy="1400" r="6" fill="#34d399" />

        {/* Bottom Penalty Arc */}
        <path
          d="M 420 1290 A 100 100 0 0 1 580 1290"
          stroke="url(#pitchLineGlow)"
          strokeWidth="2.5"
        />

        {/* Bottom Goal Net Frame */}
        <rect
          x="420"
          y="1540"
          width="160"
          height="30"
          stroke="url(#pitchLineGlow)"
          strokeWidth="2"
          strokeDasharray="4 4"
        />

        {/* Corner Kick Arcs */}
        {/* Top Left */}
        <path d="M 60 95 A 35 35 0 0 0 95 60" stroke="url(#pitchLineGlow)" strokeWidth="3" />
        {/* Top Right */}
        <path d="M 905 60 A 35 35 0 0 0 940 95" stroke="url(#pitchLineGlow)" strokeWidth="3" />
        {/* Bottom Left */}
        <path d="M 60 1505 A 35 35 0 0 1 95 1540" stroke="url(#pitchLineGlow)" strokeWidth="3" />
        {/* Bottom Right */}
        <path d="M 905 1540 A 35 35 0 0 1 940 1505" stroke="url(#pitchLineGlow)" strokeWidth="3" />
      </svg>

      {/* 5. Vignette Scrim to ensure crisp UI legibility in center */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_40%,#040d09_90%] opacity-90" />
    </div>
  );
}
