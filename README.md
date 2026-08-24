# The Despicable Heretic Wiki

## 📖 Read the live wiki

**https://khoryik96-creator.github.io/Despicable-Heretic/**

A modular TypeScript light-novel wiki and reader for **The Despicable Heretic**.

## Current canon
- **Male lead:** Ryn — *The Despicable Heretic*
- **Female lead:** Princess Lucy
- **Premise:** Ryn is an absurdly powerful hermit condemned as a villain by the Five Great Orthodox Sects. Lucy is a genuinely kind, funny royal princess who becomes his closest companion.
- **Power structure:** The Celestial Record Pavilion maintains the Heavenly Register of the world’s 100 strongest publicly known martial artists. Ryn cannot be meaningfully ranked.
- **Opening saga:** 5 seasons × 10 chapters = 50 planned chapters.
- **Full prose available:** Season 1, Chapters 1–10.

## Novel reader
The Chapters tab uses expandable entries:

- The collapsed row is a short teaser/synopsis.
- Opening a **Season 1** chapter loads the complete light-novel prose.
- Seasons 2–5 are explicitly marked **Outline only** until their prose is drafted.
- Season 1 manuscript files are stored individually under `src/content/season-01/` so the novel does not become one giant source file.

## Wiki sections
Overview · Chapters · Characters · Villains · Factions · Rankings · Feats · Timeline · Lore · Global search

## GitHub Pages — no custom CI required
The reading site is a static root-level `index.html` that reads canon and manuscript files directly from the repository. It does **not** need npm, Vite, or a custom GitHub Actions workflow to publish.

Publishing source:

**Branch: `main` · Folder: `/(root)`**

The repository includes `.nojekyll` so GitHub Pages serves the files directly.

## TypeScript source
The feature-based source remains under `src/features/`, with canon data separated from presentation code. Full novel text lives under `src/content/`.

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
