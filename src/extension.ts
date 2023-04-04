import * as vscode from "vscode";
import * as path from "path";

export function activate(context: vscode.ExtensionContext) {
	// register command handlers

	let myWebView = vscode.window.createWebviewPanel(
		"myWebView",
		"My Web View",
		vscode.ViewColumn.One,
		{ enableScripts: true }
	);

	myWebView.onDidChangeViewState(e => {
		myWebView.iconPath = vscode.Uri.file(
			path.join(context.extensionPath, 'resources','icon.png')
		);
	});

	if (!myWebView) {
		console.log("No Web View");
	}
	console.log("Web View");
	console.log(myWebView);


	myWebView.webview.html = getWebviewContent();

	const showWebViewCommand = vscode.commands.registerCommand(
		"extension.showWebView",
		() => {
			myWebView.reveal(vscode.ViewColumn.One);
		}
	);

	context.subscriptions.push(showWebViewCommand);
}

function getWebviewContent() {
	return `
    <div>Hello World</div>
  `;
}