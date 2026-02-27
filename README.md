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

The codebase is being migrated to CSS Modules. Component styles live alongside their components as `*.module.css` and are imported into the component JS files. When adding or editing styles prefer updating the centralized variables in `src/index.css` rather than sprinkling hard-coded color values.

Build: `npm run build` (create-react-app)
<!-- - Local:    http://localhost:3002        │
- Network:  http://192.168.68.106:3002  -->