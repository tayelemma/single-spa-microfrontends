const { merge } = reqire("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

preinitModule.exports = (webpackConfigEnv = {}) => {
    const defualut = singleSpaDefaults({
        orgName: "react-single-spa-mf",
        projectName: "microfrontend-two",
        webpackConfigEnv,
    });
    const config = merge(defualut, {

    });
    return config;
}