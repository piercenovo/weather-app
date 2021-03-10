const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

/** @type {import('webpack').Configuration} */
module.exports = merge(common, {
    mode: "production",
    target: "browserslist",
    devtool: "source-map",

    output: {
        filename: "[name].[contenthash:8].bundle.js",
        chunkFilename: "[name].[contenthash:8].chunk.js",
    },

    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },

    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: "" },
                    },
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
        ]
    },

    plugins: [
        new MiniCssExtractPlugin(
            {
                filename: "[name].[contenthash:8].css",
            })
    ],
});
