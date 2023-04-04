import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
	// register command handlers

	let myWebView = vscode.window.createWebviewPanel(
		"myWebView",
		"My Web View",
		vscode.ViewColumn.One,
		{}
	);

	myWebView.webview.html = getWebviewContent();

}

function getWebviewContent() {
	return `
    <div>Hello World</div>
  `;
}