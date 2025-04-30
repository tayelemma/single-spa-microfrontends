const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
    const originName = "react-single-spa-mf";
    const defalultConfig = singleSpaDefaults({
        orgName,
        projectName: "microfrontend-root",
        webpackConfigEnv,
        argv,
        disableHtmlGeneration: true,
    });

    return merge(
        defalultConfig,
        {
            plugins: [
                new HtmlWebpackPlugin({
                    inject: false,
                    template: "src/index.ejs",
                    templateParameters: {
                        isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
                        originName
                    }
                })
            ]
        }
    )
}