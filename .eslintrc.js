module.exports = {
  root: true,
  extends: '@react-native-community',
  "plugins": [
    "react-native" // add eslint-plugin-react-native as a plugin for ESLint
  ],
  "env": {
    "react-native/react-native": true // whitelist all browser-like globals
  },
  rules: {
    // previous rules here
    "react-native/no-unused-styles": 2, // disallow unused styles
    "react-native/no-inline-styles": 2, // disallow styles declared within the component itself
    "react-native/no-color-literals": 2, // enforces variable names to be used for storing colors
  },
};
