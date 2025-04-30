const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv) => {
    const defalultConfig = singleSpaDefaults({
        orgName: "react-single-spa-mf",
        projectName: "microfrontend-one",
        webpackConfigEnv
    });
    const exRegx = [/^rxjs\/?.*$/];
    return merge(defalultConfig, {
        exRegx,
    })
}