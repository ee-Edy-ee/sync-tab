// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

module.exports = {
    pwa: {
        name: "Sync-TAB",
        themeColor: "#4DBA87",
        msTileColor: "#000000",
        appleMobileWebAppCapable: "yes",
        appleMobileWebAppStatusBarStyle: "black",

        // configure the workbox plugin
        workboxPluginMode: "InjectManifest",
        workboxOptions: {
            swSrc: "src/service-worker.ts"
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
    },

    pages: {
        index: {
            entry: "src/main.ts",
            template: "public/index.html",
            filename: "index.html",
            title: "Sync TAB",
            chunks: ["chunk-vendors", "chunk-common", "index"]
        }
    }

    // configureWebpack: {
    //     devtool: "source-map"
    // }
};
