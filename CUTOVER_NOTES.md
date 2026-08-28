# React Reader Pages Cutover

This repository currently keeps the legacy reader source at `index.html` while the React reader is built from `react-preview.html`.

`npm run build:pages` performs the production transformation only inside `dist/`:

- verifies `dist/index.html` is still the legacy source shell,
- verifies the React bundle exists,
- preserves the legacy shell as `dist/legacy-source-shell.html`,
- replaces only `dist/index.html` with the React reader entry,
- writes `.nojekyll`,
- verifies the final root no longer references `assets/reader.js`.

The Quality Gate browser-tests the exact production root artifact plus the legacy fallback before merge.

The `Deploy React Reader to Pages` workflow is manual-only and main-only. Before the first deployment, GitHub Pages must be configured to use **GitHub Actions** as its source in repository Settings → Pages. Until that setting is changed and the manual deploy workflow is run, the existing branch-root GitHub Pages deployment remains the public reader.

Rollback options after cutover:

1. Immediate reader fallback: open `/Despicable-Heretic/legacy-source-shell.html`.
2. Deployment rollback: switch Pages source back to branch deployment if necessary.
3. Code rollback: revert the cutover merge commit; the source `index.html` remains the legacy reader throughout this phase.
