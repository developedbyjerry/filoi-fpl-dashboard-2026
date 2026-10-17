export interface GwScore {
  gw: number;
  points: number;
  hits: number;
  netPoints: number;
  captain: string;
  chip?: string | null;
}

export interface Manager {
  id: number;
  entry: number;
  managerName: string;
  teamName: string;
  paid: boolean;
  paymentTimestamp: string;
  whatsappTag: string;
  totalPoints: number;
  currentGwPoints: number;
  overallRank: number;
  lastRank: number;
  rankDelta: number;
  overallRankMovement: 'up' | 'down' | 'same';
  captain: string;
  viceCaptain: string;
  chipsUsed: string[];
  activeChip: string | null;
  overallPercentile?: string;
  badgeUrl?: string | null;
  badgeIcon?: string;
  badgeGradient?: string;
  gwScores: GwScore[];
}

export interface BlockConfig {
  id: number;
  name: string;
  startGw: number;
  endGw: number;
  prizeAmount: number;
  prizeFormatted: string;
  status: 'active' | 'upcoming' | 'completed';
}

export interface LeagueStats {
  leagueName: string;
  fplLeagueId: number;
  totalManagers: number;
  entryFee: number;
  entryFeeFormatted: string;
  totalPot: number;
  totalPotFormatted: string;
  registrationStatus: 'CLOSED';
  registrationDeadline: string;
  currentGameweek: number;
  activeBlockId: number;
  payouts: {
    firstPlace: number;
    secondPlace: number;
    thirdPlace: number;
    cupWinner: number;
    blockWinnerEach: number;
    totalBlocksCount: number;
  };
}

export interface BlockStanding {
  manager: Manager;
  blockRank: number;
  blockPoints: number;
  pointsBehindLeader: number;
  hitsTaken: number;
}
