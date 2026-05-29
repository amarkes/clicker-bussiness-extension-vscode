import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('clicker-business.start', () => {
		ClickerPanel.createOrShow(context.extensionUri);
	});
	context.subscriptions.push(disposable);
}

export function deactivate() {}

class ClickerPanel {
	static currentPanel: ClickerPanel | undefined;

	private readonly _panel: vscode.WebviewPanel;
	private readonly _extensionUri: vscode.Uri;

	static createOrShow(extensionUri: vscode.Uri) {
		const column = vscode.ViewColumn.One;

		if (ClickerPanel.currentPanel) {
			ClickerPanel.currentPanel._panel.reveal(column);
			return;
		}

		const panel = vscode.window.createWebviewPanel(
			'clickerBusiness',
			'Clicker Business',
			column,
			{
				enableScripts: true,
				// Permite carregar arquivos do dist do webview
				localResourceRoots: [
					vscode.Uri.joinPath(extensionUri, 'webview', 'dist'),
				],
				// Mantém o estado do jogo ao trocar de aba
				retainContextWhenHidden: true,
			}
		);

		ClickerPanel.currentPanel = new ClickerPanel(panel, extensionUri);
	}

	private constructor(panel: vscode.WebviewPanel, extensionUri: vscode.Uri) {
		this._panel = panel;
		this._extensionUri = extensionUri;

		this._panel.webview.html = this._getHtml();

		this._panel.onDidDispose(() => {
			ClickerPanel.currentPanel = undefined;
		});
	}

	private _getHtml(): string {
		const distUri = vscode.Uri.joinPath(this._extensionUri, 'webview', 'dist');
		const indexPath = path.join(distUri.fsPath, 'index.html');

		if (!fs.existsSync(indexPath)) {
			return this._getErrorHtml();
		}

		let html = fs.readFileSync(indexPath, 'utf8');

		// Reescreve todos os caminhos relativos ./assets/ para URIs válidas no webview
		html = html.replace(/(src|href)="(\.\/[^"]+)"/g, (_, attr, relativePath) => {
			const filePath = relativePath.replace('./', '');
			const uri = this._panel.webview.asWebviewUri(
				vscode.Uri.joinPath(distUri, filePath)
			);
			return `${attr}="${uri}"`;
		});

		return html;
	}

	private _getErrorHtml(): string {
		return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { background: #0d0f14; color: #f1f3f9; font-family: sans-serif;
           display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
    .box { text-align: center; }
    code { background: #1a1e28; padding: 4px 8px; border-radius: 4px; color: #51a2ff; }
  </style>
</head>
<body>
  <div class="box">
    <h2>Build não encontrado</h2>
    <p>Rode <code>npm run build</code> antes de abrir o jogo.</p>
  </div>
</body>
</html>`;
	}
}
