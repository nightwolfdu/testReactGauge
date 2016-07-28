module.exports = {
    "extends": [
        "eslint:recommended",
        "airbnb"
    ],
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": ["error", 4],
     	"func-names": "off",
        "no-underscore-dangle": ["error", { "allowAfterThis": true }],
        "import/no-unresolved": ["error", { ignore: ["react"] }],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "comma-dangle": ["error", "never"]
    },
    "env": {
        "mocha": true
    }
};