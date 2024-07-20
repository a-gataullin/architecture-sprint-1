const ModuleFederationPlugin = require ('webpack').container.ModuleFederationPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const commonConfig = require('../webpack.common.js');
const deps = require('./package.json').dependencies;

module.exports = merge(commonConfig, {
    devServer: {
        port: 3001,
    },
    optimization: {
        // Only needed to bypass a temporary bug
        runtimeChunk: false
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "auth",
            filename: 'remoteEntry.js',
            exposes: {
                './InfoTooltip': "./src/InfoTooltip.js",
                './Login': "./src/Login.js",
                './Register': "./src/Register.js"
            },
            shared: {
                "react": {singleton: true},
                "react-dom": {singleton: true}
            }
        }),
    ]
})