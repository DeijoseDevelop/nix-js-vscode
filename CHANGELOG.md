# Changelog

## 0.6.3 — Rewrite formatter (tree-based, JSX-style)

- **Formatter rewritten**: uses a proper AST/tree instead of flat token stream
- Block elements with element children → always multi-line (like Prettier JSX)
- Inline elements mixed with text → grouped on one line (greedy packing at MAX_WIDTH)
- Sibling elements with only whitespace between them → each on its own line
- Single-line templates that fit → kept inline (e.g. `html\`<span>text</span>\``)
- Long attributes → wrapped to multiple lines with proper indentation
- `<pre>`, `<script>`, `<style>` → content preserved as-is
- Multi-line expressions → preserved with relative indentation
- Tags preserve original case (supports custom elements like `<MyComponent>`)
- Updated LSP dependency to `@deijose/nix-js-language-server@^1.0.2`

## 0.6.2 — Fix completion with nested template literals

- Fixed: completion stopped working when a `html\`\`` template contained nested template literals inside `${...}` expressions (e.g. `style=${() => \`color: red\`}`)
- The template detector now uses `findTemplateRegions` to correctly identify the outer `html` template region even when inner backticks are present
- Removed `diagnosticProvider` capability that caused "Unhandled method textDocument/diagnostic" errors — the server uses push diagnostics (`sendDiagnostics`) which is the correct model
- Updated LSP dependency to `@deijose/nix-js-language-server@^1.0.1`

## 0.6.1 — Fix LSP transport (stdio)

- Fixed: LSP server was using IPC transport which failed with ESM modules
- Changed to stdio transport — the standard for LSP servers
- Completion, diagnostics, hover, code actions, and formatting now work correctly

## 0.6.0 — LSP Refactor (Thin Client)

- **Breaking**: Extension is now a thin LSP client that launches `@deijose/nix-js-language-server`
- All editor intelligence (diagnostics, completion, hover, code actions, formatting) now lives in the LSP server
- Removed embedded logic: `formatter.js`, `event-modifiers.js`, `template-tags.js` (1,128 lines removed)
- Removed `typescript-lit-html-plugin` dependency
- Removed SVG grammar (`nixjs-svg.tmLanguage.json`) — `svg` is not a runtime tagged template
- Removed dead grammar `nix-template.json`
- Removed 31 `.vsix` files from repo
- `nixjs.tags` default narrowed to `["html"]` (the only runtime tagged template)
- Extension size reduced from ~1,700 lines to ~95 lines
- Same LSP server powers Neovim, Helix, Zed, Emacs, and CI (Prettier plugin)

## 0.5.2 — Formatter Fixes (Idempotency, Void Elements, Block Expressions)

- Fixed self-close detection: `<br>`, `<img>`, `<input>` etc. no longer accumulate stray slashes (`<br / / / / />`) across saves; all void elements now normalize to `<br />` style consistently
- Fixed wrap rule for tags with multiple attributes: now follows Prettier-style behavior — single-line for ≤2 attrs that fit in 80 cols, multi-line otherwise (3+ attrs always wrap, with closing `>` / `/>` on its own line aligned to opening `<`)
- Fixed inline element promotion: `<button>`, `<a>`, `<span>`, etc. with 3+ attributes now wrap correctly to multi-line instead of getting `.join(" ")`'d into a single line with stray spaces
- Fixed block expression detection: arrow functions (`${() => …}`, `${async (x) => …}`), ternaries containing nested `html\`…\``, and any expression embedding tagged-template literals are now recognized as block-level and emitted on their own indented lines
- Fixed reindentation of nested templates: when an expression embeds an `html\`…\``, the inner template's relative indentation is now preserved (uniform shift instead of per-line strip)
- Fixed wrap-decision idempotency: tag-length measurement now uses content length, not absolute column, so re-formatting an already-formatted file no longer flips between single-line and multi-line states
- Filtered stray `/` tokens from `parseAttributes` output to defend against pre-corrupted input

## 0.3.2 — Hardening Pass (A1/A2/A3)

- Added smoke test script against real docs file (`../nix-js-docs/src/main.ts`) via `npm run test:smoke`
- Added manual smoke execution checklist and evidence template (`tests/SMOKE_TESTS.md`)
- Added stress grammar assertions using `tests/fixtures/stress-templates.ts` (200+ lines)
- Added canonical modifier-order diagnostics + quick fix coverage in runtime tests
- Added optional style-hint toggle in settings (`nixjs.diagnostics.enableStyleHints`)

## 0.3.1 — Release Visibility Patch

- Published the latest modifier-intelligence and quick-fix adjustments under a new patch version to avoid install cache ambiguity with 0.3.0
- No breaking changes relative to 0.3.0 feature set

## 0.3.0 — Modifier-Aware Editor Intelligence

- Added chained event modifier completion (`@click.prevent`, `@keydown.enter`) with keyboard-aware suggestions
- Added diagnostics for modifier issues: unknown modifiers, duplicates, `.passive` + `.prevent` conflict, and key modifiers on non-key events
- Added quick fixes for modifier diagnostics (dedupe, conflict resolution, unknown modifier replacement/removal)
- Added hover docs for event modifiers inside templates
- Split TextMate scopes for event base and modifiers for clearer syntax coloring
- Added runtime helper module for event modifier parsing/analysis and expanded runtime tests
- Expanded grammar fixtures/tests to validate modifier tokenization behavior

## 0.2.10 — Directive Set Correction

- Removed assumed non-official directives from editor tooling (`if`, `for`, `key`)
- Kept and validated Nix directive set used in templates: `ref`, `show`, `hide`
- Updated fixtures and grammar tests to reflect real directive usage

## 0.2.9 — Tooling Completeness Update

- Added fixture-driven grammar tests for dynamic arrow expressions, attribute injection, and SVG templates
- Added runtime tests for configurable template tags utilities
- Added dedicated `svg` tagged-template grammar (`inline.html.nixjs.svg`)
- Added configurable template tags setting (`nixjs.tags`) with runtime autocomplete support
- Added TypeScript language service integration via `typescript-lit-html-plugin`
- Added command `Nix.js: Inspect Template Scopes` to speed up grammar diagnostics

## 0.2.8 — Expression-Safe Attribute Highlighting

- Added JavaScript template substitution fallback in all Nix grammars (`source.js#template-substitution-element`) to improve consistency in JS/TS projects
- Tightened Nix attribute tokenization so `@event` and directive matches require valid HTML attribute shape (`name=`), reducing false positives inside dynamic expressions
- Improved parser isolation between HTML attribute highlighting and complex `${...}` function bodies

## 0.2.7 — Precision Attribute Injection Pass

- Moved Nix-specific attribute highlighting (`@event`, `ref|show|if|for|key`) to a dedicated tag-level injection grammar
- Kept the main tagged-template grammar closer to lit-html baseline to reduce interference with complex `${...}` expressions
- Improved stability in nested dynamic templates by limiting custom token rules to HTML tag contexts only

## 0.2.6 — Full Lit-Style Injection Architecture

- Aligned Nix template grammar architecture with lit-html (main grammar plus string/style injection grammars)
- Added dedicated interpolation injections for HTML tag and CSS property contexts using `source.ts#template-substitution-element`
- Expanded grammar injection targets to include `source.js.jsx` and `text.html.basic` for better nested-template consistency
- Improved embedded language mapping to keep HTML parsing stable across complex dynamic expressions

## 0.2.5 — Interpolation Engine Switched To Proven Lit Strategy

- Replaced custom `${...}` parser with the same stable interpolation strategy used by mature lit-html tooling
- Interpolations now rely on `source.ts#template-substitution-element` for full JS/TS expression support
- Fixed cases where arrow functions and nested template strings inside interpolations caused broken HTML highlighting

## 0.2.4 — Full Dynamic Expression Parser Stabilization

- Reworked `${...}` parsing to be fully dynamic and independent of specific array helpers like `map`
- Added nested balancing for braces `{}`, parentheses `()`, and brackets `[]` inside template expressions
- Added safe parsing for line/block comments and string literals to avoid accidental expression termination
- Fixed highlight bleed where malformed interpolation state could break coloring in following HTML sections

## 0.2.3 — Dynamic Interpolation Stability

- Fixed premature interpolation closing in dynamic expressions inside `html` templates
- Improved support for nested arrow functions and nested `${...}` expressions, regardless of whether they are used in `map`, `filter`, loops, or plain function calls
- Prevented tokenization bleed that caused subsequent markup to lose proper highlighting

## 0.2.2 — Nested Arrow Function Highlighting Fix

- Fixed broken highlighting in nested cases like `pages.map(p => html`...`)` inside `${...}`
- Fixed template truncation when arrow functions include template strings (for example class builders with backticks)
- Improved interpolation parser stability so surrounding HTML markup no longer loses coloring

## 0.2.1 — Template Expression Highlighting Fix

- Fixed highlighting issues for arrow functions inside `${...}` within `html` tagged templates
- Improved handling of nested template strings inside template expressions, for example an interpolation that returns a nested template string
- Prevented premature closing of outer `html` template while parsing nested expressions

## 0.2.0 — VS Code Toolkit Phase 1

- Rebranded extension as Nix.js VS Code Toolkit
- Improved grammar injection for `.ts`, `.tsx`, `.js`, and `.jsx`
- Added event binding tokenization (`@click`, `@input`, ...)
- Added directive attribute tokenization (`ref`, `show`, `if`, `for`, `key`)
- Added context-aware autocomplete for event bindings and directives inside `html` tagged templates
- Added snippets for common Nix patterns (component, effect cleanup, computed, router, store)
- Added extension setting: `nixjs.completions.enableEventBindings`

## 0.1.0 — Initial Release

- HTML syntax highlighting inside `html` tagged template literals
- Event binding highlighting (`@click`, `@input`, etc.)
- Template expression highlighting (`${...}`)
- Support for `.ts`, `.tsx`, `.js`, `.jsx` files
