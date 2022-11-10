module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["react-app", "react-app/jest", "prettier", "eslint:recommended"],
  overrides: [],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {},
};
