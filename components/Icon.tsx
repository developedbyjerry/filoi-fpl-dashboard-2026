'use client';

import React from 'react';
import * as LucideIcons from 'lucide-react';

export interface IconProps {
  name: string;
  size?: number | string;
  className?: string;
  color?: string;
  strokeWidth?: number;
}

export function Icon({
  name,
  size = 20,
  className = '',
  color,
  strokeWidth = 2,
}: IconProps) {
  // Normalize icon name: handle cases like 'arrow-right' to 'ArrowRight' or keep pascal
  const pascalName = name.includes('-')
    ? name
        .split('-')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join('')
    : name.charAt(0).toUpperCase() + name.slice(1);

  const iconsMap = LucideIcons as unknown as Record<string, React.ComponentType<{
    size?: number | string;
    className?: string;
    color?: string;
    strokeWidth?: number;
  }>>;

  const Component = iconsMap[pascalName] || iconsMap[name];

  if (!Component) {
    const Fallback = LucideIcons.HelpCircle;
    return <Fallback size={size} className={className} color={color} strokeWidth={strokeWidth} />;
  }

  return <Component size={size} className={className} color={color} strokeWidth={strokeWidth} />;
}
