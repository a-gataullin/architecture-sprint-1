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
            name: "profile",
            filename: 'remoteEntry.js',
            // remotes: {
            //     // "auth": "auth@http://localhost:3000/remoteEntry.js" ,        
            //     // "cards": "cards@http://localhost:3000/remoteEntry.js",
            //     // "profile": "",
            // },
            exposes: {
                './EditAvatarPopup': "./src/EditAvatarPopup.js"
            },
            shared: {
                "react": {singleton: true},
                "react-dom": {singleton: true}
            }
        }),
    ]
})