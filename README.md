# The Despicable Heretic Wiki

## 📖 Read the live wiki

**https://khoryik96-creator.github.io/Despicable-Heretic/**

A modular TypeScript light-novel wiki and expandable reader for **The Despicable Heretic**.

## Current canon
- **Male lead:** Ryn — *The Despicable Heretic*.
- **Female lead:** Princess Lucy.
- **Relationship:** proposal at the end of Season 15; long engagement through Seasons 16–24; **married in Season 25**.
- **Current manuscript:** **45 seasons × 10 chapters = 450 full prose chapters**.
- **Ryn:** Black Register Entry III, UNRANKABLE, qualitatively outside the formal Heavenly Register rather than ordinary Rank #1.
- **Seo Taewon:** remains alive and **Heavenly Register Rank #1** throughout all published seasons.
- **Open Gate:** founded by Ryn and Lucy; Ryn is **Mountain Teacher**, Lucy is **First Steward**.
- **World Meridian:** survives the S45 crisis under the **Meridian Compact**, which explicitly prevents any one nation, sect, guild, Register, or Open Gate itself from owning it.

## Novel reader
- Every chapter is expandable full prose.
- **Ryn** dialogue is sky-blue/teal.
- **Lucy** dialogue is rose-pink.
- Ryn’s formal skills show persistent tier markers whenever named in prose: **◆ Named · ✦ Transcended · ✧ Supreme · ★ Ultimate**.
- Ranked fighters display persistent rank badges beside full names and normal shortened-name references.
- Historical badges follow the rank actually held in that chapter, including deaths and later promotions.
- Persistent chapter bookmarks and **Continue Reading** retain the existing browser local-storage keys.
- Season 1 uses individual manuscript modules.
- Seasons 2–45 use one `chapters.ts` manuscript bundle per season.
- S26–45 chapter cards are derived directly from manuscript files so a missing metadata export cannot hide a completed season from the reader.

## Current Heavenly Register Top 20
This is the **post-Season-43 succession roster**. Rank remains useful shorthand, but the Pavilion also records matchup information, range, resilience, adaptability, team utility, and dependence on ambient qi.

### Top Five
1. **Seo Taewon — White Falcon Sovereign** — wind / pressure.
2. **Veyra Nox — Viridian Serpent Sovereign** — poison / blood.
3. **Dae Kiryun — Stormbreak Sovereign** — lightning / magnetism.
4. **Sael Vardon — Dune Regent** — sand / earth.
5. **Lysandra Keir — Dawn Edge** — wind / sword qi.

### Ranks #6–#10
6. **Nyra Sen — Silent Loom** — venom / silk.
7. **Boran Dusk — Stone Maw Lord** — earth / body cultivation.
8. **Elian Mor — Mirage Glass Lord** — mist / illusion.
9. **Veska Ren — Puppet Wire Lord** — thread / remote control.
10. **Kaio Draven — River Fang Lord** — water / beast-form qi.

### Ranks #11–#20
11. **Seline Arq — Ember Mercy Lord** — fire / healing.
12. **Corven Ash — Hollow Reed Lord** — concealment / shadow.
13. **Tavia Moss — Thorn Regent** — wood / plant qi.
14. **Rook Arden — World-Weight Lord** — heavy qi / pressure.
15. **Joren Quill — Broken Tempo Lord** — pure sword qi / broken rhythm.
16. **Luma Vey — Storm Lantern Lord** — water / lightning.
17. **Tessan Ri — Flow-Script Lord** — formation ink / conductive qi.
18. **Dalen Korr — Anchor Chain Lord** — force transfer / chain qi.
19. **Iseul Venn — Echo Mercy Lord** — reflected qi / delayed impact.
20. **Sorin Vale — Crossroad Lord** — pure qi / tactical field control.

### Major former Top-20 deaths
- **Kassian Ro — former #5 / Ash-Furnace Sovereign** — dies in S19 saving populated villages from the Eclipse heat catastrophe.
- **Orun Bale — #6 at death / Resonance Warden** — dies in S29 preserving Azure Dragon evacuation routes.
- **Toren Vahl — #7 at death / Iron Orbit** — dies in S33 containing a cascading Concord relay failure.
- **Maren Sol — #4 at death / Abyssal Tide Sovereign** — dies in S42 holding a World Meridian pressure rupture long enough for roughly 2.7 million people to evacuate.

Canonical current roster: `src/features/rankings/top20.ts`  
Canonical historical succession: `src/features/rankings/history.ts`

## Ryn’s formal arsenal
Ryn still has exactly **10 formal skills**. Existing arts may deepen, gain movements, or promote tier; this is preferred over endless new technique spam.

Current state after S45:
1. **Returning Breath of the Mountain ✦ Transcended** — evolved into **Hundred Living Breaths**, allowing large-scale simultaneous stabilization/healing. Still cannot resurrect the dead.
2. **Empty-Hand Measure ✦ Transcended** — evolved into **Measure Before Contact**, reading technique structure before physical contact.
3. **Step Between Footfalls ◆ Named** — revealed; develops limited shared-interval application without tier promotion.
4. **Still Sky ✦ Transcended** — develops **Living Exemption**, allowing precise selection of what may continue moving.
5. **Horizon Without Distance ✦ Transcended** — revealed; develops **Shared Passage**, temporarily making impossible distance traversable for others.
6. **Ten Thousand Roads Return ✦ Transcended** — develops **One Road Home**, allowing returned force to be routed toward a chosen safe destination.
7. **Unbroken Vessel ✦ Transcended** — develops **Inner World**, a closed internal circulation that no longer depends on ambient qi while active.
8. **No Heaven Above Me ✧ Supreme** — **the only revealed Supreme**, first revealed in S34.
9. **Unwritten Law ✧ Supreme** — **SEALED**. Do not reveal without explicit approval.
10. **The Last Quiet Beneath Heaven ★ Ultimate** — **HARD LOCKED**. Do not reveal, use, or disclose its true effect without explicit approval.

By S45 Ryn also develops **Confluence**, the ability to operate several mastered arts together without treating it as an eleventh formal technique.

## Open Gate structure
Open Gate is a real martial institution, but its design intentionally prevents raw strength from automatically becoming political authority.

### Founding authority
- **Mountain Teacher — Ryn:** martial doctrine, foundations, training standards, existential defense.
- **First Steward — Lucy:** diplomacy, finance, discipline, recruitment, branch charters, logistics, law, and administration.

### Four Great Halls
- **Mountain Hall** — cultivation, combat, martial foundations.
- **Wayfinder Hall** — formations, logistics, rescue, engineering, movement.
- **Mercy Hall** — medicine, healing, civilian protection.
- **Steward Hall** — intelligence, strategy, law, diplomacy, command.

### Disciple progression
**Guest Disciple → Outer Gate Disciple → Inner Gate Disciple → Core Gate Disciple**.

Leadership/elite roles are separate from student progression:
- **Gate Warden** — elite operational responsibility.
- **Gatekeeper** — may establish and lead an authorized Open Gate branch elsewhere.
- **Hall Master** — leads one of the Four Great Halls.

### Nine Gate Warden Seats
The Warden seats are functional, **not ranked by strength**:
**Road · Wall · Hand · Eye · Hearth · River · Seal · Mercy · Empty Gate**.

By S45, Open Gate has earned wardens including Sorin Vale (**Empty Gate**), Iseul Venn (**Mercy**), Nemea Cors (**Hearth**), Mira Veyl (**Eye**), and Kesh Ardan (**Hand**). Ivara Pell becomes the first **Gatekeeper** and establishes the first permanent foreign branch in Varkesh.

Open Gate’s defining doctrine remains: **no inherited answer; understand the question**. Ryn teaches principles rather than copying his personal arts into disciples.

## Story progression
### Seasons 1–15 — Black Mountain to Hollow Heaven
Lucy climbs the wrong mountain, discovers Ryn’s identity, builds a life with him, becomes a major political strategist, encounters the limits of the Heavenly Register, defeats information conspiracies, helps form Black Mountain’s free community, and eventually leads the coalition against Hollow Heaven. Ryn reveals **Still Sky** and proposes at the end of S15.

### Seasons 16–25 — Eclipse Court, Silent Age, and Marriage
The Top 20 are reintroduced as people before combat pieces. Kassian dies, the Register undergoes its first major on-page succession, the Eclipse Court and Black Sun fall, and Yeon Mu-gyeol’s Silent Age forces the world to confront dependence on cultivation infrastructure. Lucy answers with reform rather than abolition. Ryn and Lucy deliberately wait through all of it and finally marry in S25.

### Seasons 26–35 — The War Beyond the Register
The wider world opens. Arclune’s **Iron Concord Guild** invades with Banner Legions, War Crowns, logistics, engineers, and linked cultivation warfare. The Pavilion Master’s old contingency pact becomes the real betrayal behind the invasion. Azure Dragon Hall falls militarily; Jade Moon dissolves through collaboration and civil fracture. Orun and later Toren die. Ryn and Lucy found **Open Gate** because the continent can no longer depend on famous elites arriving in time. The Guild War ends only after Lucy dismantles the strategic system around Cyran Vol and Ryn defeats him without slaughtering linked soldiers. **No Heaven Above Me ✧ Supreme** is the only Supreme revealed.

### Seasons 36–40 — Open Gate and the Seven Thrones
Open Gate receives tens of thousands of applicants and formalizes its constitution, Four Halls, disciple hierarchy, and dual leadership. The northern continent **Varkesh** is introduced through its Twelve War Hosts and Seven Thrones. Lucy discovers Kaor Ren has manipulated Throne succession around ancient World Meridian junctions. Ryn’s Empty-Hand Measure evolves to Transcended. Black Mountain hosts the first intercontinental martial summit, where the **Restoration Mandate** attempts to use fear of institutional collapse to rebuild the old Orthodox order.

### Seasons 41–45 — Empty Thrones and the World Meridian War
Open Gate survives its first real internal trust crisis and creates the Nine Warden Seats. Maren #4 dies holding a Meridian pressure rupture; the Register deliberately leaves #4 vacant before the S43 succession promotes Sael and eventually places Sorin Vale at #20. Ryn’s grief makes him overprotective until Lucy forces him to confront the contradiction between love and ownership. Open Gate’s students then fight independently against the Thrones; Taewon defeats Seyra Khann and remains #1; Han Rook dies protecting others while explicitly wanting to live. In S45, Kaor attempts forced worldwide qi equalization. Ryn solves the World Meridian crisis by combining evolved Transcended arts rather than revealing another Supreme or the Ultimate, while Lucy creates the **Meridian Compact** and refuses ownership even for Open Gate.

## Power-system and writing rules
- Top-ranked fighters are genuinely monstrous. Ryn being beyond them does **not** make them fodder.
- Elements are expressions of internal qi and martial cultivation, not Western magic.
- Compatibility matters. A lower-ranked specialist can create an awful matchup without automatically becoming stronger overall.
- Defeat does not automatically equal rank loss; the Register evaluates total capability.
- Ranked fighters can die, including Top Five, if the story earns it. Deaths create vacancies, succession, grief, and institutional consequences rather than resets.
- New replacements should be introduced before promotion whenever possible.
- Ryn should not resolve every battlefield. Lucy, ranked fighters, Open Gate, engineers, physicians, factions, and ordinary people retain independent victories.
- Fast pace means strong forward momentum, **not** compressed summary prose.
- Important named fighters should be introduced through personality, responsibility, relationship, belief, flaw, habit, or consequence before the story depends on them as a matchup piece.
- Ryn’s skill growth should usually deepen existing arts rather than continuously adding new named techniques.
- No second Supreme and no Ultimate without explicit approval.

## Romance rules
- Romance remains present during major arcs rather than disappearing between milestones.
- Lucy retains full political, investigative, leadership, and martial agency after marriage.
- Ryn protects without owning; Lucy loves without controlling.
- Their marriage develops into comfortable domestic partnership and humor rather than becoming narratively “finished.”
- The S43 conflict over Ryn’s overprotection is a core application of their relationship philosophy.

## GitHub Pages
Static root-level `index.html`, published from **`main` / `/(root)`**. The live reader currently targets **45 seasons / 450 chapters** and dynamically derives S26–45 cards from the manuscript bundles.
