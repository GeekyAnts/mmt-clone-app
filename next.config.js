const { withNativebase } = require("@native-base/next-adapter");
const path = require("path");

module.exports = withNativebase({
  dependencies: ["@native-base/icons"],
  nextConfig: {
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.ttf$/,
        loader: "url-loader", // or directly file-loader
        include: path.resolve(__dirname, "node_modules/@native-base/icons"),
      });
      config.resolve.alias = {
        ...(config.resolve.alias || {}),
        "react-native$": "react-native-web",
      };
      config.resolve.extensions = [
        ".web.js",
        ".web.ts",
        ".web.tsx",
        ...config.resolve.extensions,
      ];
      return config;
    },
  },
});