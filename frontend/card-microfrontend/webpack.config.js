const ModuleFederationPlugin = require ('webpack').container.ModuleFederationPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const commonConfig = require('../webpack.common.js');
const deps = require('./package.json').dependencies;

module.exports = merge(commonConfig, {
    devServer: {
        port: 3003,
    },
    optimization: {
        // Only needed to bypass a temporary bug
        runtimeChunk: false
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "card",
            filename: 'remoteEntry.js',
            exposes: {
                './AddPlacePopup': "./src/AddPlacePopup.js",
                './Card': "./src/Card.js",
                './ImagePopup': "./src/ImagePopup.js"
            },
            shared: {
                "react": {singleton: true},
                "react-dom": {singleton: true}
            }
        }),
    ]
})