import { NextRequest, NextResponse } from 'next/server';
import { VERIFIED_ENTRY_IDS } from '@/lib/leagueData';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const leagueId = searchParams.get('leagueId') || '398938';

  try {
    const fplUrl = `https://fantasy.premierleague.com/api/leagues-classic/${leagueId}/standings/`;

    const res = await fetch(fplUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        Accept: 'application/json',
      },
      next: { revalidate: 30 },
    });

    if (!res.ok) {
      return NextResponse.json(
        {
          success: false,
          error: `FPL API returned status ${res.status}`,
          leagueId,
          isFallback: true,
        },
        { status: 200 }
      );
    }

    const data = await res.json();
    const rawResults = data.standings?.results || [];

    // Filter to only the 16 verified paid managers
    const verifiedSet = new Set(VERIFIED_ENTRY_IDS);
    const verifiedResults = rawResults.filter((r: any) => verifiedSet.has(r.entry));

    // Sort by total points descending
    verifiedResults.sort((a: any, b: any) => (b.total || 0) - (a.total || 0));

    // Re-assign ranks 1 to 16
    const rankedVerified = verifiedResults.map((r: any, idx: number) => ({
      ...r,
      verifiedRank: idx + 1,
    }));

    return NextResponse.json({
      success: true,
      league: data.league,
      standings: rankedVerified,
      totalVerifiedFound: rankedVerified.length,
      isFallback: false,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error?.message || 'Failed to connect to FPL API',
        leagueId,
        isFallback: true,
      },
      { status: 200 }
    );
  }
}
