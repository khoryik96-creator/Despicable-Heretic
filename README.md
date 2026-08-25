# The Despicable Heretic Wiki

## 📖 Read the live wiki

**https://khoryik96-creator.github.io/Despicable-Heretic/**

A modular TypeScript light-novel wiki and expandable reader for **The Despicable Heretic**.

## Current canon
- **Male lead:** Ryn — *The Despicable Heretic*
- **Female lead:** Princess Lucy
- **Current relationship:** married by Season 20.
- **Current manuscript:** **25 seasons × 10 chapters = 250 full prose chapters**.
- **Heavenly Register:** roughly 100 publicly ranked monsters; the Top 20 now have named identities, affinities, specialties, and signature arts.
- **Ryn:** remains unrankable and qualitatively above the formal Register rather than becoming ordinary Rank #1.

## Novel reader
- Every chapter is expandable full prose.
- **Ryn** dialogue is sky-blue/teal.
- **Lucy** dialogue is rose-pink.
- Ryn’s named art **Still Sky** is highlighted in gold.
- Persistent chapter bookmarks and **Continue Reading** use browser local storage.
- Bookmarks/reading progress remain local to that browser/device.
- Season 1 uses individual manuscript modules.
- Seasons 2–25 use one `chapters.ts` manuscript bundle per season.
- Metadata is split across `data.ts`, `data-06-15.ts`, and `data-16-25.ts`.

## Heavenly Register Top 20
The modern Register still uses rank, but now also records matchup information, elemental affinity, range, resilience, adaptability, and role.

### Five Sovereigns — #1 to #5
1. **Seo Taewon — White Falcon Sovereign** — wind / pressure — *White Sky Dominion, Falcon Without Shadow, Ninefold Pressure Sea*.
2. **Mei Xueyan — Crimson Venom Sovereign** — poison / blood — *Ten-Thousand Scarlet Veins, Poison That Remembers, Red Lotus Funeral*.
3. **Lei Zhen — Thunder Burial Sovereign** — lightning — *Heaven-Splitting Thunderstep, Nine Graves of Lightning, Storm King Descends*.
4. **Liang Yue — Moon-Tide Sovereign** — water / ice — *Silver Tide Reversal, Moon Beneath Frozen Water, Endless Winter Sea*.
5. **Shen Rui — Vermilion Furnace Sovereign** — fire — *Vermilion Furnace Heart, Sunfall Palm, Ashes Before Dawn*.

### Five Heavenly Pillars — #6 to #10
6. **Han Seojin — Desert Crown Marquis** — sand / earth.
7. **Mo Qingzhao — Golden Bell Marquis** — sound / vibration.
8. **Arin Vale — Beautiful Sword Saint** — wind / sword qi.
9. **Jin Seoryu — Black Iron Marquis** — metal.
10. **Yun Haejin — Pale Widow Marquis** — poison / silk.

### Ten Great Lords — #11 to #20
11. **Gao Ren — Mountain-Eating Lord** — earth / body cultivation.
12. **Sorin Kade — Glass Mist Lord** — mist / illusion.
13. **Bai Luo — Grave Thread Lord** — thread / remote control.
14. **Tae Mun — Blue Fang Lord** — water / beast-form qi.
15. **Qiao Lian — Cinder Orchid Lord** — fire / healing.
16. **Ilya Voss — Shadow Reed Lord** — concealment / shadow.
17. **Nara Sun — Verdant Calamity** — wood / plant qi.
18. **Kwon Mirae — Falling Star Lord** — heavy qi / pressure.
19. **Chen Ruo — Laughing Blade Lord** — pure sword qi / broken rhythm.
20. **Mina Soryeon — Rain Lantern Lord** — water / lightning.

Full distinctions and signature arts are stored in `src/features/rankings/top20.ts` and displayed directly in the live Rankings tab.

## Story progression
### Seasons 1–5 — Opening Saga
Lucy climbs the wrong mountain, discovers Ryn is the infamous Despicable Heretic, enters his life, drags him into the imperial and martial worlds, defends him at his Orthodox trial, calls Black Mountain home, and finally kisses him.

### Seasons 6–10 — World Beyond the Register
Seo Taewon enters the story, Lucy dismantles Wei Cang’s conspiracy, Vagrant City proves the Register is incomplete, and Black Mountain becomes a free community. Ryn and Lucy openly become a couple and say “I love you.”

### Seasons 11–15 — Hollow Heaven War
The Six Ancient Houses return. Lucy leads a broad coalition, the Five Sovereigns prove they are genuine apex monsters, Ryn reveals **Still Sky**, and former Black Register Entry II **Mo Yejun — the Empty Throne** becomes Ryn’s ideological opposite. The saga ends with Ryn proposing to Lucy.

### Seasons 16–20 — Eclipse Court
The postponed wedding becomes the excuse to gather the Top 20, then a new enemy begins systematically testing their specialties.
- **S16 — Twenty Monsters at a Wedding:** Top 20 personalities and distinctions enter the foreground; the wedding is postponed after coordinated attacks.
- **S17 — The Eclipse Court:** ranks #13–20 receive focused counter-matchup battles.
- **S18 — When the Great Lords Break:** ranks #6–12 receive showcase fights; five Crownless Kings appear.
- **S19 — Five Sovereigns Under Eclipse:** every Sovereign gets a major elemental duel; the Court’s predictive Black Sun Array activates.
- **S20 — The Sunless Emperor:** **Aurel Veyr** suppresses external elemental qi with **Eclipse Meridian**. The Top 20 adapt, Ryn reveals a second application of Still Sky, and Ryn/Lucy finally marry.

### Seasons 21–25 — The Silent Age
The oldest Black Register mystery becomes the next threat.
- **Black Register Entry I:** **Yeon Mu-gyeol — the First Silence**.
- Mu-gyeol believes cultivation itself creates permanent hierarchy and intends to sever humanity from ambient qi.
- His **Five Severed Stars** suppress broad families of elemental expression: blood/poison, storms/lightning, water, earth, and wind/pressure.
- The Top 20 are forced to train outside their strongest affinities instead of becoming one-technique characters.
- The Quiet Gate eventually reduces ambient qi enough to affect even Ryn’s released external qi.
- The final conflict is philosophical as much as physical: Lucy rejects both rule by the strong and forced equality through removing everyone’s choices.
- The Heavenly Register survives but reforms into richer capability profiles rather than pretending a single number explains every matchup.

## Power-system rules going forward
- Top 20 fighters are all genuinely monstrous. Ryn being beyond them does **not** make them fodder.
- Elements are expressions of internal qi and martial cultivation, not Western magic.
- Compatibility matters: poison, wind, sand, fire, water, lightning, metal, sound, mist, threads, body cultivation, and other affinities can create favorable or terrible matchups.
- Higher rank generally means greater overall threat, but specialized counters can create difficult fights.
- Ryn should not resolve every battlefield. Ranked fighters, Lucy, and allied factions keep independent victories.
- Ryn’s named techniques remain rare. **Still Sky** stays special instead of becoming something he uses every chapter.

## Romance rules
- Romance continues after marriage rather than becoming background decoration.
- Lucy retains full political, investigative, leadership, and martial agency.
- Ryn protects without owning; Lucy loves without controlling.
- Domestic comedy at Black Mountain remains part of the series even during large arcs.

## GitHub Pages
Static root-level `index.html`, published from **`main` / `/(root)`**. No custom CI build is required.
