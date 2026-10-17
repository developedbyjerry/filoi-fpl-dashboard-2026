import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Filoi Fantasy League Dashboard',
  description: 'Premier League Fantasy Mini-League Dashboard with 16 verified paid managers, ₦80,000 prize pool allocations, live gameweek standings, and block race tracking.',
  openGraph: {
    title: 'Filoi Fantasy League Dashboard',
    description: 'Premier League Fantasy Mini-League Dashboard with 16 verified paid managers, ₦80,000 prize pool allocations, live gameweek standings, and block race tracking.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Filoi Fantasy League Dashboard',
    description: 'Premier League Fantasy Mini-League Dashboard with 16 verified paid managers, ₦80,000 prize pool allocations, live gameweek standings, and block race tracking.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="dark">
      <body suppressHydrationWarning className="bg-[var(--bg-base)] text-[var(--text-main)] min-h-screen antialiased selection:bg-[var(--primary)] selection:text-white">
        {children}
      </body>
    </html>
  );
}
