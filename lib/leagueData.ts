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
  currentGameweek: 9,
  activeBlockId: 2,
  lastSyncedAt: new Date().toISOString(),
  isAutoSyncing: true,
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
    status: "completed",
    winnerName: "Ayodele Balogun",
    winnerTeam: "Balogzee FC",
    winnerPoints: 607,
    winnerEntry: 208805,
    bountyAwarded: "₦4,000.00",
  },
  {
    id: 2,
    name: "Block 2",
    startGw: 10,
    endGw: 18,
    prizeAmount: 4000,
    prizeFormatted: "₦4,000.00",
    status: "active",
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
    "entry": 208805,
    "managerName": "Ayodele Balogun",
    "teamName": "Balogzee FC",
    "paid": true,
    "paymentTimestamp": "Aug 15 • ₦5,000.00 Paid & Verified",
    "whatsappTag": "@ayodele_balogun",
    "totalPoints": 607,
    "currentGwPoints": 51,
    "captain": "Haaland (C)",
    "viceCaptain": "Palmer (V)",
    "chipsUsed": [
      "Bench Boost",
      "Triple Captain",
      "Wildcard"
    ],
    "activeChip": null,
    "overallPercentile": "Top Tier",
    "badgeUrl": "https://fantasy.premierleague.com/gcs/plfpl-production-adobe-approved/plfpl-production/1287555/6bf30035-ebf5-4aea-bede-bd567206c5b4.png",
    "badgeIcon": "Crown",
    "badgeGradient": "from-amber-500 to-amber-700",
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
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 7,
        "points": 65,
        "hits": 0,
        "netPoints": 65,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 8,
        "points": 45,
        "hits": 0,
        "netPoints": 45,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 9,
        "points": 51,
        "hits": 0,
        "netPoints": 51,
        "captain": "Haaland",
        "chip": null
      }
    ],
    "lastRank": 1,
    "id": 1,
    "overallRank": 1,
    "rankDelta": 0,
    "overallRankMovement": "same"
  },
  {
    "entry": 4429512,
    "managerName": "Emmanuel Adams",
    "teamName": "Hellborn",
    "paid": true,
    "paymentTimestamp": "Aug 15 • ₦5,000.00 Paid & Verified",
    "whatsappTag": "@emmanuel_adams",
    "totalPoints": 601,
    "currentGwPoints": 57,
    "captain": "Haaland (C)",
    "viceCaptain": "Palmer (V)",
    "chipsUsed": [
      "Wildcard",
      "Triple Captain"
    ],
    "activeChip": null,
    "overallPercentile": "Top Tier",
    "badgeUrl": "https://fantasy.premierleague.com/gcs/plfpl-production-adobe-approved/plfpl-production/6408821/8d56c46d-427b-4293-8f63-287de868a825.png",
    "badgeIcon": "Flame",
    "badgeGradient": "from-orange-600 to-red-900",
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
      },
      {
        "gw": 7,
        "points": 89,
        "hits": 0,
        "netPoints": 89,
        "captain": "Haaland",
        "chip": "Triple Captain"
      },
      {
        "gw": 8,
        "points": 53,
        "hits": 0,
        "netPoints": 53,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 9,
        "points": 57,
        "hits": 0,
        "netPoints": 57,
        "captain": "Haaland",
        "chip": null
      }
    ],
    "lastRank": 3,
    "id": 2,
    "overallRank": 2,
    "rankDelta": 1,
    "overallRankMovement": "up"
  },
  {
    "entry": 6761494,
    "managerName": "Emmanuel Tunde",
    "teamName": "Peaky Blinders",
    "paid": true,
    "paymentTimestamp": "Aug 15 • ₦5,000.00 Paid & Verified",
    "whatsappTag": "@emmanuel_tunde",
    "totalPoints": 592,
    "currentGwPoints": 47,
    "captain": "Haaland (C)",
    "viceCaptain": "Palmer (V)",
    "chipsUsed": [
      "Wildcard"
    ],
    "activeChip": null,
    "overallPercentile": "Top Tier",
    "badgeUrl": "https://fantasy.premierleague.com/gcs/plfpl-production-adobe-approved/plfpl-production/6761494/9eb2449a-38d8-48f5-93f0-390385c99b64.png",
    "badgeIcon": "Shield",
    "badgeGradient": "from-red-600 to-slate-900",
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
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 7,
        "points": 68,
        "hits": 0,
        "netPoints": 68,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 8,
        "points": 49,
        "hits": 0,
        "netPoints": 49,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 9,
        "points": 47,
        "hits": 0,
        "netPoints": 47,
        "captain": "Haaland",
        "chip": null
      }
    ],
    "lastRank": 2,
    "id": 3,
    "overallRank": 3,
    "rankDelta": 1,
    "overallRankMovement": "down"
  },
  {
    "entry": 5511743,
    "managerName": "Chukwuebuka Emereze",
    "teamName": "Skywalkers",
    "paid": true,
    "paymentTimestamp": "Aug 15 • ₦5,000.00 Paid & Verified",
    "whatsappTag": "@chukwuebuka_emereze",
    "totalPoints": 587,
    "currentGwPoints": 45,
    "captain": "Haaland (C)",
    "viceCaptain": "Palmer (V)",
    "chipsUsed": [
      "Wildcard"
    ],
    "activeChip": null,
    "overallPercentile": "Top Tier",
    "badgeUrl": "https://fantasy.premierleague.com/gcs/plfpl-production-adobe-approved/plfpl-production/5511743/e6b5d477-e603-4e0b-bf0e-4796d897a55f.png",
    "badgeIcon": "Compass",
    "badgeGradient": "from-cyan-500 to-blue-700",
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
      },
      {
        "gw": 7,
        "points": 78,
        "hits": 0,
        "netPoints": 78,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 8,
        "points": 48,
        "hits": 0,
        "netPoints": 48,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 9,
        "points": 45,
        "hits": 0,
        "netPoints": 45,
        "captain": "Haaland",
        "chip": null
      }
    ],
    "lastRank": 4,
    "id": 4,
    "overallRank": 4,
    "rankDelta": 0,
    "overallRankMovement": "same"
  },
  {
    "entry": 5435885,
    "managerName": "Oghenero Egbetamah",
    "teamName": "Nero FC",
    "paid": true,
    "paymentTimestamp": "Aug 15 • ₦5,000.00 Paid & Verified",
    "whatsappTag": "@oghenero_egbetamah",
    "totalPoints": 581,
    "currentGwPoints": 46,
    "captain": "Haaland (C)",
    "viceCaptain": "Palmer (V)",
    "chipsUsed": [
      "Free Hit",
      "Wildcard"
    ],
    "activeChip": null,
    "overallPercentile": "Top Tier",
    "badgeUrl": null,
    "badgeIcon": "Flame",
    "badgeGradient": "from-emerald-500 to-teal-800",
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
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 7,
        "points": 69,
        "hits": 0,
        "netPoints": 69,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 8,
        "points": 45,
        "hits": 0,
        "netPoints": 45,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 9,
        "points": 46,
        "hits": 0,
        "netPoints": 46,
        "captain": "Haaland",
        "chip": "Wildcard"
      }
    ],
    "lastRank": 5,
    "id": 5,
    "overallRank": 5,
    "rankDelta": 0,
    "overallRankMovement": "same"
  },
  {
    "entry": 5341313,
    "managerName": "Olanrewaju Ayeni",
    "teamName": "Stunners FC",
    "paid": true,
    "paymentTimestamp": "Aug 15 • ₦5,000.00 Paid & Verified",
    "whatsappTag": "@olanrewaju_ayeni",
    "totalPoints": 572,
    "currentGwPoints": 46,
    "captain": "Haaland (C)",
    "viceCaptain": "Palmer (V)",
    "chipsUsed": [
      "Wildcard",
      "Free Hit",
      "Triple Captain"
    ],
    "activeChip": null,
    "overallPercentile": "Top Tier",
    "badgeUrl": null,
    "badgeIcon": "Sparkles",
    "badgeGradient": "from-violet-600 to-fuchsia-800",
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
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 7,
        "points": 80,
        "hits": 4,
        "netPoints": 76,
        "captain": "Haaland",
        "chip": "Triple Captain"
      },
      {
        "gw": 8,
        "points": 41,
        "hits": 0,
        "netPoints": 41,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 9,
        "points": 45,
        "hits": 4,
        "netPoints": 41,
        "captain": "Haaland",
        "chip": null
      }
    ],
    "lastRank": 6,
    "id": 6,
    "overallRank": 6,
    "rankDelta": 0,
    "overallRankMovement": "same"
  },
  {
    "entry": 716573,
    "managerName": "Joseph Igah",
    "teamName": "GARRI ??",
    "paid": true,
    "paymentTimestamp": "Aug 15 • ₦5,000.00 Paid & Verified",
    "whatsappTag": "@joseph_igah",
    "totalPoints": 556,
    "currentGwPoints": 44,
    "captain": "Haaland (C)",
    "viceCaptain": "Palmer (V)",
    "chipsUsed": [
      "Wildcard"
    ],
    "activeChip": null,
    "overallPercentile": "Top Tier",
    "badgeUrl": null,
    "badgeIcon": "Activity",
    "badgeGradient": "from-amber-600 to-yellow-800",
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
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 7,
        "points": 84,
        "hits": 0,
        "netPoints": 84,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 8,
        "points": 42,
        "hits": 0,
        "netPoints": 42,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 9,
        "points": 44,
        "hits": 4,
        "netPoints": 40,
        "captain": "Haaland",
        "chip": null
      }
    ],
    "lastRank": 7,
    "id": 7,
    "overallRank": 7,
    "rankDelta": 0,
    "overallRankMovement": "same"
  },
  {
    "entry": 207661,
    "managerName": "Wale Daniel",
    "teamName": "FC Dazzle",
    "paid": true,
    "paymentTimestamp": "Aug 15 • ₦5,000.00 Paid & Verified",
    "whatsappTag": "@wale_daniel",
    "totalPoints": 556,
    "currentGwPoints": 49,
    "captain": "Haaland (C)",
    "viceCaptain": "Palmer (V)",
    "chipsUsed": [
      "Wildcard",
      "Free Hit"
    ],
    "activeChip": null,
    "overallPercentile": "Top Tier",
    "badgeUrl": null,
    "badgeIcon": "Diamond",
    "badgeGradient": "from-teal-500 to-cyan-800",
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
      },
      {
        "gw": 7,
        "points": 65,
        "hits": 0,
        "netPoints": 65,
        "captain": "Haaland",
        "chip": "Free Hit"
      },
      {
        "gw": 8,
        "points": 48,
        "hits": 0,
        "netPoints": 48,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 9,
        "points": 49,
        "hits": 0,
        "netPoints": 49,
        "captain": "Haaland",
        "chip": null
      }
    ],
    "lastRank": 9,
    "id": 8,
    "overallRank": 8,
    "rankDelta": 1,
    "overallRankMovement": "up"
  },
  {
    "entry": 4336304,
    "managerName": "Etim Godwin",
    "teamName": "Etima FC",
    "paid": true,
    "paymentTimestamp": "Aug 15 • ₦5,000.00 Paid & Verified",
    "whatsappTag": "@etim_godwin",
    "totalPoints": 551,
    "currentGwPoints": 41,
    "captain": "Haaland (C)",
    "viceCaptain": "Palmer (V)",
    "chipsUsed": [
      "Wildcard"
    ],
    "activeChip": null,
    "overallPercentile": "Top Tier",
    "badgeUrl": "https://fantasy.premierleague.com/gcs/plfpl-production-adobe-approved/plfpl-production/2024858/2a32f565-41c6-43c9-bf1e-5908a6257f21.png",
    "badgeIcon": "Zap",
    "badgeGradient": "from-blue-600 to-indigo-900",
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
      },
      {
        "gw": 7,
        "points": 60,
        "hits": 0,
        "netPoints": 60,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 8,
        "points": 31,
        "hits": 0,
        "netPoints": 31,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 9,
        "points": 41,
        "hits": 0,
        "netPoints": 41,
        "captain": "Haaland",
        "chip": null
      }
    ],
    "lastRank": 8,
    "id": 9,
    "overallRank": 9,
    "rankDelta": 1,
    "overallRankMovement": "down"
  },
  {
    "entry": 460563,
    "managerName": "--basharJohn- JERRY",
    "teamName": "mascot_fc",
    "paid": true,
    "paymentTimestamp": "Aug 15 • ₦5,000.00 Paid & Verified",
    "whatsappTag": "@__basharjohn__jerry",
    "totalPoints": 551,
    "currentGwPoints": 46,
    "captain": "Haaland (C)",
    "viceCaptain": "Palmer (V)",
    "chipsUsed": [
      "Triple Captain",
      "Wildcard"
    ],
    "activeChip": null,
    "overallPercentile": "Top Tier",
    "badgeUrl": "https://fantasy.premierleague.com/gcs/plfpl-production-adobe-approved/plfpl-production/3995586/fe9e250a-5d97-4932-bee0-572e546ac10f.png",
    "badgeIcon": "Trophy",
    "badgeGradient": "from-emerald-600 to-blue-900",
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
      },
      {
        "gw": 7,
        "points": 75,
        "hits": 0,
        "netPoints": 75,
        "captain": "Haaland",
        "chip": "Wildcard"
      },
      {
        "gw": 8,
        "points": 39,
        "hits": 0,
        "netPoints": 39,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 9,
        "points": 46,
        "hits": 0,
        "netPoints": 46,
        "captain": "Haaland",
        "chip": null
      }
    ],
    "lastRank": 10,
    "id": 10,
    "overallRank": 10,
    "rankDelta": 0,
    "overallRankMovement": "same"
  },
  {
    "entry": 8578860,
    "managerName": "Nuels Couture",
    "teamName": "Alpha Grit ⚔️",
    "paid": true,
    "paymentTimestamp": "Aug 15 • ₦5,000.00 Paid & Verified",
    "whatsappTag": "@nuels_couture",
    "totalPoints": 535,
    "currentGwPoints": 42,
    "captain": "Haaland (C)",
    "viceCaptain": "Palmer (V)",
    "chipsUsed": [
      "Wildcard"
    ],
    "activeChip": null,
    "overallPercentile": "Top Tier",
    "badgeUrl": null,
    "badgeIcon": "Swords",
    "badgeGradient": "from-slate-600 to-zinc-900",
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
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 7,
        "points": 64,
        "hits": 0,
        "netPoints": 64,
        "captain": "Haaland",
        "chip": "Wildcard"
      },
      {
        "gw": 8,
        "points": 43,
        "hits": 0,
        "netPoints": 43,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 9,
        "points": 42,
        "hits": 0,
        "netPoints": 42,
        "captain": "Haaland",
        "chip": null
      }
    ],
    "lastRank": 11,
    "id": 11,
    "overallRank": 11,
    "rankDelta": 0,
    "overallRankMovement": "same"
  },
  {
    "entry": 415473,
    "managerName": "Ayebakuro Roland",
    "teamName": "Known Gunman",
    "paid": true,
    "paymentTimestamp": "Aug 15 • ₦5,000.00 Paid & Verified",
    "whatsappTag": "@ayebakuro_roland",
    "totalPoints": 523,
    "currentGwPoints": 67,
    "captain": "Haaland (C)",
    "viceCaptain": "Palmer (V)",
    "chipsUsed": [
      "Wildcard"
    ],
    "activeChip": null,
    "overallPercentile": "Top Tier",
    "badgeUrl": null,
    "badgeIcon": "Crosshair",
    "badgeGradient": "from-rose-600 to-slate-900",
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
      },
      {
        "gw": 7,
        "points": 59,
        "hits": 0,
        "netPoints": 59,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 8,
        "points": 43,
        "hits": 4,
        "netPoints": 39,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 9,
        "points": 68,
        "hits": 0,
        "netPoints": 68,
        "captain": "Haaland",
        "chip": null
      }
    ],
    "lastRank": 15,
    "id": 12,
    "overallRank": 12,
    "rankDelta": 3,
    "overallRankMovement": "up"
  },
  {
    "entry": 1435195,
    "managerName": "Bj Ozil",
    "teamName": "BIG MAYOR fc",
    "paid": true,
    "paymentTimestamp": "Aug 15 • ₦5,000.00 Paid & Verified",
    "whatsappTag": "@bj_ozil",
    "totalPoints": 513,
    "currentGwPoints": 54,
    "captain": "Haaland (C)",
    "viceCaptain": "Palmer (V)",
    "chipsUsed": [
      "Wildcard"
    ],
    "activeChip": null,
    "overallPercentile": "Top Tier",
    "badgeUrl": "https://fantasy.premierleague.com/gcs/plfpl-production-adobe-approved/plfpl-production/2178151/1c39fc34-1226-4683-9ad5-5a7072daf78b.png",
    "badgeIcon": "Award",
    "badgeGradient": "from-indigo-600 to-purple-900",
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
        "captain": "Haaland",
        "chip": "Wildcard"
      },
      {
        "gw": 7,
        "points": 53,
        "hits": 0,
        "netPoints": 53,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 8,
        "points": 50,
        "hits": 0,
        "netPoints": 50,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 9,
        "points": 54,
        "hits": 0,
        "netPoints": 54,
        "captain": "Haaland",
        "chip": null
      }
    ],
    "lastRank": 14,
    "id": 13,
    "overallRank": 13,
    "rankDelta": 1,
    "overallRankMovement": "up"
  },
  {
    "entry": 2130073,
    "managerName": "Sir Mayor",
    "teamName": "AVENGERS fc",
    "paid": true,
    "paymentTimestamp": "Aug 15 • ₦5,000.00 Paid & Verified",
    "whatsappTag": "@sir_mayor",
    "totalPoints": 508,
    "currentGwPoints": 38,
    "captain": "Haaland (C)",
    "viceCaptain": "Palmer (V)",
    "chipsUsed": [
      "Triple Captain"
    ],
    "activeChip": null,
    "overallPercentile": "Top Tier",
    "badgeUrl": "https://fantasy.premierleague.com/gcs/plfpl-production-adobe-approved/plfpl-production/2153778/b18f0168-ba60-4203-961d-ad61ff204a58.png",
    "badgeIcon": "ShieldAlert",
    "badgeGradient": "from-red-600 to-blue-900",
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
      },
      {
        "gw": 7,
        "points": 56,
        "hits": 0,
        "netPoints": 56,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 8,
        "points": 34,
        "hits": 0,
        "netPoints": 34,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 9,
        "points": 38,
        "hits": 0,
        "netPoints": 38,
        "captain": "Haaland",
        "chip": null
      }
    ],
    "lastRank": 12,
    "id": 14,
    "overallRank": 14,
    "rankDelta": 2,
    "overallRankMovement": "down"
  },
  {
    "entry": 3036387,
    "managerName": "Naomi Ayam",
    "teamName": "khaleesi",
    "paid": true,
    "paymentTimestamp": "Aug 15 • ₦5,000.00 Paid & Verified",
    "whatsappTag": "@naomi_ayam",
    "totalPoints": 503,
    "currentGwPoints": 41,
    "captain": "Haaland (C)",
    "viceCaptain": "Palmer (V)",
    "chipsUsed": [
      "Wildcard"
    ],
    "activeChip": null,
    "overallPercentile": "Top Tier",
    "badgeUrl": null,
    "badgeIcon": "Feather",
    "badgeGradient": "from-pink-600 to-purple-800",
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
      },
      {
        "gw": 7,
        "points": 72,
        "hits": 0,
        "netPoints": 72,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 8,
        "points": 38,
        "hits": 0,
        "netPoints": 38,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 9,
        "points": 41,
        "hits": 0,
        "netPoints": 41,
        "captain": "Haaland",
        "chip": null
      }
    ],
    "lastRank": 13,
    "id": 15,
    "overallRank": 15,
    "rankDelta": 2,
    "overallRankMovement": "down"
  },
  {
    "entry": 7376279,
    "managerName": "Johnson Israelinho",
    "teamName": "Israelinho",
    "paid": true,
    "paymentTimestamp": "Aug 15 • ₦5,000.00 Paid & Verified",
    "whatsappTag": "@johnson_israelinho",
    "totalPoints": 500,
    "currentGwPoints": 52,
    "captain": "Haaland (C)",
    "viceCaptain": "Palmer (V)",
    "chipsUsed": [
      "Wildcard"
    ],
    "activeChip": null,
    "overallPercentile": "Top Tier",
    "badgeUrl": null,
    "badgeIcon": "Globe",
    "badgeGradient": "from-yellow-500 to-emerald-700",
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
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 7,
        "points": 47,
        "hits": 0,
        "netPoints": 47,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 8,
        "points": 33,
        "hits": 0,
        "netPoints": 33,
        "captain": "Haaland",
        "chip": null
      },
      {
        "gw": 9,
        "points": 54,
        "hits": 0,
        "netPoints": 54,
        "captain": "Haaland",
        "chip": null
      }
    ],
    "lastRank": 16,
    "id": 16,
    "overallRank": 16,
    "rankDelta": 0,
    "overallRankMovement": "same"
  }
];

export function calculateBlockStandings(managers: Manager[], block: BlockConfig): BlockStanding[] {
  const standings = managers.map((mgr) => {
    // Only take scores that fall strictly within this block range
    const scoresInBlock = (mgr.gwScores || []).filter(
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

  // Sort by net block points descending. If tied, sort by fewer hits taken, then overall rank
  standings.sort((a, b) => {
    if (b.blockPoints !== a.blockPoints) {
      return b.blockPoints - a.blockPoints;
    }
    if (a.hitsTaken !== b.hitsTaken) {
      return a.hitsTaken - b.hitsTaken;
    }
    return a.manager.overallRank - b.manager.overallRank;
  });

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

  const block1WinnerMsg = currentBlock.id >= 2
    ? `🏆 *BLOCK 1 CHAMPION*: *Ayodele Balogun* (Balogzee FC) - 607 pts [₦4,000 Won ✅]
⚡ *BLOCK 2 SPRINT (GW 10–18)*: All 16 teams reset to 0 pts fresh slate!\n`
    : "";

  return `🏆 *FILOI FANTASY LEAGUE UPDATE* 🏆
💰 *Total Prize Pool: ₦80,000.00*
🔒 *16 Verified Paid Managers | Registration Closed*

${block1WinnerMsg}📊 *OVERALL PODIUM (GW ${INITIAL_LEAGUE_STATS.currentGameweek})*:
🥇 1st: *${leader.managerName}* (${leader.teamName}) - ${leader.totalPoints} pts [₦32,000 Track]
🥈 2nd: *${runnerUp.managerName}* (${runnerUp.teamName}) - ${runnerUp.totalPoints} pts [₦16,000 Track]
🥉 3rd: *${third.managerName}* (${third.teamName}) - ${third.totalPoints} pts [₦8,000 Track]

🧱 *${currentBlock.name.toUpperCase()} RACE (GW ${currentBlock.startGw}–${currentBlock.endGw})*:
👑 Current Leader: *${blockLeader.manager.managerName}* (${blockLeader.manager.teamName})
⚡ Block Points: *${blockLeader.blockPoints} pts*
🎁 Prize Bounty: *₦4,000.00*

⚠️ *Payment Rules In Effect*:
Strict deadline passed at 3:00 PM. No pay, no points. Only the 16 verified managers are eligible for payouts.

Check full live dashboard on web! ⚽🇳🇬`;
}
