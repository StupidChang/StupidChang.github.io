const path = require("path");
const WebpackObfuscator = require("webpack-obfuscator");

module.exports = {
    entry: "./index.js",  // 你的原始 JS
    output: {
        filename: "script-obfuscated.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: WebpackObfuscator.loader,
                    options: {
                        compact: true,
                        controlFlowFlattening: true,
                        stringArrayEncoding: ["base64"],
                        numbersToExpressions: true,
                        selfDefending: true,
                    },
                },
            },
        ],
    },
    mode: "production",
};
