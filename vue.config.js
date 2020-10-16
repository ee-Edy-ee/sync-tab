// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
    pwa: {
        workboxPluginMode: "InjectManifest",
        name: "Sync-tab"
    },

    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "scss",
            patterns: [
                path.resolve(__dirname, "./src/styles/setup/_functions.scss"),
                path.resolve(__dirname, "./src/styles/setup/_variables.scss"),
                path.resolve(__dirname, "./src/styles/setup/_mixins.scss"),
                path.resolve(__dirname, "./src/styles/setup/_print.scss"),
                path.resolve(__dirname, "./src/styles/setup/_rfs.scss"),
                path.resolve(__dirname, "./src/styles/setup/_utilities.scss")
            ]
        }
    }
};
