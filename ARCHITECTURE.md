# The Despicable Heretic — Architecture

## Goal

Keep a very large static novel/wiki reliable as the manuscript grows beyond hundreds of chapters, without introducing a backend that the product does not need.

The project remains a static GitHub Pages application built with React, TypeScript, and Vite. Manuscript prose and canonical domain data are the source of truth. UI indexes and search/reader metadata should be generated from those sources rather than maintained independently.

## Source-of-truth hierarchy

1. **Manuscript prose** — `src/content/season-XX/`
2. **Canonical domain data** — rankings, rank history, techniques, characters, factions, villains, lore, timeline
3. **Generated metadata** — disposable build output derived from manuscript/domain data
4. **UI / reader presentation** — must never invent independent canon
5. **README / audits** — documentation mirrors canon; it does not override it

If two layers disagree, the higher layer in this list wins and the lower layer should be repaired.

## Current transition state

The repository currently contains two front-end surfaces during migration:

- **Production Pages reader:** `index.html` + `assets/reader.css` + `assets/reader.js`
- **React/Vite application:** `react-preview.html` + `src/main.tsx`

This is temporary. The production reader remains untouched until the React application has feature parity for chapter reading, historical rank badges, skill badges, bookmarks, Continue Reading, mobile navigation, and full manuscript loading.

`vite.config.ts` builds both entries so the React application can no longer silently drift or fail type-checking while the static reader remains live.

## Content architecture

### Manuscripts

- Season 1 uses `chapter-01.ts` through `chapter-10.ts`.
- Season 2 onward uses one `chapters.ts` bundle per season.
- A published season contains exactly ten chapter bodies.

### Lightweight metadata

The React wiki must not import hundreds of full prose bodies merely to display chapter cards.

`scripts/generate-manifest.mjs` reads S26+ manuscript bundles at build/dev time and creates:

`src/generated/manuscriptChapterManifest.ts`

That file contains only lightweight `Chapter` metadata such as ID, season, chapter number, title, summary, POV, and tags. `src/generated/` is ignored by Git because generated data is disposable.

The build pipeline regenerates the manifest automatically before development and production builds.

### Future reader loading

The target React reader should load prose lazily by requested season/chapter rather than bundling the complete novel into the initial JavaScript payload.

## Canonical data

Canonical facts should live in typed domain/source modules, not repeated inside presentation code.

Important current sources:

- `src/features/rankings/top20.ts`
- `src/features/rankings/history.ts`
- `src/features/techniques/data.ts`
- `src/features/characters/data.ts`
- `src/features/factions/data.ts`
- `src/features/villains/data.ts`
- `src/features/lore/data.ts`
- `src/features/timeline/data.ts`
- `src/domain/seasonTitles.json`

As migration continues, domain-only data may move from `features/` into `src/domain/`, while UI components remain under `features/`.

## Browser storage contract

Reading progress must preserve these keys unless a versioned migration is deliberately introduced:

- `dhBookmarksV2`
- `dhLastReadV2`

The target React reader should access these through one storage service rather than direct `localStorage` calls spread across components.

## Quality gate

`.github/workflows/quality.yml` validates every push to `main` / `architecture-v2` and every pull request into `main`.

The gate performs:

1. dependency installation
2. manuscript/content validation
3. canon/integration validation
4. standalone reader JavaScript syntax validation
5. ESLint
6. TypeScript type-check
7. Vite multi-entry build

A future deployment workflow should depend on this gate so invalid code cannot become the live GitHub Pages reader.

## Automated invariants

`scripts/validate-content.mjs` currently verifies:

- contiguous season directories
- exactly ten chapters per published season
- expected chapter-number keys
- total chapter count
- no Rhen / Sera / Pale Orchid cross-novel contamination
- sealed/Ultimate names only appear in specifically approved untouched/sealed reminders

`scripts/validate-canon.mjs` currently verifies:

- exactly twenty unique current Top-20 entries
- ranks 1 through 20 are complete and unique
- the Ultimate remains sealed
- Unwritten Law remains sealed
- reader / README counts match manuscript count
- bookmark/Continue Reading storage keys remain present

These validators should expand as the story grows rather than relying on manual memory.

## Target architecture

```text
MANUSCRIPTS + CANONICAL DOMAIN DATA
              |
              v
      validation / generation
              |
              v
        lightweight manifest
              |
              v
        React reader + wiki
              |
              v
       TypeScript / lint / tests
              |
              v
           Vite build
              |
              v
         GitHub Pages deploy
```

## Migration phases

### Phase 1 — Safety foundation

- content validator
- canon validator
- reader JS syntax check
- fixed ESLint configuration
- TypeScript/Vite CI build
- build both current reader and React preview

### Phase 2 — Single metadata source

- generate chapter metadata from manuscripts
- stop importing S26+ prose into the React chapter index
- progressively move duplicated reader canon into typed domain modules

### Phase 3 — React reader parity

Before replacing the current production reader, React must support:

- all published seasons/chapters
- lazy prose loading
- historical rank badges by chapter
- deceased vs retired rank state
- Ryn/Lucy dialogue styling
- technique tier badges
- bookmark persistence using existing V2 keys
- Continue Reading using existing V2 key
- season filtering
- search
- mobile navigation
- Previous / Next chapter navigation
- fault-tolerant loading

### Phase 4 — Production cutover

Only after Phase 3 is validated should `index.html` become the React production entry and the legacy `assets/reader.js` / `assets/reader.css` implementation be retired.

Do not delete the production reader during migration.

## Backend policy

No backend is required for the current product. GitHub Pages is appropriate while the reader remains a public static novel/wiki with device-local reading state.

A server/database should be introduced only if the product later requires features such as authenticated accounts, cross-device bookmark sync, private drafts, comments, collaborative editing, or server-side services.
