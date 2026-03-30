# Opposing Probables Grid

An inverted [FanGraphs Probables Grid](https://www.fangraphs.com/roster-resource/probables-grid) — instead of showing which pitcher each team is starting, this app shows which pitcher each team is **facing**.

## How It Works

The app fetches data from FanGraphs' probables API and inverts the logic: for each team and game date, it looks up the **opponent's** probable starter rather than the team's own.

## Stack

- **Next.js 16** (App Router, server components)
- **Tailwind CSS v4**
- **TypeScript**
- Hosted on **Vercel**

## Local Development

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Data Architecture

All data fetching is isolated in `src/lib/fetch-probables.ts`. The module:

1. Calls `https://www.fangraphs.com/api/roster-resource/probables-grid/data` — a JSON endpoint returning all teams' probable starters, opponents, and game dates
2. Builds a pitcher lookup map (team + date → pitcher)
3. For each team's game, looks up the **opponent's** pitcher from the lookup map
4. Returns a structured `GridData` object ready for the UI

Data is cached with a 6-hour revalidation interval via Next.js ISR.

## Deploy to Vercel

```bash
vercel
```

No environment variables required — the app uses FanGraphs' public API.
