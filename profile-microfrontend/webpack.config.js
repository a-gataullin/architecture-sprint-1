import { ModuleFederationPlugin } from '@module-federation/enhanced/webpack';

module.exports = {
    devServer: {
        port: 3001,
    },
    optimization: {
        // Only needed to bypass a temporary bug
        runtimeChunk: false
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "remoteApp",
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
}