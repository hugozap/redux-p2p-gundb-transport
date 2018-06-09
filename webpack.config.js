var path = require("path");
var webpack = require("webpack");

module.exports = {
	mode: "production",
	entry: ["./node.js", "./browser.js"],
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "main.bundle.js",
		library: "ReduxP2PGunTransport",
		libraryTarget: "umd"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				query: {
					presets: ["env"]
				}
			}
		]
	},
	stats: {
		colors: true
	},
	devtool: "source-map"
};
