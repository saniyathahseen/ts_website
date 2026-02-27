# ts_website
website for promotion
netlify

## CSS variables and theming

This project centralizes visual tokens in `src/index.css` using CSS custom properties.

- `--brand-color`: primary brand accent (currently `#c48641`).
- `--brand-dark`: a darker brand tone used for emphasis.
- `--navbar-height`: runtime-updated value that keeps `body` content offset to avoid being hidden under the navbar.

The codebase is being migrated to CSS Modules. Component styles live alongside their components as `*.module.css` and are imported into the component JS files. When adding or editing styles prefer updating the centralized variables in `src/index.css` rather than sprinkling hard-coded color values.

Build: `npm run build` (create-react-app)
