const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

// Comentario con JSDoc
/** @type {import('webpack').Configuration} */
module.exports = {
    entry: "./src/index.js",

    output: {
        path: path.resolve(__dirname, '../dist'),
        assetModuleFilename: "images/[name].[hash:8][ext][query]",
        publicPath: "",
    },
	
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
				type: "asset",
            }
        ]
    },
	
	plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
			title: 'weather-app',
			filename: "index.html",
			inject: 'body',
        })
    ],
	
    resolve: {
        extensions: [".js", ".json", ".jsx"],
    },
	
    
}