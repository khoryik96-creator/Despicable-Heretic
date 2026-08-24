# The Despicable Heretic Wiki

## 📖 Read the live wiki

**https://khoryik96-creator.github.io/Despicable-Heretic/**

A modular React + TypeScript + Vite wiki for the light novel **The Despicable Heretic**.

## Current canon
- **Male lead:** Ryn — *The Despicable Heretic*
- **Female lead:** Princess Lucy
- **Premise:** Ryn is an absurdly powerful hermit condemned as a villain by the Five Great Orthodox Sects. Lucy is a genuinely kind, funny royal princess who becomes his closest companion.
- **Power structure:** The Celestial Record Pavilion maintains the Heavenly Register of the world’s 100 strongest publicly known martial artists. Ryn cannot be meaningfully ranked.
- **Opening saga:** 5 seasons × 10 chapters = 50 planned chapters.

## Wiki sections
Overview · Chapters · Characters · Villains · Factions · Techniques · Timeline · Lore · Global search

## GitHub Pages
This repository is configured for GitHub Pages using GitHub Actions.

In GitHub, open:

**Settings → Pages → Build and deployment → Source → GitHub Actions**

Once Pages is enabled, pushes to `main` will publish the site automatically.

## Run locally
```bash
npm install
npm run dev
```

## Checks
```bash
npm run lint
npm run build
```

The project uses feature-based modules under `src/features/`, with typed data separated from presentation components so the canon can grow without turning `App.tsx` into a monolith.
