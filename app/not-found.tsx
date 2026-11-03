import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-main)] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-2xl font-bold mb-4">
        404
      </div>
      <h2 className="text-xl sm:text-2xl font-bold mb-2">Page Not Found</h2>
      <p className="text-sm text-[var(--text-muted)] max-w-md mb-6">
        The requested page could not be found. Return to the Filoi Fantasy League Dashboard.
      </p>
      <Link
        href="/"
        className="px-4 py-2 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white text-sm font-semibold transition-colors"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}
