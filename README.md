# The Despicable Heretic Wiki

## 📖 Read the live wiki

**https://khoryik96-creator.github.io/Despicable-Heretic/**

A modular TypeScript light-novel wiki and reader for **The Despicable Heretic**.

## Current canon
- **Male lead:** Ryn — *The Despicable Heretic*
- **Female lead:** Princess Lucy
- **Premise:** Ryn is an absurdly powerful hermit condemned as a villain by the Five Great Orthodox Sects. Lucy is a genuinely kind, funny royal princess who becomes his closest companion and eventual romantic partner.
- **Power structure:** The Celestial Record Pavilion maintains the Heavenly Register of the world’s 100 strongest publicly known martial artists. Ryn cannot be meaningfully ranked.
- **Opening saga:** 5 seasons × 10 chapters = **50 full prose chapters**.

## Novel reader
The Chapters tab uses expandable entries:

- The collapsed row is a short teaser/synopsis.
- Opening any chapter loads the complete light-novel prose.
- **Ryn** is color-coded sky-blue/teal in the reader.
- **Lucy** is color-coded rose-pink.
- Their dialogue blocks use the same colors and speaker labels for easier reading on the dark background.
- Season 1 remains split into individual manuscript modules under `src/content/season-01/`.
- Seasons 2–5 are grouped into one typed manuscript module per season under `src/content/season-02/` through `season-05/`.

## Romance progression
The romance is deliberately slow-burn rather than immediate:

- **Season 1:** curiosity, irritation, and the first sense that Black Mountain is becoming shared space.
- **Season 2:** trust, training, small acts of care, and increasingly natural physical closeness.
- **Season 3:** Ryn chooses to enter Lucy’s world; private hand-holding, a disastrous dance, and emotional reliance deepen the relationship.
- **Season 4:** the world begins noticing them; they stop pretending every touch is accidental, and Lucy chooses the man over the myth surrounding him.
- **Season 5:** Lucy defends Ryn without sanitizing who he is, calls Black Mountain home, and the slow-burn becomes explicitly mutual.

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
