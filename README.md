# ⚽ Filoi Fantasy League Dashboard (FILOI LEAGUE 3.0)

A modern, mobile-first, production-ready Fantasy Premier League (FPL) mini-league dashboard with real money stakes and block prize race tracking.

- **FPL Classic League ID**: `398938`
- **Total Managers**: 16 Verified Paid Managers (₦5,000 each)
- **Total Prize Pool**: ₦80,000.00
- **Live Stakes**: 
  - 🥇 1st Place (Champion): ₦32,000.00 (40%)
  - 🥈 2nd Place (Runner-up): ₦16,000.00 (20%)
  - 🥉 3rd Place: ₦8,000.00 (10%)
  - 🏆 FPL Cup Champion: ₦8,000.00 (10%)
  - 🧱 4 Block Winners: ₦16,000.00 (4 × ₦4,000 at GW 9, GW 18, GW 27, GW 38)
- **Commissioner PIN**: `3989` (or `1234`)

---

## 🚀 Free 5-Minute Deployment to Vercel

You can deploy this dashboard for **100% free** on Vercel and share the link on your league's WhatsApp group.

### Step 1: Initialize Git & Push to GitHub

In your project directory, run:

```bash
git init
git add .
git commit -m "Filoi Fantasy League dashboard v1.0"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/filoi-fpl-dashboard.git
git push -u origin main
```

*(Replace `YOUR_USERNAME` with your GitHub username)*

---

### Step 2: Deploy on Vercel (100% Free)

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
2. Click **"Add New Project"** and select **"Continue with GitHub"**.
3. Locate **`filoi-fpl-dashboard`** and click **"Import"**.
4. Leave all default build settings as is (Next.js is automatically detected).
5. Click **"Deploy"**.
6. In ~60 seconds, Vercel gives you your free live domain (e.g. `https://filoi-fantasy.vercel.app`).
7. Copy the link and share directly into your WhatsApp group!

---

## 📋 Pre-Configured 16 Verified Managers Roster

All 16 verified paid entries are already configured in `lib/leagueData.ts` and `src/config/league.ts`:

| # | Manager Name | Team Name | FPL Entry ID | Status |
|---|---|---|---|---|
| 1 | **Ayodele Balogun** | Balogzee FC | `208805` | ₦5,000 ✅ |
| 2 | **Emmanuel Tunde** | Tunapa / Peaky Blinders | `6761494` | ₦5,000 ✅ |
| 3 | **Oghenero Egbetamah** | Nero FC | `5435885` | ₦5,000 ✅ |
| 4 | **Etim Godwin** | Etima FC | `4336304` | ₦5,000 ✅ |
| 5 | **Chukwuebuka Emereze** | Skywalkers | `5511743` | ₦5,000 ✅ |
| 6 | **Olanrewaju Ayeni** | Stunners Fc | `5341313` | ₦5,000 ✅ |
| 7 | **Emmanuel Adams** | Hellborn | `4429512` | ₦5,000 ✅ |
| 8 | **Wale Daniel** | FC Dazzle | `207661` | ₦5,000 ✅ |
| 9 | **--basharJohn- JERRY** | mascot_fc | `460563` | ₦5,000 ✅ |
| 10 | **Joseph Igah** | GARRI ?? | `716573` | ₦5,000 ✅ |
| 11 | **Nuels Couture** | Alpha Grit ⚔️ | `8578860` | ₦5,000 ✅ |
| 12 | **Sir Mayor** | AVENGERS fc | `2130073` | ₦5,000 ✅ |
| 13 | **Johnson Israelinho** | Israelinho | `7376279` | ₦5,000 ✅ |
| 14 | **Ayebakuro Roland** | Known Gunman | `415473` | ₦5,000 ✅ |
| 15 | **Bj Ozil** | BIG MAYOR fc | `1435195` | ₦5,000 ✅ |
| 16 | **Naomi Ayam** | khaleesi | `3036387` | ₦5,000 ✅ |

---

## 🛠 Features

1. **Role-Based Sharing**:
   - **Public View**: Regular managers see live standings, podium payout tags, block bounties, team logos, and the verified payment audit.
   - **Commissioner Maintenance Console**: Unlocks with PIN (`3989`), allowing the admin to switch between Live FPL API and Demo Cache, change League ID, simulate gameweeks, or reset data.
2. **Soccer Pitch Aesthetics**:
   - Atmospheric tactical pitch drawing with touchlines, halfway line, penalty boxes, and corner arcs.
   - Fantasy green and cyan stadium floodlights.
3. **Official FPL Club Badges**:
   - Direct integration with Premier League CDN (`fantasy.premierleague.com`) for teams with custom badges.
   - Custom heraldic crest fallbacks for every team.
4. **WhatsApp Broadcast Generator**:
   - Generates formatted standings updates ready to copy or open directly in WhatsApp.

---

## 💻 Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard locally.
