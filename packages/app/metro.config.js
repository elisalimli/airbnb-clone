/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require("path");
const { createMetroConfiguration } = require("expo-yarn-workspaces");

const watchFolders = [
  path.resolve(__dirname, "../..", "node_modules"),
  // add news when you add new package
  path.resolve(path.join(__dirname, "../controller")),
];

const expoYarnWorkspaces = createMetroConfiguration(__dirname);

module.exports = {
  ...{
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
    watchFolders,
  },
  ...expoYarnWorkspaces,
};
