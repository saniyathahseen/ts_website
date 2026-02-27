# ts_website
website for promotion
netlify

## CSS variables and theming

This project centralizes visual tokens in `src/index.css` using CSS custom properties.

- `--brand-color`: primary brand accent (currently `#c48641`).
- `--brand-dark`: a darker brand tone used for emphasis.
- `--navbar-height`: runtime-updated value that keeps `body` content offset to avoid being hidden under the navbar.

Additional tokens available in `src/index.css` (used during the theme sweep):

- `--brand-color`: primary brand accent (default `#c48641`).
- `--brand-dark`: darker brand tone used for emphasis (default `#91742b`).
- `--page-footer-bg`: footer background (default `#222`).
- `--white`: page/card white (slightly warm white, default `#fbf9f8`).
- `--text-color`: neutral text used for secondary content (default `#facd9a`).
- `--error-color`: standard error color used in components (default `#c0392b`).
- `--navbar-height`: runtime-updated navbar height used to offset page content (default `100px`, updated at runtime).

When adding styles prefer referencing these tokens so color and spacing changes remain consistent and easy to update.

Pre-commit and CI checks

- A lightweight color-check script is available at `tools/check-colors.js`. It fails if hard-coded color literals (hex, rgb without alpha, or direct color keywords used in properties) are present outside `src/index.css`.
- To run locally: `npm run check-colors`.
- An example pre-commit hook is provided at `.githooks/pre-commit`. Enable it locally with:

```bash
git config core.hooksPath .githooks
```

This will run the color check and `stylelint` before commits. The CI workflow also runs the color-check step and will fail the build if new hard-coded colors are introduced.

Contributor token examples

Use these examples when adding or updating styles so the team has consistent, semantic token usage:

- Buttons & CTAs
	- Primary background: `background-color: var(--brand-color);`
	- Primary hover/active: `background-color: var(--brand-dark);`
	- Button text on brand: `color: var(--white);`

- Navigation / header
	- Navbar background (surface): `background-color: var(--white);`
	- Navbar title / active link: `color: var(--brand-color);`

- Body text and copy
	- Body copy (primary): `color: var(--text-color);`
	- Muted / secondary copy: `color: var(--on-dark-muted);` (or add a `--text-muted` token when needed)

- Cards & surfaces
	- Card background: `background: var(--white);`
	- Subtle card background: `background: var(--bg-muted);`
	- Card border: `border: 1px solid var(--border-muted);`

- Alerts and validation
	- Error text / borders: `color: var(--error-color);` or `border-color: var(--error-color);`

If you aren't sure which token to use, prefer the semantic choice (surface/text/brand) rather than matching a specific hex.

CI behavior (what runs on PR)

- Run the color-check script: `npm run check-colors` — this will fail the CI if any hard-coded colors (hex literals, rgb(...) without alpha, or CSS color keywords used in properties) appear outside `src/index.css`.
- Run `stylelint` across `src/**/*.css` and `src/**/*.module.css`.
- Run a production build (`npm run build`) to catch compile-time and bundling issues.
- Install Playwright browsers and run `tools/screenshot.js` against the built site (served on a temporary port), capturing screenshots for visual review.
- Upload the screenshots as job artifacts for reviewers to inspect.

Local checks and contribution guidance

- Run `npm run check-colors` and `npx stylelint "src/**/*.css" "src/**/*.module.css"` before opening a PR.
- Optionally enable the provided pre-commit hook so checks run automatically when you commit:

```bash
git config core.hooksPath .githooks
```

These lightweight checks help keep styling consistent and prevent accidental regressions.

The codebase is being migrated to CSS Modules. Component styles live alongside their components as `*.module.css` and are imported into the component JS files. When adding or editing styles prefer updating the centralized variables in `src/index.css` rather than sprinkling hard-coded color values.

Build: `npm run build` (create-react-app)
<!-- - Local:    http://localhost:3002        │
- Network:  http://192.168.68.106:3002  -->