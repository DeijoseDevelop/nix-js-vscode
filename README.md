# Nix.js VS Code Toolkit

Editor tooling for [Nix.js](https://www.npmjs.com/package/@deijose/nix-js): syntax highlighting for `html` tagged templates, event binding autocomplete, diagnostics, quick fixes, formatting, and snippets.

## Architecture

This extension is a **thin LSP client** that launches [`@deijose/nix-js-language-server`](https://www.npmjs.com/package/@deijose/nix-js-language-server). All editor intelligence (diagnostics, completion, hover, code actions, formatting) lives in the LSP server, which also powers Neovim, Helix, Zed, and Emacs.

```
vscode-nix-js (this extension)
├── extension.js          ← thin LSP client (~95 lines)
├── syntaxes/*.json       ← TextMate grammars (VS Code native)
├── snippets/             ← code snippets
└── @deijose/nix-js-language-server  ← LSP server (bundled in .vsix)
```

## Features

- HTML highlighting inside `html` tagged template literals
- Event bindings highlighted as first-class attributes (`@click`, `@input`, `@submit`, ...)
- Event modifier highlighting with dedicated scopes (`@click.prevent.stop`, `@keydown.enter`)
- Template expressions (`${...}`) highlighted inside templates
- Nested templates support (`html` inside `${...}`)
- Autocomplete for common Nix event bindings and directive attributes inside `html` templates
- Chained modifier autocomplete after `.` with key-aware suggestions for keyboard events
- Diagnostics for invalid modifier combinations (`.passive` + `.prevent`, unknown modifiers, duplicates, key modifiers on non-key events, non-canonical order)
- Quick fixes for modifier diagnostics (remove duplicates, resolve conflicts, replace unknowns, normalize order)
- Hover help for modifiers (`.prevent`, `.stop`, `.enter`, etc.)
- Document formatting for `html` templates
- Configurable template tags (`nixjs.tags`)
- Command to inspect active TextMate scopes (`Nix.js: Inspect Template Scopes`)
- Snippets for common Nix patterns (component, effect cleanup, computed, router, store)
- Works in `.ts`, `.tsx`, `.js`, `.jsx`

## Quick Example

```ts
function App() {
  const count = signal(0);

  return html`
    <p>Count: ${() => count.value}</p>
    <button @click=${() => count.value++}>+1</button>
  `;
}
```

## Snippets

- `nix:component` — function component with signal + html template
- `nix:effect-cleanup` — effect with listener cleanup
- `nix:computed` — computed value
- `nix:router` — basic router setup
- `nix:store` — store with actions

## Settings

| Setting | Default | Description |
|---|---|---|
| `nixjs.tags` | `["html"]` | Template tag names where Nix autocomplete should be active |
| `nixjs.completions.enableEventBindings` | `true` | Enable `@event` completion items |
| `nixjs.completions.enableModifierSuggestions` | `true` | Enable `.modifier` suggestions |
| `nixjs.diagnostics.enable` | `true` | Enable diagnostics for invalid modifier combinations |
| `nixjs.diagnostics.enableStyleHints` | `true` | Enable canonical modifier order hints |
| `nixjs.format.enable` | `true` | Enable the `html` template formatter |
| `nixjs.format.formatOnSave` | `true` | Format templates on save |

## Commands

- `Nix.js: Inspect Template Scopes` — inspect active TextMate scopes
- `Nix.js: Format html`` Templates` — format all templates in the current file

## Development

```bash
npm install
npm test
npx vsce package
```

Install the generated `.vsix` locally:

```bash
code --install-extension vscode-nix-js-0.6.0.vsix --force
```

## Other Editors

The same LSP server works in:

- **Neovim**: `:MasonInstall nix-js-language-server`
- **Helix**: configure `languages.toml`
- **Zed**: configure `settings.json`
- **Emacs**: via eglot

For CI formatting, use [`prettier-plugin-nix-js`](https://www.npmjs.com/package/prettier-plugin-nix-js).

## Links

- npm: [www.npmjs.com/package/@deijose/nix-js](https://www.npmjs.com/package/@deijose/nix-js)
- LSP: [www.npmjs.com/package/@deijose/nix-js-language-server](https://www.npmjs.com/package/@deijose/nix-js-language-server)
- GitHub: [github.com/DeijoseDevelop/nix-js](https://github.com/DeijoseDevelop/nix-js)
- Website: [nix-js.dev](https://nix-js.dev/)

## License

MIT
