// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
    pwa: {
        name: "Sync-tab",
        workboxPluginMode: "InjectManifest",
        workboxOptions: {
            swSrc: "src/service-worker.js"
        }
    },

    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "scss",
            patterns: [
                path.resolve(__dirname, "./src/styles/setup/_functions.scss"),
                path.resolve(__dirname, "./src/styles/setup/_variables.scss"),
                path.resolve(__dirname, "./src/styles/setup/_mixins.scss"),
                path.resolve(__dirname, "./src/styles/setup/_helpers.scss"),
                path.resolve(__dirname, "./src/styles/setup/_utilities.scss")
            ]
        }
    }

    // configureWebpack: {
    //     devtool: "source-map"
    // }
};
