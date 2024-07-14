import { ModuleFederationPlugin } from '@module-federation/enhanced/webpack';

module.exports = {
    // optimization: {
    //     // Only needed to bypass a temporary bug
    //     runtimeChunk: false
    // },
    plugins: [
        new ModuleFederationPlugin({
            name: "host",
            // remotes: {
            //     // "auth": "auth@http://localhost:3000/remoteEntry.js" ,        
            //     // "cards": "cards@http://localhost:3000/remoteEntry.js",
            //     // "profile": "",
            // },
            // exposes: {
            //     './EditAvatarPopup': "../../profile-microfrontend/EditAvatarPopup.js"
            // },
            remotes: {
                remoteApp: "remoteApp@http://localhost:3001/remoteEntry.js"
            },
            shared: {
                "react": {singleton: true},
                "react-dom": {singleton: true}
            }
        }),
    ]
}