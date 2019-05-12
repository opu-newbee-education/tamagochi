
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const babelConfig = {
    presets: [
        [
            "@babel/preset-env",
            {
                targets: {
                    chrome: "73"
                },
                debug: true,
                // "targets": "> 0.25%, not dead"
            }
        ],
    ],
    plugins: [
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-class-properties"
    ]
};

module.exports = (env) => {
    return {
        mode: "development",

        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            port: 3000,
            hot: true,
        },

        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: babelConfig,
                    }
                },
                {
                    test: /\.s?css$/,
                    exclude: /node_modules/,
                    use: [
                        { loader: "style-loader", options: { sourceMap: true } },
                        { loader: "css-loader", options: { sourceMap: true, modules: true, localIdentName: "[path][name]__[local]--[hash:base64:2]" } },
                        { loader: "sass-loader", options: { sourceMap: true } },
                    ]
                }
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html",
                inject: true,
            }),
        ]
    };
};