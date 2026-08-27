# The Despicable Heretic — S55 Reader + Canon Audit

Audit date: 2026-08-27

## Scope

This audit cross-checks the completed S1–55 manuscript, current/historical Heavenly Register data, Ryn technique data, Open Gate canon, the modular React/Vite wiki, and the root GitHub Pages reader.

## Confirmed current canon

- 55 published seasons / 550 full prose chapters.
- Ryn remains UNRANKABLE / Black Register Entry III / Mountain Teacher.
- Lucy is married to Ryn, First Steward of Open Gate, and current Heavenly Register #5.
- Current #1 is Veyra Nox after Seo Taewon dies in S52.
- Current Top-20 Open Gate members: Lucy #5, Meira #8, Iseul #18, Sorin #19, Kesh #20.
- Teren Ashval (former #4) and Oris Thane (former #9) are restored/unranked Open Gate apex figures.
- Dalen Korr and Rook Arden are alive but retired from active ranked combat.
- Deceased ranked figures include Kassian #5, Orun #6, Toren #7, Maren #4, and Seo Taewon #1.

## Ryn power-state lock through S55

Formal arsenal count: 14 arts/states.

Revealed Supreme arts:
1. No Heaven Above Me — S34.
2. The World Beneath Falling Blossoms — S54 — Domain.
3. One Blossom Buries Heaven — S55 — Offense.

Still locked:
- Unwritten Law — Supreme — SEALED.
- The Last Quiet Beneath Heaven — Ultimate — HARD LOCKED / unreleased.

Spring of the Open Gate is Transcended, not Supreme. Locked properties include absolute poison immunity for Ryn, essentially instant self-recovery, continuous ally refinement/strengthening, reciprocal growth that continues refining Ryn, and permanent sakura manifestation.

Open Gate Sanctuary is NOT a separate formal technique. It is the automatic absolute barrier effect attached to Ryn's active healing lineage. While the healing state remains active, the Sanctuary cannot be penetrated. True resurrection remains impossible.

## Concrete defects found and repaired in this audit cycle

1. **Canonical Kassian history overlap**
   - `src/features/rankings/history.ts` previously allowed Kassian to appear both active #5 and deceased #5† during S20C1–C2.
   - Active era now ends S19C10; deceased #5† begins S20C1.

2. **S52 extraction timing mismatch**
   - S52C9 established a 23-second Ryn extraction gap.
   - S52C10 previously used 21 seconds.
   - C10 now consistently says 23 seconds.

3. **S53 Open Gate Top-20 count**
   - S53C8 incorrectly described four current Top-20 Open Gate fighters and omitted Iseul.
   - Corrected to five: Lucy, Meira, Iseul, Sorin, Kesh.

4. **Supreme Domain typing**
   - Technique schema did not include `Domain` despite The World Beneath Falling Blossoms being a Supreme Domain.
   - `Domain` is now a supported technique category and the technique data uses it.

5. **Open Gate Sanctuary false formal-skill badge**
   - The earlier static reader treated Open Gate Sanctuary as its own formal Transcended technique.
   - Canon records it as an automatic healing effect instead; the formal arsenal remains 14.

6. **Stale modular React/Vite wiki**
   - The secondary app previously reflected only the opening seasons in Chapters/search/overview.
   - `src/features/chapters/allData.ts` now unifies all 55 seasons and the modular Chapters, search, overview, site config and technique pages are S55-aware.

7. **Root GitHub Pages reader parser failure**
   - The old monolithic `index.html` contained a fatal JavaScript syntax error in the inline historical-rank helper. This explained missing navigation/filter buttons and non-responsive Continue Reading.
   - Root `index.html` has now been replaced by a small stable shell.
   - Presentation moved to `assets/reader.css`.
   - Reader behavior moved to `assets/reader.js`, whose source was built from a locally syntax-checked script.
   - Existing localStorage keys remain `dhBookmarksV2` and `dhLastReadV2`.

## Reader regression checklist

Every future reader update should verify:

- Overview/Chapters/Bookmarks/Top 20/Characters/Timeline navigation renders.
- Mobile navigation remains visible below 700px.
- Continue Reading opens the saved `dhLastReadV2` chapter; with no history it starts at S1C1 once the index is ready.
- Bookmarks persist under `dhBookmarksV2`.
- Filters expose S1 through the current season.
- S1 uses individual chapter modules.
- S2+ body loading uses season `chapters.ts` bundles.
- S26+ cards can be derived directly from manuscript bundles.
- Historical badges use chapter-era ranks; death uses † and retirement uses RET.
- Ryn/Lucy dialogue markers preserve their dedicated colors.
- Open Gate Sanctuary is described as a healing effect, not counted as a fifteenth formal technique.
- Unwritten Law remains sealed unless explicitly approved.
- The Ultimate remains unreleased unless explicitly approved.

## Source-of-truth order

For disagreements, use this order:

1. Completed manuscript prose for the chapter in question.
2. `src/features/rankings/history.ts` for historical ranks.
3. `src/features/rankings/top20.ts` for current ranks.
4. `src/features/techniques/data.ts` for Ryn's current formal arsenal.
5. `src/features/characters/data.ts`, factions, lore, villains, and timeline for supporting wiki canon.
6. README / audit documents as summaries only.

## Environment limitation

The audit container could run `node --check` on the replacement reader source, but its installed Chromium process could not successfully launch/navigate even against localhost, so a genuine browser-render smoke test could not be completed inside the container. The repository source and reader split were verified directly through GitHub after commit. The next user-side refresh is therefore the final rendered-Pages confirmation step.
