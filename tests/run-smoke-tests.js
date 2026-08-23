/**
 * run-smoke-tests.js — Basic smoke tests for the refactored extension.
 *
 * Verifies that:
 * 1. extension.js loads without error
 * 2. The LSP server module resolves
 * 3. The TextMate grammars are valid JSON
 * 4. The snippets file is valid JSON
 * 5. package.json has the correct structure
 */

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");

async function run() {
    // 1. extension.js exists and has correct structure
    const extPath = path.join(ROOT, "extension.js");
    assert.ok(fs.existsSync(extPath), "extension.js should exist");
    const extContent = fs.readFileSync(extPath, "utf8");
    assert.ok(extContent.includes("LanguageClient"), "extension.js should use LanguageClient");
    assert.ok(extContent.includes("activate"), "extension.js should export activate");
    assert.ok(extContent.includes("deactivate"), "extension.js should export deactivate");
    assert.ok(extContent.includes("nix-js-language-server"), "extension.js should reference the LSP server");
    console.log("✓ extension.js structure correct");

    // 2. LSP server module resolves (bundled in server/ directory)
    const serverPath = path.join(ROOT, "server", "server.js");
    assert.ok(fs.existsSync(serverPath), `LSP server should exist at ${serverPath}`);
    console.log("✓ LSP server module resolves:", path.relative(ROOT, serverPath));

    // 3. TextMate grammars are valid JSON
    const syntaxesDir = path.join(ROOT, "syntaxes");
    const grammars = fs.readdirSync(syntaxesDir).filter(f => f.endsWith(".json"));
    assert.ok(grammars.length > 0, "Should have at least one grammar file");

    for (const grammar of grammars) {
        const grammarPath = path.join(syntaxesDir, grammar);
        const content = fs.readFileSync(grammarPath, "utf8");
        assert.doesNotThrow(() => JSON.parse(content), `${grammar} should be valid JSON`);
    }
    console.log(`✓ ${grammars.length} grammar(s) are valid JSON`);

    // 4. Snippets file is valid JSON
    const snippetsPath = path.join(ROOT, "snippets", "nix-js.code-snippets");
    const snippets = JSON.parse(fs.readFileSync(snippetsPath, "utf8"));
    assert.ok(Object.keys(snippets).length > 0, "Should have at least one snippet");
    console.log(`✓ Snippets file valid with ${Object.keys(snippets).length} snippet(s)`);

    // 5. package.json structure
    const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, "package.json"), "utf8"));
    assert.ok(pkg.dependencies["vscode-languageclient"], "Should depend on vscode-languageclient");
    assert.ok(pkg.dependencies["vscode-languageserver"], "Should depend on vscode-languageserver");
    assert.ok(pkg.dependencies["vscode-languageserver-textdocument"], "Should depend on vscode-languageserver-textdocument");
    assert.ok(!pkg.dependencies["typescript-lit-html-plugin"], "Should NOT depend on typescript-lit-html-plugin");
    assert.ok(pkg.main === "./extension.js", "main should be extension.js");
    assert.ok(pkg.contributes.grammars.length >= 3, "Should have at least 3 grammars");
    assert.ok(pkg.contributes.snippets.length >= 4, "Should have snippets for 4 languages");
    console.log("✓ package.json structure correct");

    // 6. No .vsix files in repo
    const vsixFiles = fs.readdirSync(ROOT).filter(f => f.endsWith(".vsix"));
    assert.equal(vsixFiles.length, 0, "Should have no .vsix files in repo");
    console.log("✓ No .vsix files in repo");

    // 7. Old embedded logic files are gone
    assert.ok(!fs.existsSync(path.join(ROOT, "formatter.js")), "formatter.js should be deleted");
    assert.ok(!fs.existsSync(path.join(ROOT, "event-modifiers.js")), "event-modifiers.js should be deleted");
    assert.ok(!fs.existsSync(path.join(ROOT, "template-tags.js")), "template-tags.js should be deleted");
    assert.ok(!fs.existsSync(path.join(ROOT, "syntaxes", "nix-template.json")), "nix-template.json should be deleted");
    assert.ok(!fs.existsSync(path.join(ROOT, "syntaxes", "nixjs-svg.tmLanguage.json")), "nixjs-svg.tmLanguage.json should be deleted");
    console.log("✓ Old embedded logic files removed");

    console.log("\nAll smoke tests passed.");
}

run().catch((error) => {
    console.error(error);
    process.exit(1);
});
