module.exports = {
    "extends": "./node_modules/eslint-config-google/index.js",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "indent": "off",
        "object-curly-spacing": [2, "always"]
    }
};