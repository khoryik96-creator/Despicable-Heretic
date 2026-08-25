# The Despicable Heretic Wiki

## 📖 Read the live wiki

**https://khoryik96-creator.github.io/Despicable-Heretic/**

A modular TypeScript light-novel wiki and expandable reader for **The Despicable Heretic**.

## Current canon
- **Male lead:** Ryn — *The Despicable Heretic*.
- **Female lead:** Princess Lucy.
- **Relationship:** proposal at the end of Season 15; long engagement through Seasons 16–24; **married in Season 25**.
- **Current manuscript:** **25 seasons × 10 chapters = 250 full prose chapters**.
- **Ryn:** Black Register Entry III, UNRANKABLE, qualitatively outside the formal Heavenly Register rather than ordinary Rank #1.
- **Seo Taewon:** remains alive and **Heavenly Register Rank #1** throughout all published seasons.
- **Major ranked death:** Kassian Ro dies as Rank #5 in Season 19 after meaningful buildup and a final civilian-protection sacrifice.
- **Season 20 succession:** Sael Vardon becomes #5; the surviving #7–#20 move up one place; previously introduced Rank #21 Tessan Ri enters at #20.

## Novel reader
- Every chapter is expandable full prose.
- **Ryn** dialogue is sky-blue/teal.
- **Lucy** dialogue is rose-pink.
- Named martial arts are highlighted in gold.
- Ranked fighters display persistent rank badges beside full names and normal shortened-name references.
- Historical rank badges follow the story era rather than rewriting old chapters when the Register changes.
- Persistent chapter bookmarks and **Continue Reading** use browser local storage and keep the existing storage keys.
- Season 1 uses individual manuscript modules.
- Seasons 2–25 use one `chapters.ts` manuscript bundle per season.
- Metadata is split across `data.ts`, `data-06-15.ts`, and `data-16-25.ts`.

## Current Heavenly Register Top 20
This is the **post-Season-20 succession roster**. Rank remains useful shorthand, but the Pavilion now also records matchup information, affinity, range, resilience, adaptability, team utility, and dependence on ambient qi.

### Top Five
1. **Seo Taewon — White Falcon Sovereign** — wind / pressure — *Sky Has No Walls, Falcon Crossing Ten Miles, Pressure Burial*.
2. **Veyra Nox — Viridian Serpent Sovereign** — poison / blood — *Seven Organ Silence, Venom Scripture: Living Antidote, Black Pulse Contagion*.
3. **Dae Kiryun — Stormbreak Sovereign** — lightning / magnetism — *Thunder Before Sound, Iron-Sky Discharge, Hundred Lightning Steps*.
4. **Maren Sol — Abyssal Tide Sovereign** — water / pressure / cold — *Ocean Without Shore, Crushing Depth, Countercurrent Lock*.
5. **Sael Vardon — Dune Regent** — sand / earth — *Dune Kingdom, Burial Under Nine Sands*.

> **Former #5:** Kassian Ro — Ash-Furnace Sovereign — deceased in Season 19. Sael explicitly does not replace Kassian as a person or adopt a borrowed fire/Sovereign identity.

### Ranks #6–#10
6. **Orun Bale — Resonance Warden** — sound / vibration.
7. **Lysandra Keir — Dawn Edge** — wind / sword qi.
8. **Toren Vahl — Iron Orbit** — metal / magnetism.
9. **Nyra Sen — Silent Loom** — venom / silk.
10. **Boran Dusk — Stone Maw Lord** — earth / body cultivation.

### Ranks #11–#20
11. **Elian Mor — Mirage Glass Lord** — mist / illusion.
12. **Veska Ren — Puppet Wire Lord** — thread / remote control.
13. **Kaio Draven — River Fang Lord** — water / beast-form qi.
14. **Seline Arq — Ember Mercy Lord** — fire / healing.
15. **Corven Ash — Hollow Reed Lord** — concealment / shadow.
16. **Tavia Moss — Thorn Regent** — wood / plant qi.
17. **Rook Arden — World-Weight Lord** — heavy qi / pressure.
18. **Joren Quill — Broken Tempo Lord** — pure sword qi / broken rhythm.
19. **Luma Vey — Storm Lantern Lord** — water / lightning.
20. **Tessan Ri — Flow-Script Lord** — formation ink / conductive qi.

Canonical current roster: `src/features/rankings/top20.ts`  
Canonical historical succession: `src/features/rankings/history.ts`

## Story progression
### Seasons 1–5 — Opening Saga
Lucy climbs the wrong mountain, discovers Ryn is the infamous Despicable Heretic, enters his life, drags him into the imperial and martial worlds, defends him at his Orthodox trial, calls Black Mountain home, and finally kisses him.

### Seasons 6–10 — World Beyond the Register
Seo Taewon enters the story, Lucy dismantles Wei Cang’s conspiracy, Vagrant City proves the Register is incomplete, and Black Mountain becomes a free community. Ryn and Lucy openly become a couple and say they love each other.

### Seasons 11–15 — Hollow Heaven War
The Six Ancient Houses return. Lucy leads a broad coalition, the ranked world remains genuinely formidable, Ryn reveals **Still Sky**, and Black Register Entry II **Mo Yejun — the Empty Throne** becomes Ryn’s ideological opposite. The saga ends with Ryn proposing to Lucy.

### Seasons 16–18 — People Before Rankings
The engagement is allowed to exist instead of immediately becoming a wedding. Lucy’s family meets Ryn, then Lucy meets the ranked fighters as **people before boss cards**: their civilian responsibilities, personalities, habits, failures, and philosophies are established before the Eclipse Court exploits their public identities.

### Seasons 19–20 — Eclipse Court and the Furnace Succession
Five Crownless Kings are deliberately hostile matchups for the Top Five. Veyra, Kiryun, Maren, Kassian, and Taewon receive substantial battles rather than quick showcases. Kassian defeats the Ash King but later dies protecting populated villages from Aurel Veyr’s heat network. Season 20 gives his death consequences: funeral, rank succession, Tessan’s promotion, a rebuilt Top 20, the final Black Sun conflict, and Aurel’s death. Ryn and Lucy **do not marry here**; they leave the date blank and write **WHEN READY**.

### Seasons 21–24 — The Silent Age
Black Register Entry I **Yeon Mu-gyeol — the First Silence** is revealed as a former reformer who gave up after decades of failed attempts to limit martial abuse. His five Severed Stars have names and personal histories: **Neris Kaun, Rath Odan, Caldrin Mott, Hessa Dorn, and Varo Kest**. The Quiet Gate turns the conflict into a civilization problem involving medicine, food, roads, water, transport, law, and infrastructure. Lucy answers with the Counter-Register reforms while Ryn confronts Mu-gyeol physically and philosophically. Mu-gyeol and his students eventually help dismantle the system they built rather than being reduced to anonymous defeated bosses.

### Season 25 — When Ready
Six months after the Quiet Gate closes, Lucy and Ryn choose their own autumn date. The entire season is the wedding payoff: invitations, family, Black Mountain preparations, Kassian’s empty chair, Ryn struggling with vows, Lucy protecting her identity, the ceremony, full vows, reception, and their first ordinary morning as husband and wife.

## Power-system rules going forward
- Top-ranked fighters are genuinely monstrous. Ryn being beyond them does **not** make them fodder.
- Elements are expressions of internal qi and martial cultivation, not Western magic.
- Compatibility matters. A lower-ranked specialist can create an awful matchup without automatically becoming stronger overall.
- Defeat does not automatically equal rank loss; the Register evaluates total capability, which is why Seo Taewon remains #1 after hostile suppression/severance losses.
- Ranked fighters can die, including Top Five, if the story earns it. Deaths create succession and consequences rather than being reset away.
- New replacements should be introduced before promotion whenever possible, as Tessan Ri is before entering the Top 20.
- Ryn should not resolve every battlefield. Lucy, ranked fighters, engineers, physicians, factions, and ordinary people keep independent victories.
- Ryn’s named techniques remain rare. **Still Sky** stays exceptional.

## Character-introduction rules
- Important named fighters should be introduced as people before being used as matchup pieces.
- Establish at least one of: civilian role, personality, relationship, belief, flaw, habit, or prior consequence before a major battle depends on them.
- Avoid sequences that read like “name → rank → element → feat → next name.”
- Reintroduce returning major characters naturally after long absences.

## Romance rules
- Romance remains present during major arcs rather than disappearing between milestones.
- Engagement is not treated as a countdown timer; Seasons 16–24 deliberately let Ryn and Lucy live through it.
- Lucy retains full political, investigative, leadership, and martial agency before and after marriage.
- Ryn protects without owning; Lucy loves without controlling.
- Domestic comedy at Black Mountain remains part of the series even during large arcs.
- The Season 25 wedding is a relationship payoff, not a post-battle checkbox.

## GitHub Pages
Static root-level `index.html`, published from **`main` / `/(root)`**. No custom CI build is required.
