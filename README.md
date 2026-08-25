# The Despicable Heretic Wiki

## 📖 Read the live wiki

**https://khoryik96-creator.github.io/Despicable-Heretic/**

A modular TypeScript light-novel wiki and expandable reader for **The Despicable Heretic**.

## Current canon
- **Male lead:** Ryn — *The Despicable Heretic*
- **Female lead:** Princess Lucy
- **Premise:** Ryn is an absurdly powerful hermit condemned as a villain by the Five Great Orthodox Sects. Lucy is a genuinely kind, funny royal princess who becomes his political equal, closest companion, romantic partner, and by Season 15 his fiancée.
- **Power structure:** The Celestial Record Pavilion maintains the Heavenly Register of the world’s 100 strongest publicly known martial artists. Ryn cannot be meaningfully ranked.
- **Current manuscript:** **15 seasons × 10 chapters = 150 full prose chapters**.

## Novel reader
The Chapters tab uses expandable entries:

- The collapsed row is a short teaser/synopsis.
- Opening any chapter loads the complete light-novel prose.
- **Ryn** is color-coded sky-blue/teal in the reader.
- **Lucy** is color-coded rose-pink.
- Their dialogue blocks use matching colors and speaker labels for easy reading on the dark background.
- Ryn’s first revealed named art, **Still Sky**, appears in Season 13 and is highlighted in gold.
- Every chapter has a **bookmark button**.
- A dedicated **Bookmarks** tab shows all chapters saved on that browser/device.
- Bookmarks persist through refreshes using browser local storage.
- **Continue Reading** remembers the most recently opened chapter and jumps back to it.
- Bookmarks and reading progress are local to that browser/device; they are not synced to a GitHub account.
- Season 1 remains split into individual manuscript modules under `src/content/season-01/`.
- Seasons 2–15 use one manuscript bundle per season under `src/content/season-XX/chapters.ts`.
- Chapter metadata for Seasons 6–15 is kept separately in `src/features/chapters/data-06-15.ts` to preserve the modular canon structure.

## Story progression
### Seasons 1–5 — Opening Saga
Lucy climbs the wrong mountain, discovers Ryn is the infamous Despicable Heretic, enters his life, drags him into the imperial and martial worlds, helps expose the limits of the Heavenly Register, defends him at his Orthodox trial, calls Black Mountain home, and finally kisses him.

### Seasons 6–10 — The World Beyond the Register
- **S6 — The First Sovereign Comes to Tea:** Rank #1 Seo Taewon meets Ryn and becomes an ally. Ryn and Lucy awkwardly become an actual couple.
- **S7 — The Man Behind the War:** Lucy dismantles Wei Cang’s manufactured-war network and discovers the name Hollow Heaven.
- **S8 — The Princess Who Refused a Wedding:** Lucy defeats a political-marriage crisis without surrendering her agency or using Ryn as a threat.
- **S9 — The City Missing from the Register:** Vagrant City reveals that powerful unrecorded masters exist outside the Pavilion’s system.
- **S10 — The Mountain Everyone Mistook for a Kingdom:** refugees turn Black Mountain into a free community; Ryn and Lucy finally say “I love you.”

### Seasons 11–15 — Hollow Heaven War
- **S11 — The Six Houses Beyond the Register:** six ancient martial houses return and the public ranking world proves it still matters.
- **S12 — When Sovereigns Bleed:** all Five Sovereigns are targeted simultaneously; Lucy becomes a strategic target in her own right.
- **S13 — The Heavenless War:** Lucy leads the coalition while Ryn learns he cannot be everywhere. Ryn finally reveals **Still Sky**.
- **S14 — The Empty Throne:** Mo Yejun, former Black Register Entry II, defeats Seo Taewon and challenges Ryn with the belief that the strongest person has a duty to rule.
- **S15 — Home Is Not a Throne:** Lucy dismantles Hollow Heaven’s command structure, the Five Sovereigns fight together, Ryn defeats Mo without taking his throne, and Ryn proposes to Lucy while repairing the porch.

## Romance progression
The relationship is built around choice rather than ownership:

- **S1–5:** irritation → trust → chosen companionship → first kiss.
- **S6:** awkward post-kiss courtship and accidental official “boyfriend” status.
- **S7:** Ryn learns to follow Lucy’s lead even when she is threatened.
- **S8:** Lucy publicly chooses Ryn while refusing to become political marriage currency.
- **S9–10:** domestic intimacy and shared home deepen; they say “I love you.”
- **S11–13:** mature partnership under war; Lucy commands and Ryn deliberately trusts her decisions.
- **S14:** Lucy explicitly rejects the idea that loving Ryn gives her ownership over his choices.
- **S15:** their partnership becomes visible to the entire coalition and ends in engagement.

## Wiki sections
Overview · Chapters · Bookmarks · Characters · Villains · Factions · Rankings · Feats · Timeline · Lore · Global search

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
