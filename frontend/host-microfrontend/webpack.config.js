const ModuleFederationPlugin = require ('webpack').container.ModuleFederationPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const commonConfig = require('../webpack.common.js');
const deps = require('./package.json').dependencies;

module.exports = merge(commonConfig, {
    plugins: [
        new ModuleFederationPlugin({
            name: "host",
            filename: "remoteEntry.js",
            remotes: {
                auth: "auth@http://localhost:3001/remoteEntry.js",
                profile: "profile@http://localhost:3002/remoteEntry.js",
                card: "card@http://localhost:3003/remoteEntry.js"
            },
            shared: [
                {
                    "react": {singleton: true},
                    "react-dom": {singleton: true},
                },
                './src/contexts/CurrentUserContext.js',
                './src/components/PopupWithForm.js'
            ]
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico',
            filename: './index.html',
            manifest: "./public/manifest.json"
        })
    ]
})