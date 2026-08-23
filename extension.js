const vscode = require("vscode");
const {
    LanguageClient,
    TransportKind
} = require("vscode-languageclient/node");

let client;

function activate(context) {
    // -----------------------------------------------------------------------
    // LSP client — launches @deijose/nix-js-language-server
    //
    // The server provides: diagnostics, completion, hover, code actions,
    // and document formatting. The extension is just a thin client that
    // forwards VS Code requests to the server over IPC.
    // -----------------------------------------------------------------------
    let serverModule;
    try {
        serverModule = require.resolve(
            "@deijose/nix-js-language-server/dist/server.js"
        );
    } catch {
        // Fallback: bundled server in extension directory
        serverModule = require.resolve("./server/server.js");
    }

    const serverOptions = {
        run: { module: serverModule, transport: TransportKind.ipc },
        debug: {
            module: serverModule,
            transport: TransportKind.ipc,
            options: { execArgv: ["--inspect=6009"] }
        }
    };

    const clientOptions = {
        documentSelector: [
            { scheme: "file", language: "javascript" },
            { scheme: "file", language: "typescript" },
            { scheme: "file", language: "javascriptreact" },
            { scheme: "file", language: "typescriptreact" },
            { scheme: "untitled", language: "javascript" },
            { scheme: "untitled", language: "typescript" },
            { scheme: "untitled", language: "javascriptreact" },
            { scheme: "untitled", language: "typescriptreact" }
        ],
        synchronize: {
            configurationSection: "nixjs"
        }
    };

    client = new LanguageClient(
        "nixjs",
        "Nix.js Language Server",
        serverOptions,
        clientOptions
    );

    client.start();
    context.subscriptions.push({ dispose: () => client.stop() });

    // -----------------------------------------------------------------------
    // Commands
    // -----------------------------------------------------------------------
    context.subscriptions.push(
        vscode.commands.registerCommand("nixjs.inspectScopes", async () => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) {
                vscode.window.showInformationMessage(
                    "Open an editor and place the cursor in a template first."
                );
                return;
            }
            try {
                await vscode.commands.executeCommand("editor.action.inspectTMScopes");
            } catch {
                vscode.window.showInformationMessage(
                    "Scope inspector command is not available in this VS Code build."
                );
            }
        }),

        vscode.commands.registerCommand("nixjs.formatTemplates", async () => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) {
                vscode.window.showInformationMessage(
                    "Open a JS/TS file with html`` templates first."
                );
                return;
            }
            await vscode.commands.executeCommand("editor.action.formatDocument");
        })
    );
}

function deactivate() {
    if (!client) return undefined;
    return client.stop();
}

module.exports = { activate, deactivate };
