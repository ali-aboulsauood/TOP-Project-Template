const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackFontPreloadPlugin = require("webpack-font-preload-plugin");

module.exports = {
    mode: "development",

    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),

        clean: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
        
        new WebpackFontPreloadPlugin({
            // Add/Remove extensions in the array that is the value of `extensions` as needed.
            extensions: ["woff", "woff2"],

            crossorigin: true,

            loadType: "preload",
        }),
    ],

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },

            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },

            {
                // Add/Remove extensions in the regular expression that is the value of `test` as needed.
                test: /\.(png|jpeg|jpg|svg)$/i,
                type: "asset/resource",
            },

            {
                // Add/Remove extensions in the regular expression that is the value of `test` as needed.
                test: /\.(woff|woff2)$/i,
                type: 'asset/resource',
            },
        ],
    },

    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"],
    },
};
