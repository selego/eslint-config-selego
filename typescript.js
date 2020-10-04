module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["prettier", "prettier/@typescript-eslint"],
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/ban-tslint-comment": "error",
    "@typescript-eslint/ban-types": "error",
    // "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
    "@typescript-eslint/consistent-type-imports": ["error"],
    "@typescript-eslint/naming-convention": ["off"],
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-implicit-any-catch": "off",
    "@typescript-eslint/no-invalid-void-type": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "error",
    "@typescript-eslint/prefer-as-const": "error",
    "@typescript-eslint/prefer-enum-initializers": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-reduce-type-parameter": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "@typescript-eslint/unbound-method": "error",
    "@typescript-eslint/unified-signatures": "error",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "default-param-last": "off",
        "@typescript-eslint/default-param-last": ["error"],
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],
        "no-dupe-class-members": "off",
        "@typescript-eslint/no-dupe-class-members": ["error"],
        // "no-duplicate-imports": "off",
        // "@typescript-eslint/no-duplicate-imports": ["error"],
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": ["error"],
        "@typescript-eslint/explicit-module-boundary-types": ["error"],
        // note you must disable the base rule as it can report incorrect errors
        "no-implied-eval": "off",
        "@typescript-eslint/no-implied-eval": ["error"],
        // note you must disable the base rule as it can report incorrect errors
        "no-loop-func": "off",
        "@typescript-eslint/no-loop-func": ["error"],
        // note you must disable the base rule as it can report incorrect errors
        "no-redeclare": "off",
        "@typescript-eslint/no-redeclare": ["error"],
        // note you must disable the base rule as it can report incorrect errors
        "no-throw-literal": "off",
        "@typescript-eslint/no-throw-literal": ["error"],
        // note you must disable the base rule as it can report incorrect errors
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": ["error"],
        // note you must disable the base rule as it can report incorrect errors
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
        // note you must disable the base rule as it can report incorrect errors
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"],
        // note you must disable the base rule as it can report incorrect errors
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": ["error"],
        "no-undef": "off",
      },
    },
  ],
};