module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "parser": "babel-eslint",
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "no-console": "off",
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error", 
            (require("os").EOL === "\r\n" ? "windows" : "unix")
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ]
    },
    "overrides": [{
            "files": ["*.resolver.js"],
            "rules": {
                "no-unused-vars": "off"
            }
        }
    ]
};