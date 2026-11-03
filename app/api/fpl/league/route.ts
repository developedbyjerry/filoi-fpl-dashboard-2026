import { NextRequest, NextResponse } from 'next/server';
import { VERIFIED_ENTRY_IDS, INITIAL_MANAGERS } from '@/lib/leagueData';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const leagueId = searchParams.get('leagueId') || '398938';

  try {
    const standingsUrl = `https://fantasy.premierleague.com/api/leagues-classic/${leagueId}/standings/`;
    const bootstrapUrl = 'https://fantasy.premierleague.com/api/bootstrap-static/';

    const [standingsRes, bootstrapRes] = await Promise.all([
      fetch(standingsUrl, {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          Accept: 'application/json',
        },
        cache: 'no-store',
      }),
      fetch(bootstrapUrl, {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          Accept: 'application/json',
        },
        cache: 'no-store',
      }),
    ]);

    if (!standingsRes.ok) {
      return NextResponse.json(
        {
          success: false,
          error: `FPL Standings API status ${standingsRes.status}`,
          leagueId,
          isFallback: true,
          standings: INITIAL_MANAGERS,
        },
        { status: 200 }
      );
    }

    const standingsData = await standingsRes.json();
    const bootstrapData = bootstrapRes.ok ? await bootstrapRes.json() : null;

    const currentEvent =
      bootstrapData?.events?.find((e: any) => e.is_current) ||
      bootstrapData?.events?.find((e: any) => e.is_next) ||
      { id: 9, name: 'Gameweek 9' };

    const currentGwNumber = currentEvent.id || 9;
    const rawResults = standingsData.standings?.results || [];

    // Filter to only the 16 verified paid managers
    const verifiedSet = new Set(VERIFIED_ENTRY_IDS);
    const verifiedResults = rawResults.filter((r: any) => verifiedSet.has(r.entry));

    // Lookup map of existing managers for metadata like badges and whatsapp tags
    const baselineMap = new Map(INITIAL_MANAGERS.map((m) => [m.entry, m]));

    // Fetch individual gameweek history for each verified manager in parallel
    const historyPromises = verifiedResults.map((r: any) =>
      fetch(`https://fantasy.premierleague.com/api/entry/${r.entry}/history/`, {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          Accept: 'application/json',
        },
        cache: 'no-store',
      })
        .then((res) => (res.ok ? res.json() : null))
        .catch(() => null)
    );

    const histories = await Promise.all(historyPromises);

    const enrichedManagers = verifiedResults.map((r: any, idx: number) => {
      const base = baselineMap.get(r.entry);
      const hist = histories[idx];
      const currentList = hist?.current || [];
      const chipsList = hist?.chips || [];

      let gwScores = base?.gwScores || [];
      if (currentList.length > 0) {
        gwScores = currentList.map((h: any) => {
          const chipAtEvent = chipsList.find((c: any) => c.event === h.event);
          let chipName: string | null = null;
          if (chipAtEvent) {
            if (chipAtEvent.name === 'bboost') chipName = 'Bench Boost';
            else if (chipAtEvent.name === '3xc') chipName = 'Triple Captain';
            else if (chipAtEvent.name === 'freehit') chipName = 'Free Hit';
            else if (chipAtEvent.name === 'wildcard') chipName = 'Wildcard';
            else chipName = chipAtEvent.name;
          }
          return {
            gw: h.event,
            points: h.points,
            hits: h.event_transfers_cost || 0,
            netPoints: h.points - (h.event_transfers_cost || 0),
            captain: 'Haaland',
            chip: chipName,
          };
        });
      }

      const chipsUsed = chipsList.map((c: any) => {
        if (c.name === 'bboost') return 'Bench Boost';
        if (c.name === '3xc') return 'Triple Captain';
        if (c.name === 'freehit') return 'Free Hit';
        if (c.name === 'wildcard') return 'Wildcard';
        return c.name;
      });

      // Calculate previous gameweek points for rank movement calculation
      const prevGw = currentGwNumber - 1;
      const prevEntry = currentList.find((h: any) => h.event === prevGw);
      const prevTotal = prevEntry ? prevEntry.total_points : r.total;

      return {
        id: base?.id || idx + 1,
        entry: r.entry,
        managerName: base?.managerName || r.player_name,
        teamName: r.entry_name || base?.teamName,
        paid: true,
        paymentTimestamp: 'Aug 15 • ₦5,000.00 Paid & Verified',
        whatsappTag: base?.whatsappTag || `@${r.player_name.toLowerCase().replace(/[^a-z0-9]/g, '_')}`,
        totalPoints: r.total,
        currentGwPoints: r.event_total,
        prevTotal,
        captain: base?.captain || 'Haaland (C)',
        viceCaptain: base?.viceCaptain || 'Palmer (V)',
        chipsUsed: chipsUsed.length > 0 ? chipsUsed : base?.chipsUsed || [],
        activeChip: null,
        overallPercentile: base?.overallPercentile || 'Top Tier',
        badgeUrl: base?.badgeUrl || r.club_badge_src || null,
        badgeIcon: base?.badgeIcon || 'Shield',
        badgeGradient: base?.badgeGradient || 'from-emerald-600 to-slate-900',
        gwScores,
      };
    });

    // Sort by totalPoints descending
    enrichedManagers.sort((a: any, b: any) => b.totalPoints - a.totalPoints);

    // Compute previous rank
    const prevSorted = [...enrichedManagers].sort((a: any, b: any) => b.prevTotal - a.prevTotal);
    prevSorted.forEach((m: any, idx: number) => {
      m.lastRank = idx + 1;
    });

    const rankedVerified = enrichedManagers.map((m: any, idx: number) => {
      const overallRank = idx + 1;
      const lastRank = m.lastRank || overallRank;
      const rankDelta = Math.abs(lastRank - overallRank);
      const overallRankMovement =
        overallRank < lastRank ? 'up' : overallRank > lastRank ? 'down' : 'same';
      delete m.prevTotal;

      return {
        ...m,
        id: idx + 1,
        overallRank,
        lastRank,
        rankDelta,
        overallRankMovement,
      };
    });

    // Block 1 Winner (GW 1-9)
    const block1Standings = rankedVerified.map((m: any) => {
      const b1Scores = m.gwScores.filter((s: any) => s.gw >= 1 && s.gw <= 9);
      const b1Pts = b1Scores.reduce((acc: number, s: any) => acc + s.netPoints, 0);
      return { manager: m, b1Pts };
    });
    block1Standings.sort((a: any, b: any) => b.b1Pts - a.b1Pts);
    const block1Winner = block1Standings[0];

    return NextResponse.json({
      success: true,
      league: standingsData.league,
      currentGameweek: currentGwNumber,
      activeBlockId: currentGwNumber >= 10 ? 2 : 1,
      block1Winner: block1Winner
        ? {
            entry: block1Winner.manager.entry,
            managerName: block1Winner.manager.managerName,
            teamName: block1Winner.manager.teamName,
            points: block1Winner.b1Pts,
            prize: '₦4,000.00',
            status: 'completed',
          }
        : null,
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
        standings: INITIAL_MANAGERS,
      },
      { status: 200 }
    );
  }
}
