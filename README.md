# The Despicable Heretic Wiki

## 📖 Read the live wiki

**https://khoryik96-creator.github.io/Despicable-Heretic/**

A modular TypeScript light-novel wiki for **The Despicable Heretic**.

## Current canon
- **Male lead:** Ryn — *The Despicable Heretic*
- **Female lead:** Princess Lucy
- **Premise:** Ryn is an absurdly powerful hermit condemned as a villain by the Five Great Orthodox Sects. Lucy is a genuinely kind, funny royal princess who becomes his closest companion.
- **Power structure:** The Celestial Record Pavilion maintains the Heavenly Register of the world’s 100 strongest publicly known martial artists. Ryn cannot be meaningfully ranked.
- **Opening saga:** 5 seasons × 10 chapters = 50 planned chapters.

## Wiki sections
Overview · Chapters · Characters · Villains · Factions · Rankings · Feats · Timeline · Lore · Global search

## GitHub Pages — no CI required
The reading site is now a static `index.html` that reads the canon directly from the typed data files under `src/features/`. It does **not** need npm, Vite, or a GitHub Actions build to publish.

Set GitHub Pages to:

**Settings → Pages → Build and deployment → Source: Deploy from a branch**

Then choose:

**Branch: `main` · Folder: `/(root)`**

The old failing Pages Actions workflow has been removed.

## TypeScript source
The feature-based source remains under `src/features/`, with canon data separated from presentation code so the project can continue to grow modularly.

## Local development
```bash
npm install
npm run dev
```

## Checks
```bash
npm run lint
npm run build
```
