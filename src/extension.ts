import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand("extension.showWebView", () => {
		let myWebView = vscode.window.createWebviewPanel(
			"myWebView",
			"My Web View",
			{ preserveFocus: true, viewColumn: vscode.ViewColumn.Two},
			{ enableScripts: true }
		);

		vscode.commands.executeCommand("workbench.view.extension.myWebView");
		myWebView.webview.html = getWebviewContent();
	});
	context.subscriptions.push(disposable);
}

function getWebviewContent() {
	return `
    <div>Hello World</div>
  `;
}
