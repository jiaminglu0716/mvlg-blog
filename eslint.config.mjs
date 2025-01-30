import pluginRegexp from "eslint-plugin-regexp";
import typescriptEslint from "typescript-eslint";
import reactEslint from "eslint-plugin-react";

/**
 * @Problems
 * Need to redefine, here can not process tsx files.
 */
export default [
  {
    ignores: ["/build", "/.git", "package.json", "node_modules"],
  },
  // recommendedConfig,
  pluginRegexp.configs["flat/recommended"],
  ...typescriptEslint.config({
    files: ["**/*.{ts,cts}"],
    extends: [
      ...typescriptEslint.configs.recommendedTypeChecked,
      ...typescriptEslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      ...reactEslint.configs.flat.recommended.languageOptions,
      parser: typescriptEslint.parser,
      parserOptions: {
        allowAutomaticSingleRunInference: true,
        projectService: true,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslint.plugin,
    },
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "no-dupe-class-members": "off",
      "@typescript-eslint/no-dupe-class-members": "error",
      "no-undef": "off",
      "no-redeclare": "off",
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-ignore": {
            descriptionFormat: "^\\(Babel 7 vs Babel 8\\) .+$",
          },
        },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { disallowTypeAnnotations: false },
      ],
      "@typescript-eslint/no-use-before-define": [
        "error",
        {
          functions: false,
          classes: false,
          allowNamedExports: true,
        },
      ],
      "@typescript-eslint/no-confusing-void-expression": [
        "error",
        { ignoreArrowShorthand: true },
      ],
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          checksConditionals: false,
        },
      ],
      "require-await": "off",
      "@typescript-eslint/require-await": "error",

      // Todo: Investigate, for each of these, whether we want them
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/consistent-generic-constructors": "off",
      "@typescript-eslint/consistent-indexed-object-style": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/dot-notation": "off",
      "@typescript-eslint/no-base-to-string": "off",
      "@typescript-eslint/no-duplicate-type-constituents": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-this-alias": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-declaration-merging": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/prefer-for-of": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "off",
      "@typescript-eslint/prefer-string-starts-ends-with": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/sort-type-constituents": "off",
      "@typescript-eslint/unbound-method": "off",
      "prefer-rest-params": "off",

      // https://github.com/typescript-eslint/typescript-eslint/issues/5014
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-return": "off",

      // v8
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unsafe-function-type": "off",
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
    },
  }),
];
