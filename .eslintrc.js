module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
  },
  "globals": {
    "afterEach": true,
    "beforeEach": true,
    "describe": true,
    "expect": true,
    "it": true,
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
    }
  },
  "ecmaFeatures": {
    "arrowFunctions": true,
    "binaryLiterals": true,
    "blockBindings": true,
    "classes": true,
    "defaultParams": true,
    "destructuring": true,
    "forOf": true,
    "generators": true,
    "modules": true,
    "objectLiteralComputedProperties": true,
    "objectLiteralDuplicateProperties": true,
    "objectLiteralShorthandMethods": true,
    "objectLiteralShorthandProperties": true,
    "octalLiterals": true,
    "regexUFlag": true,
    "regexYFlag": true,
    "spread": true,
    "superInFunctions": true,
    "templateStrings": true,
    "unicodeCodePointEscapes": true,
    "globalReturn": true,
    "jsx": true
  },
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
  }
};
