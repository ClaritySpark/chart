const path = require("node:path");

const commonOverrides = (files, tsconfigPath) => ({
  files: files,
  settings: {
    "import/resolver": {
      typescript: {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          moduleDirectory: [".", "node_modules"],
        },
        alwaysTryTypes: true,
        project: path.resolve(__dirname, tsconfigPath),
      },
    },
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    project: path.resolve(__dirname, tsconfigPath),
  },
});

module.exports = {
  ignorePatterns: ["apps/**", "packages/**"],
  extends: ["@repo/eslint-config/library.js"],
  parser: "@typescript-eslint/parser",
  overrides: [
    commonOverrides(
      [
        "packages/clarity-chart/**/*.ts?(x)",
        "packages/clarity-chart/**/*.js?(x)",
      ],
      "packages/clarity-chart/tsconfig.json"
    ),
  ],
};
