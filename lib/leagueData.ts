import { Manager, BlockConfig, LeagueStats, BlockStanding } from "./types";

export const VERIFIED_ENTRY_IDS = [
  716573, 415473, 208805, 5511743, 4429512, 3036387, 6761494, 5435885,
  207661, 2130073, 8578860, 4336304, 1435195, 5341313, 7376279, 460563,
];

export const INITIAL_LEAGUE_STATS: LeagueStats = {
  leagueName: "Filoi Fantasy League (3.0)",
  fplLeagueId: 398938,
  totalManagers: 16,
  entryFee: 5000,
  entryFeeFormatted: "₦5,000.00",
  totalPot: 80000,
  totalPotFormatted: "₦80,000.00",
  registrationStatus: "CLOSED",
  registrationDeadline: "Permanently Closed at 3:00 PM (Strict Pay-Before-Deadline)",
  currentGameweek: 6,
  activeBlockId: 1,
  payouts: {
    firstPlace: 32000,
    secondPlace: 16000,
    thirdPlace: 8000,
    cupWinner: 8000,
    blockWinnerEach: 4000,
    totalBlocksCount: 4,
  },
};

export const BLOCKS: BlockConfig[] = [
  {
    id: 1,
    name: "Block 1",
    startGw: 1,
    endGw: 9,
    prizeAmount: 4000,
    prizeFormatted: "₦4,000.00",
    status: "active",
  },
  {
    id: 2,
    name: "Block 2",
    startGw: 10,
    endGw: 18,
    prizeAmount: 4000,
    prizeFormatted: "₦4,000.00",
    status: "upcoming",
  },
  {
    id: 3,
    name: "Block 3",
    startGw: 19,
    endGw: 27,
    prizeAmount: 4000,
    prizeFormatted: "₦4,000.00",
    status: "upcoming",
  },
  {
    id: 4,
    name: "Block 4",
    startGw: 28,
    endGw: 38,
    prizeAmount: 4000,
    prizeFormatted: "₦4,000.00",
    status: "upcoming",
  },
];

export const INITIAL_MANAGERS: Manager[] = [
  {
    "id": 1,
    "entry": 208805,
    "managerName": "Ayodele Balogun",
    "teamName": "Balogzee FC",
    "paid": true,
    "paymentTimestamp": "Aug 15 • ₦5,000.00 Paid & Verified",
    "whatsappTag": "@ayodele_balogun",
    "totalPoints": 446,
    "currentGwPoints": 90,
    "overallRank": 1,
    "lastRank": 2,
    "rankDelta": 1,
    "overallRankMovement": "up",
    "captain": "Palmer (C)",
    "viceCaptain": "João Pedro (V)",
    "chipsUsed": [
      "Bench Boost",
      "Triple Captain",
      "Wildcard"
    ],
    "activeChip": null,
    "overallPercentile": "Top 0.0%",
    "gwScores": [
      {
        "gw": 1,
        "points": 51,
        "hits": 0,
        "netPoints": 51,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 2,
        "points": 127,
        "hits": 0,
        "netPoints": 127,
        "captain": "Haaland",
        "chip": "Bench Boost"
      },
      {
        "gw": 3,
        "points": 51,
        "hits": 0,
        "netPoints": 51,
        "captain": "Haaland",
        "chip": "Triple Captain"
      },
      {
        "gw": 4,
        "points": 80,
        "hits": 0,
        "netPoints": 80,
        "captain": "Haaland",
        "chip": "Wildcard"
      },
      {
        "gw": 5,
        "points": 47,
        "hits": 0,
        "netPoints": 47,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 6,
        "points": 90,
        "hits": 0,
        "netPoints": 90,
        "captain": "Palmer",
        "chip": null
      }
    ],
    "badgeUrl": "https://fantasy.premierleague.com/gcs/plfpl-production-adobe-approved/plfpl-production/1287555/6bf30035-ebf5-4aea-bede-bd567206c5b4.png",
    "badgeIcon": "Crown",
    "badgeGradient": "from-amber-500 to-amber-700"
  },
  {
    "id": 2,
    "entry": 6761494,
    "managerName": "Emmanuel Tunde",
    "teamName": "Tunapa",
    "paid": true,
    "paymentTimestamp": "Aug 15 • ₦5,000.00 Paid & Verified",
    "whatsappTag": "@emmanuel_tunde",
    "totalPoints": 428,
    "currentGwPoints": 57,
    "overallRank": 2,
    "lastRank": 1,
    "rankDelta": 1,
    "overallRankMovement": "down",
    "captain": "Groß (C)",
    "viceCaptain": "Haaland (V)",
    "chipsUsed": [
      "Wildcard"
    ],
    "activeChip": null,
    "overallPercentile": "Top 0.0%",
    "gwScores": [
      {
        "gw": 1,
        "points": 65,
        "hits": 0,
        "netPoints": 65,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 2,
        "points": 85,
        "hits": 0,
        "netPoints": 85,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 3,
        "points": 51,
        "hits": 0,
        "netPoints": 51,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 4,
        "points": 99,
        "hits": 0,
        "netPoints": 99,
        "captain": "Haaland",
        "chip": "Wildcard"
      },
      {
        "gw": 5,
        "points": 71,
        "hits": 0,
        "netPoints": 71,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 6,
        "points": 57,
        "hits": 0,
        "netPoints": 57,
        "captain": "Groß",
        "chip": null
      }
    ],
    "badgeUrl": "https://fantasy.premierleague.com/gcs/plfpl-production-adobe-approved/plfpl-production/6761494/9eb2449a-38d8-48f5-93f0-390385c99b64.png",
    "badgeIcon": "Shield",
    "badgeGradient": "from-red-600 to-slate-900"
  },
  {
    "id": 3,
    "entry": 5435885,
    "managerName": "Oghenero Egbetamah",
    "teamName": "Nero FC",
    "paid": true,
    "paymentTimestamp": "Aug 15 • ₦5,000.00 Paid & Verified",
    "whatsappTag": "@oghenero_egbetamah",
    "totalPoints": 421,
    "currentGwPoints": 86,
    "overallRank": 3,
    "lastRank": 5,
    "rankDelta": 2,
    "overallRankMovement": "up",
    "captain": "João Pedro (C)",
    "viceCaptain": "Rogers (V)",
    "chipsUsed": [
      "Free Hit"
    ],
    "activeChip": null,
    "overallPercentile": "Top 0.0%",
    "gwScores": [
      {
        "gw": 1,
        "points": 49,
        "hits": 0,
        "netPoints": 49,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 2,
        "points": 89,
        "hits": 0,
        "netPoints": 89,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 3,
        "points": 57,
        "hits": 0,
        "netPoints": 57,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 4,
        "points": 94,
        "hits": 0,
        "netPoints": 94,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 5,
        "points": 46,
        "hits": 0,
        "netPoints": 46,
        "captain": "Haaland",
        "chip": "Free Hit"
      },
      {
        "gw": 6,
        "points": 86,
        "hits": 0,
        "netPoints": 86,
        "captain": "João Pedro",
        "chip": null
      }
    ],
    "badgeUrl": null,
    "badgeIcon": "Flame",
    "badgeGradient": "from-emerald-500 to-teal-800"
  },
  {
    "id": 4,
    "entry": 4336304,
    "managerName": "Etim Godwin",
    "teamName": "Etima FC",
    "paid": true,
    "paymentTimestamp": "Aug 15 • ₦5,000.00 Paid & Verified",
    "whatsappTag": "@etim_godwin",
    "totalPoints": 419,
    "currentGwPoints": 93,
    "overallRank": 4,
    "lastRank": 7,
    "rankDelta": 3,
    "overallRankMovement": "up",
    "captain": "Haaland (C)",
    "viceCaptain": "Cherki (V)",
    "chipsUsed": [
      "Wildcard"
    ],
    "activeChip": null,
    "overallPercentile": "Top 0.0%",
    "gwScores": [
      {
        "gw": 1,
        "points": 49,
        "hits": 0,
        "netPoints": 49,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 2,
        "points": 85,
        "hits": 0,
        "netPoints": 85,
        "captain": "Haaland",
        "chip": "Wildcard"
      },
      {
        "gw": 3,
        "points": 64,
        "hits": 0,
        "netPoints": 64,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 4,
        "points": 83,
        "hits": 0,
        "netPoints": 83,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 5,
        "points": 53,
        "hits": 0,
        "netPoints": 53,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 6,
        "points": 93,
        "hits": 8,
        "netPoints": 85,
        "captain": "Haaland",
        "chip": null
      }
    ],
    "badgeUrl": "https://fantasy.premierleague.com/gcs/plfpl-production-adobe-approved/plfpl-production/2024858/2a32f565-41c6-43c9-bf1e-5908a6257f21.png",
    "badgeIcon": "Zap",
    "badgeGradient": "from-blue-600 to-indigo-900"
  },
  {
    "id": 5,
    "entry": 5511743,
    "managerName": "Chukwuebuka Emereze",
    "teamName": "Skywalkers",
    "paid": true,
    "paymentTimestamp": "Aug 15 • ₦5,000.00 Paid & Verified",
    "whatsappTag": "@chukwuebuka_emereze",
    "totalPoints": 416,
    "currentGwPoints": 81,
    "overallRank": 5,
    "lastRank": 6,
    "rankDelta": 1,
    "overallRankMovement": "up",
    "captain": "Haaland (C)",
    "viceCaptain": "João Pedro (V)",
    "chipsUsed": [
      "Wildcard"
    ],
    "activeChip": null,
    "overallPercentile": "Top 0.0%",
    "gwScores": [
      {
        "gw": 1,
        "points": 41,
        "hits": 0,
        "netPoints": 41,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 2,
        "points": 78,
        "hits": 0,
        "netPoints": 78,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 3,
        "points": 64,
        "hits": 0,
        "netPoints": 64,
        "captain": "Haaland",
        "chip": "Wildcard"
      },
      {
        "gw": 4,
        "points": 81,
        "hits": 0,
        "netPoints": 81,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 5,
        "points": 71,
        "hits": 0,
        "netPoints": 71,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 6,
        "points": 81,
        "hits": 0,
        "netPoints": 81,
        "captain": "Haaland",
        "chip": null
      }
    ],
    "badgeUrl": "https://fantasy.premierleague.com/gcs/plfpl-production-adobe-approved/plfpl-production/5511743/e6b5d477-e603-4e0b-bf0e-4796d897a55f.png",
    "badgeIcon": "Compass",
    "badgeGradient": "from-cyan-500 to-blue-700"
  },
  {
    "id": 6,
    "entry": 5341313,
    "managerName": "Olanrewaju Ayeni",
    "teamName": "Stunners Fc",
    "paid": true,
    "paymentTimestamp": "Aug 15 • ₦5,000.00 Paid & Verified",
    "whatsappTag": "@olanrewaju_ayeni",
    "totalPoints": 413,
    "currentGwPoints": 57,
    "overallRank": 6,
    "lastRank": 3,
    "rankDelta": 3,
    "overallRankMovement": "down",
    "captain": "B.Fernandes (C)",
    "viceCaptain": "Haaland (V)",
    "chipsUsed": [
      "Wildcard",
      "Free Hit"
    ],
    "activeChip": null,
    "overallPercentile": "Top 0.0%",
    "gwScores": [
      {
        "gw": 1,
        "points": 53,
        "hits": 0,
        "netPoints": 53,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 2,
        "points": 121,
        "hits": 0,
        "netPoints": 121,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 3,
        "points": 43,
        "hits": 0,
        "netPoints": 43,
        "captain": "Haaland",
        "chip": "Wildcard"
      },
      {
        "gw": 4,
        "points": 85,
        "hits": 0,
        "netPoints": 85,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 5,
        "points": 54,
        "hits": 0,
        "netPoints": 54,
        "captain": "Haaland",
        "chip": "Free Hit"
      },
      {
        "gw": 6,
        "points": 57,
        "hits": 0,
        "netPoints": 57,
        "captain": "B.Fernandes",
        "chip": null
      }
    ],
    "badgeUrl": null,
    "badgeIcon": "Sparkles",
    "badgeGradient": "from-violet-600 to-fuchsia-800"
  },
  {
    "id": 7,
    "entry": 4429512,
    "managerName": "Emmanuel Adams",
    "teamName": "Hellborn",
    "paid": true,
    "paymentTimestamp": "Aug 15 • ₦5,000.00 Paid & Verified",
    "whatsappTag": "@emmanuel_adams",
    "totalPoints": 402,
    "currentGwPoints": 84,
    "overallRank": 7,
    "lastRank": 11,
    "rankDelta": 4,
    "overallRankMovement": "up",
    "captain": "Haaland (C)",
    "viceCaptain": "Rogers (V)",
    "chipsUsed": [
      "Wildcard"
    ],
    "activeChip": null,
    "overallPercentile": "Top 0.0%",
    "gwScores": [
      {
        "gw": 1,
        "points": 63,
        "hits": 0,
        "netPoints": 63,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 2,
        "points": 78,
        "hits": 0,
        "netPoints": 78,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 3,
        "points": 38,
        "hits": 0,
        "netPoints": 38,
        "captain": "Haaland",
        "chip": "Wildcard"
      },
      {
        "gw": 4,
        "points": 92,
        "hits": 0,
        "netPoints": 92,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 5,
        "points": 47,
        "hits": 0,
        "netPoints": 47,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 6,
        "points": 84,
        "hits": 0,
        "netPoints": 84,
        "captain": "Haaland",
        "chip": null
      }
    ],
    "badgeUrl": "https://fantasy.premierleague.com/gcs/plfpl-production-adobe-approved/plfpl-production/6408821/8d56c46d-427b-4293-8f63-287de868a825.png",
    "badgeIcon": "Flame",
    "badgeGradient": "from-orange-600 to-red-900"
  },
  {
    "id": 8,
    "entry": 207661,
    "managerName": "Wale Daniel",
    "teamName": "FC Dazzle",
    "paid": true,
    "paymentTimestamp": "Aug 15 • ₦5,000.00 Paid & Verified",
    "whatsappTag": "@wale_daniel",
    "totalPoints": 394,
    "currentGwPoints": 74,
    "overallRank": 8,
    "lastRank": 10,
    "rankDelta": 2,
    "overallRankMovement": "up",
    "captain": "Haaland (C)",
    "viceCaptain": "Mbeumo (V)",
    "chipsUsed": [
      "Wildcard"
    ],
    "activeChip": null,
    "overallPercentile": "Top 0.0%",
    "gwScores": [
      {
        "gw": 1,
        "points": 46,
        "hits": 0,
        "netPoints": 46,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 2,
        "points": 75,
        "hits": 0,
        "netPoints": 75,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 3,
        "points": 54,
        "hits": 0,
        "netPoints": 54,
        "captain": "Haaland",
        "chip": "Wildcard"
      },
      {
        "gw": 4,
        "points": 97,
        "hits": 4,
        "netPoints": 93,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 5,
        "points": 52,
        "hits": 0,
        "netPoints": 52,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 6,
        "points": 74,
        "hits": 0,
        "netPoints": 74,
        "captain": "Haaland",
        "chip": null
      }
    ],
    "badgeUrl": null,
    "badgeIcon": "Diamond",
    "badgeGradient": "from-teal-500 to-cyan-800"
  },
  {
    "id": 9,
    "entry": 460563,
    "managerName": "--basharJohn- JERRY",
    "teamName": "mascot_fc",
    "paid": true,
    "paymentTimestamp": "Aug 15 • ₦5,000.00 Paid & Verified",
    "whatsappTag": "@__basharjohn__jerry",
    "totalPoints": 391,
    "currentGwPoints": 63,
    "overallRank": 9,
    "lastRank": 9,
    "rankDelta": 0,
    "overallRankMovement": "same",
    "captain": "Haaland (C)",
    "viceCaptain": "Palmer (V)",
    "chipsUsed": [
      "Triple Captain"
    ],
    "activeChip": null,
    "overallPercentile": "Top 0.0%",
    "gwScores": [
      {
        "gw": 1,
        "points": 45,
        "hits": 0,
        "netPoints": 45,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 2,
        "points": 108,
        "hits": 0,
        "netPoints": 108,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 3,
        "points": 70,
        "hits": 0,
        "netPoints": 70,
        "captain": "Haaland",
        "chip": "Triple Captain"
      },
      {
        "gw": 4,
        "points": 58,
        "hits": 0,
        "netPoints": 58,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 5,
        "points": 47,
        "hits": 0,
        "netPoints": 47,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 6,
        "points": 63,
        "hits": 0,
        "netPoints": 63,
        "captain": "Haaland",
        "chip": null
      }
    ],
    "badgeUrl": "https://fantasy.premierleague.com/gcs/plfpl-production-adobe-approved/plfpl-production/3995586/fe9e250a-5d97-4932-bee0-572e546ac10f.png",
    "badgeIcon": "Trophy",
    "badgeGradient": "from-emerald-600 to-blue-900"
  },
  {
    "id": 10,
    "entry": 716573,
    "managerName": "Joseph Igah",
    "teamName": "GARRI ??",
    "paid": true,
    "paymentTimestamp": "Aug 15 • ₦5,000.00 Paid & Verified",
    "whatsappTag": "@joseph_igah",
    "totalPoints": 390,
    "currentGwPoints": 56,
    "overallRank": 10,
    "lastRank": 8,
    "rankDelta": 2,
    "overallRankMovement": "down",
    "captain": "Groß (C)",
    "viceCaptain": "B.Fernandes (V)",
    "chipsUsed": [
      "Wildcard"
    ],
    "activeChip": null,
    "overallPercentile": "Top 0.0%",
    "gwScores": [
      {
        "gw": 1,
        "points": 48,
        "hits": 0,
        "netPoints": 48,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 2,
        "points": 107,
        "hits": 0,
        "netPoints": 107,
        "captain": "Haaland",
        "chip": "Wildcard"
      },
      {
        "gw": 3,
        "points": 40,
        "hits": 0,
        "netPoints": 40,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 4,
        "points": 96,
        "hits": 0,
        "netPoints": 96,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 5,
        "points": 43,
        "hits": 0,
        "netPoints": 43,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 6,
        "points": 56,
        "hits": 0,
        "netPoints": 56,
        "captain": "Groß",
        "chip": null
      }
    ],
    "badgeUrl": null,
    "badgeIcon": "Activity",
    "badgeGradient": "from-amber-600 to-yellow-800"
  },
  {
    "id": 11,
    "entry": 8578860,
    "managerName": "Nuels Couture",
    "teamName": "Alpha Grit ⚔️",
    "paid": true,
    "paymentTimestamp": "Aug 15 • ₦5,000.00 Paid & Verified",
    "whatsappTag": "@nuels_couture",
    "totalPoints": 386,
    "currentGwPoints": 33,
    "overallRank": 11,
    "lastRank": 4,
    "rankDelta": 7,
    "overallRankMovement": "down",
    "captain": "Barnes (C)",
    "viceCaptain": "Gibbs-White (V)",
    "chipsUsed": [],
    "activeChip": null,
    "overallPercentile": "Top 0.0%",
    "gwScores": [
      {
        "gw": 1,
        "points": 55,
        "hits": 0,
        "netPoints": 55,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 2,
        "points": 108,
        "hits": 0,
        "netPoints": 108,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 3,
        "points": 46,
        "hits": 0,
        "netPoints": 46,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 4,
        "points": 82,
        "hits": 0,
        "netPoints": 82,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 5,
        "points": 62,
        "hits": 0,
        "netPoints": 62,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 6,
        "points": 33,
        "hits": 0,
        "netPoints": 33,
        "captain": "Barnes",
        "chip": null
      }
    ],
    "badgeUrl": null,
    "badgeIcon": "Swords",
    "badgeGradient": "from-slate-600 to-zinc-900"
  },
  {
    "id": 12,
    "entry": 2130073,
    "managerName": "Sir Mayor",
    "teamName": "AVENGERS fc",
    "paid": true,
    "paymentTimestamp": "Aug 15 • ₦5,000.00 Paid & Verified",
    "whatsappTag": "@sir_mayor",
    "totalPoints": 380,
    "currentGwPoints": 73,
    "overallRank": 12,
    "lastRank": 12,
    "rankDelta": 0,
    "overallRankMovement": "same",
    "captain": "Haaland (C)",
    "viceCaptain": "Groß (V)",
    "chipsUsed": [
      "Triple Captain"
    ],
    "activeChip": null,
    "overallPercentile": "Top 0.0%",
    "gwScores": [
      {
        "gw": 1,
        "points": 34,
        "hits": 0,
        "netPoints": 34,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 2,
        "points": 81,
        "hits": 0,
        "netPoints": 81,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 3,
        "points": 58,
        "hits": 0,
        "netPoints": 58,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 4,
        "points": 88,
        "hits": 28,
        "netPoints": 60,
        "captain": "Haaland",
        "chip": "Triple Captain"
      },
      {
        "gw": 5,
        "points": 74,
        "hits": 0,
        "netPoints": 74,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 6,
        "points": 73,
        "hits": 0,
        "netPoints": 73,
        "captain": "Haaland",
        "chip": null
      }
    ],
    "badgeUrl": "https://fantasy.premierleague.com/gcs/plfpl-production-adobe-approved/plfpl-production/2153778/b18f0168-ba60-4203-961d-ad61ff204a58.png",
    "badgeIcon": "ShieldAlert",
    "badgeGradient": "from-red-600 to-blue-900"
  },
  {
    "id": 13,
    "entry": 7376279,
    "managerName": "Johnson Israelinho",
    "teamName": "Israelinho",
    "paid": true,
    "paymentTimestamp": "Aug 15 • ₦5,000.00 Paid & Verified",
    "whatsappTag": "@johnson_israelinho",
    "totalPoints": 368,
    "currentGwPoints": 78,
    "overallRank": 13,
    "lastRank": 15,
    "rankDelta": 2,
    "overallRankMovement": "up",
    "captain": "João Pedro (C)",
    "viceCaptain": "Raya (V)",
    "chipsUsed": [
      "Wildcard"
    ],
    "activeChip": null,
    "overallPercentile": "Top 0.0%",
    "gwScores": [
      {
        "gw": 1,
        "points": 50,
        "hits": 0,
        "netPoints": 50,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 2,
        "points": 65,
        "hits": 0,
        "netPoints": 65,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 3,
        "points": 48,
        "hits": 0,
        "netPoints": 48,
        "captain": "Haaland",
        "chip": "Wildcard"
      },
      {
        "gw": 4,
        "points": 88,
        "hits": 0,
        "netPoints": 88,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 5,
        "points": 39,
        "hits": 0,
        "netPoints": 39,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 6,
        "points": 78,
        "hits": 0,
        "netPoints": 78,
        "captain": "João Pedro",
        "chip": null
      }
    ],
    "badgeUrl": null,
    "badgeIcon": "Globe",
    "badgeGradient": "from-yellow-500 to-emerald-700"
  },
  {
    "id": 14,
    "entry": 415473,
    "managerName": "Ayebakuro Roland",
    "teamName": "Known Gunman",
    "paid": true,
    "paymentTimestamp": "Aug 15 • ₦5,000.00 Paid & Verified",
    "whatsappTag": "@ayebakuro_roland",
    "totalPoints": 358,
    "currentGwPoints": 60,
    "overallRank": 14,
    "lastRank": 14,
    "rankDelta": 0,
    "overallRankMovement": "same",
    "captain": "Haaland (C)",
    "viceCaptain": "Palmer (V)",
    "chipsUsed": [
      "Wildcard"
    ],
    "activeChip": null,
    "overallPercentile": "Top 0.0%",
    "gwScores": [
      {
        "gw": 1,
        "points": 47,
        "hits": 0,
        "netPoints": 47,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 2,
        "points": 98,
        "hits": 0,
        "netPoints": 98,
        "captain": "Haaland",
        "chip": "Wildcard"
      },
      {
        "gw": 3,
        "points": 32,
        "hits": 0,
        "netPoints": 32,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 4,
        "points": 72,
        "hits": 0,
        "netPoints": 72,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 5,
        "points": 49,
        "hits": 0,
        "netPoints": 49,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 6,
        "points": 60,
        "hits": 0,
        "netPoints": 60,
        "captain": "Haaland",
        "chip": null
      }
    ],
    "badgeUrl": null,
    "badgeIcon": "Crosshair",
    "badgeGradient": "from-rose-600 to-slate-900"
  },
  {
    "id": 15,
    "entry": 1435195,
    "managerName": "Bj Ozil",
    "teamName": "BIG MAYOR fc",
    "paid": true,
    "paymentTimestamp": "Aug 15 • ₦5,000.00 Paid & Verified",
    "whatsappTag": "@bj_ozil",
    "totalPoints": 356,
    "currentGwPoints": 55,
    "overallRank": 15,
    "lastRank": 13,
    "rankDelta": 2,
    "overallRankMovement": "down",
    "captain": "Gyökeres (C)",
    "viceCaptain": "Haaland (V)",
    "chipsUsed": [
      "Wildcard"
    ],
    "activeChip": null,
    "overallPercentile": "Top 0.0%",
    "gwScores": [
      {
        "gw": 1,
        "points": 55,
        "hits": 0,
        "netPoints": 55,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 2,
        "points": 59,
        "hits": 0,
        "netPoints": 59,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 3,
        "points": 60,
        "hits": 0,
        "netPoints": 60,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 4,
        "points": 80,
        "hits": 0,
        "netPoints": 80,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 5,
        "points": 47,
        "hits": 0,
        "netPoints": 47,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 6,
        "points": 55,
        "hits": 0,
        "netPoints": 55,
        "captain": "Gyökeres",
        "chip": "Wildcard"
      }
    ],
    "badgeUrl": "https://fantasy.premierleague.com/gcs/plfpl-production-adobe-approved/plfpl-production/2178151/1c39fc34-1226-4683-9ad5-5a7072daf78b.png",
    "badgeIcon": "Award",
    "badgeGradient": "from-indigo-600 to-purple-900"
  },
  {
    "id": 16,
    "entry": 3036387,
    "managerName": "Naomi Ayam",
    "teamName": "khaleesi",
    "paid": true,
    "paymentTimestamp": "Aug 15 • ₦5,000.00 Paid & Verified",
    "whatsappTag": "@naomi_ayam",
    "totalPoints": 352,
    "currentGwPoints": 65,
    "overallRank": 16,
    "lastRank": 16,
    "rankDelta": 0,
    "overallRankMovement": "same",
    "captain": "Haaland (C)",
    "viceCaptain": "Palmer (V)",
    "chipsUsed": [
      "Wildcard"
    ],
    "activeChip": null,
    "overallPercentile": "Top 0.0%",
    "gwScores": [
      {
        "gw": 1,
        "points": 44,
        "hits": 0,
        "netPoints": 44,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 2,
        "points": 85,
        "hits": 0,
        "netPoints": 85,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 3,
        "points": 44,
        "hits": 0,
        "netPoints": 44,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 4,
        "points": 53,
        "hits": 0,
        "netPoints": 53,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 5,
        "points": 61,
        "hits": 0,
        "netPoints": 61,
        "captain": "Haaland",
        "chip": "Wildcard"
      },
      {
        "gw": 6,
        "points": 65,
        "hits": 0,
        "netPoints": 65,
        "captain": "Haaland",
        "chip": null
      }
    ],
    "badgeUrl": null,
    "badgeIcon": "Feather",
    "badgeGradient": "from-pink-600 to-purple-800"
  }
];

export function calculateBlockStandings(managers: Manager[], block: BlockConfig): BlockStanding[] {
  const standings = managers.map((mgr) => {
    const scoresInBlock = mgr.gwScores.filter(
      (s) => s.gw >= block.startGw && s.gw <= block.endGw
    );
    const blockPoints = scoresInBlock.reduce((acc, curr) => acc + curr.netPoints, 0);
    const hitsTaken = scoresInBlock.reduce((acc, curr) => acc + curr.hits, 0);

    return {
      manager: mgr,
      blockRank: 0,
      blockPoints,
      pointsBehindLeader: 0,
      hitsTaken,
    };
  });

  standings.sort((a, b) => b.blockPoints - a.blockPoints);
  const leaderPoints = standings[0]?.blockPoints || 0;

  return standings.map((item, index) => ({
    ...item,
    blockRank: index + 1,
    pointsBehindLeader: leaderPoints - item.blockPoints,
  }));
}

export function generateWhatsAppBroadcast(
  managers: Manager[],
  currentBlock: BlockConfig,
  blockStandings: BlockStanding[]
): string {
  const leader = managers[0];
  const runnerUp = managers[1];
  const third = managers[2];
  const blockLeader = blockStandings[0];

  return `🏆 *FILOI FANTASY LEAGUE UPDATE* 🏆
💰 *Total Prize Pool: ₦80,000.00*
🔒 *16 Verified Paid Managers | Registration Closed*

📊 *OVERALL PODIUM (GW ${INITIAL_LEAGUE_STATS.currentGameweek})*:
🥇 1st: *${leader.managerName}* (${leader.teamName}) - ${leader.totalPoints} pts [₦32,000 Track]
🥈 2nd: *${runnerUp.managerName}* (${runnerUp.teamName}) - ${runnerUp.totalPoints} pts [₦16,000 Track]
🥉 3rd: *${third.managerName}* (${third.teamName}) - ${third.totalPoints} pts [₦8,000 Track]

🧱 *${currentBlock.name.toUpperCase()} RACE (GW ${currentBlock.startGw}–${currentBlock.endGw})*:
👑 Current Leader: *${blockLeader.manager.managerName}* (${blockLeader.manager.teamName})
⚡ Block Points: *${blockLeader.blockPoints} pts*
🎁 Prize Bounty: *₦4,000.00*

⚠️ *Payment Rules In Effect*:
Strict deadline passed at 3:00 PM. No pay, no points. Only the 16 verified managers are eligible for payouts. Unpaid managers must wait for next season.

Check full live dashboard on web! ⚽🇳🇬`;
}
