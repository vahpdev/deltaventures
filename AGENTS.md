# AGENTS.md — Delta Ventures

Guidelines for agentic coding assistants working in this repository.

## Project overview

Static marketing website for Delta Ventures. Uses Tailwind CSS v4 with CSS-first configuration, vanilla JavaScript in `src/index.js`, and plain HTML pages.

- Tailwind source: `src/assets/styles/input.css`
- Compiled Tailwind output: `src/assets/styles/output.css` (checked into repo)
- Entry HTML files: `index.html`, `conocenos.html`
- Shared HTML partials: `src/html/*.html`
- JavaScript: `src/index.js`
- Assets: `src/assets/fonts/`, `src/assets/logos/`

## Build / dev / lint / test commands

All commands run from the repository root.

| Command                                                                                        | Purpose                                                                                                                                          |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `npm install`                                                                                  | Install dependencies.                                                                                                                            |
| `npm start`                                                                                    | Serve the site locally with `http-server` on port `8080`.                                                                                        |
| `npx @tailwindcss/cli -i src/assets/styles/input.css -o src/assets/styles/output.css --minify` | Build production CSS.                                                                                                                            |
| `npx @tailwindcss/cli -i src/assets/styles/input.css -o src/assets/styles/output.css --watch`  | Watch and rebuild CSS during development.                                                                                                        |
| `npx prettier --check .`                                                                       | Check formatting for all tracked files.                                                                                                          |
| `npx prettier --write .`                                                                       | Format all tracked files.                                                                                                                        |
| `npx prettier --write <path>`                                                                  | Format a single file or directory.                                                                                                               |
| `npm test`                                                                                     | **Currently not configured.** The script exits with an error. If you add tests, update `package.json` and document the single-test command here. |

### Running a single test

No test framework is installed. If you introduce one, add a single-test command following the framework's convention, for example:

- **Vitest**: `npx vitest run src/path/to/file.test.js`
- **Jest**: `npx jest src/path/to/file.test.js`
- **Playwright**: `npx playwright test tests/file.spec.js`

Run `npm test` only after a test runner is configured and the `test` script is updated.

## Code style guidelines

### Formatting

- Format code with **Prettier 3** using the bundled `prettier-plugin-tailwindcss`.
- There is no custom Prettier config file; rely on Prettier defaults.
- Run `npx prettier --check .` before finishing work.
- HTML and CSS are formatted by Prettier. JavaScript in `src/index.js` is formatted by Prettier as plain JS.

### HTML

- Use `<!doctype html>` lowercase declaration.
- Set page `lang` attribute (`en` currently used).
- Use 2-space indentation.
- Keep attribute wrapping consistent; Prettier handles this automatically.
- Link assets with root-relative paths where possible (e.g., `/src/assets/logos/dv-green-white-logo.svg`).
- Shared components are stored as partials in `src/html/` and copied into top-level pages; keep them in sync when editing navigation, forms, or other shared markup.

### CSS / Tailwind

- **Tailwind v4 is CSS-first.** Custom theme values live in `src/assets/styles/input.css` inside `@theme`, not in a JS config file.
- Custom color variables use `oklch()` values: e.g., `--color-green-main: oklch(0.3356 0.057 189.49);`.
- Custom fonts are declared with `@font-face` in `input.css`.
- Component-layer styles go in `@layer components` in `input.css`.
- Always rebuild `output.css` after editing `input.css`:
  ```bash
  npx @tailwindcss/cli -i src/assets/styles/input.css -o src/assets/styles/output.css --minify
  ```
- Do not hand-edit `output.css`; it is generated.

### JavaScript

- Keep scripts in `src/index.js` or add new `.js` files under `src/` and reference them from HTML.
- Use `const` and `let`; avoid `var`.
- Prefer arrow functions for short callbacks.
- Guard DOM lookups before attaching listeners (`if (element) { ... }`).
- Use semantic, camelCase variable names.
- Avoid duplicate event listener attachments and duplicate DOM queries; cache elements in constants.
- Remove temporary listeners when menus/modals close to avoid leaks.
- Use strict equality (`===` and `!==`).
- Keep functions small and focused.

### Naming conventions

- Files/directories: lowercase with hyphens (`lead-capture.html`, `delta-form.html`).
- JavaScript variables/functions: camelCase.
- CSS custom classes: BEM-style is acceptable for component layers (e.g., `.card__content`, `.card__front`).
- Tailwind theme keys: kebab-case (e.g., `--color-green-main`, `--font-primary`).

### Error handling

- Validate that DOM elements exist before using them.
- Keep user-facing error messaging simple and in Spanish where appropriate.
- For form validation, prevent default submission, validate inputs, and provide inline feedback.

### Git

- Do not commit secrets, API keys, or environment files.
- Commit `output.css` after rebuilding so the deployed site reflects style changes.
- Keep `package-lock.json` in version control.

## Existing AI coding rules

- **Cursor rules:** None found (no `.cursor/rules/` directory or `.cursorrules` file).
- **GitHub Copilot instructions:** None found (no `.github/copilot-instructions.md`).

If any of those files are added later, merge their guidance into this document.
