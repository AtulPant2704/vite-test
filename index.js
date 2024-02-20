const { noRestrictedGlobals } = require("./utility");

module.exports = {
  env: {
    // "es2021": true,
    browser: true, // Browser global variables like `window` etc.
    commonjs: true, // CommonJS global variables and CommonJS scoping.Allows require, exports and module.
    es6: true, // Enable all ECMAScript 6 features except for modules.
    node: true, // Defines things like process.env when generating through node
  },
  extends: [
    "react-app", //eslint-config-react-app (built-in CRA)
    "prettier", // eslint-config-prettier
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "react", // eslint-plugin-react
    "prettier", // eslint-plugin-prettier,
    "import",
    "react-hooks", // eslint-plugin-react-hooks
    "simple-import-sort", // eslint-plugin-simple-import-sort
  ],
  rules: {
    "no-debugger": "warn",
    "no-unused-vars": "off",
    "no-console": "error",
    "no-use-before-define": "error",
    "prefer-const": "error",
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-explicit-any": "error",
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "prettier/prettier": [
      // "prettier/prettier" rule from "eslint-plugin-prettier"
      "error", // violation of the rule will cause an error
      {
        useTabs: false,
        tabWidth: 2,
        printWidth: 100,
        bracketSameLine: true,
      },
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "off",
      {
        allowExpressions: true,
      },
    ],
    // "import/order": [
    //   "off",
    //   {
    //     groups: ["builtin", "external", "parent", "internal", "sibling"],
    //     "newlines-between": "always",
    //     alphabetize: {
    //       order: "asc",
    //     },
    //   },
    // ],
    "import/no-cycle": "error",
    "import/no-useless-path-segments": "error",
    "import/no-extraneous-dependencies": "off",
    "import/first": "error",
    "import/no-duplicates": "error",
    "import/newline-after-import": "error",
    "no-restricted-globals": noRestrictedGlobals,
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
  overrides: [
    {
      files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
      rules: {
        "simple-import-sort/imports": [
          "error",
          {
            groups: [
              // react imports
              // next imports
              // Packages starting with a character
              // Packages starting with `@`
              // Packages starting with `~`
              ["^react$", "^next", "^[a-z]", "^@", "^~"],
              // contexts, components
              ["^contexts/", "^components/"],
              // src, utils, constants,...
              ["^(src|modules|utils|constants|services)/"],
              [
                // Imports starting with `../`
                "^\\.\\.(?!/?$)",
                "^\\.\\./?$",
                // Imports starting with `./`
                "^\\./(?=.*/)(?!/?$)",
                "^\\.(?!/?$)",
                "^\\./?$",
              ],
              // Style imports
              ["^.+\\.s?css$"],
              // image imports
              [".(gif|jpe?g|svg|png)$"],
            ],
          },
        ],
      },
    },
  ],
};
