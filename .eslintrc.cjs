module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: [
    "react-refresh",
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
    // "prettier/prettier": [
    //   // "prettier/prettier" rule from "eslint-plugin-prettier"
    //   "error", // violation of the rule will cause an error
    //   {
    //     useTabs: false,
    //     tabWidth: 2,
    //     printWidth: 100,
    //     bracketSameLine: true,
    //   },
    // ],
    "@typescript-eslint/explicit-function-return-type": [
      "off",
      {
        allowExpressions: true,
      },
    ],
    "import/no-cycle": "error",
    "import/no-useless-path-segments": "error",
    "import/no-extraneous-dependencies": "off",
    "import/first": "error",
    "import/no-duplicates": "error",
    "import/newline-after-import": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
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
