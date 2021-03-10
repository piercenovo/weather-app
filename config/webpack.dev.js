const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { HotModuleReplacementPlugin } = require("webpack");
const { default: merge } = require("webpack-merge");
const common = require("./webpack.common");

/** @type {import('webpack').Configuration} */
module.exports = merge(common, {
    mode: "development",
    target: "web",
    devtool: "eval-source-map",

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "[name].bundle.js",
        chunkFilename: "[name].chunk.js",
    },

    module: {
        rules: [
            {
                test: /.(s[ac]|c)ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
        ],
    },

    plugins: [
        new HotModuleReplacementPlugin(), 
        new ReactRefreshWebpackPlugin()
    ],

    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        port: 3000,
        open: "chrome",
        hot: true,
    },

    

    

});