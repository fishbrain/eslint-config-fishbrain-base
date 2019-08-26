const HTTP_CODES = [200, 201, 204, 301, 302, 400, 401, 404, 422, 500];
const HTML_HEADER_LEVELS = [1, 2, 3, 4, 5, 6];
const COMMON_MATH_VALUES = [24, 60, 100];
const COMMON_INDEX_VALUES = [-1, 0, 1];
const ALLOWED_NUMBERS = Array.from(
  new Set(
    COMMON_INDEX_VALUES.concat(
      HTTP_CODES,
      HTML_HEADER_LEVELS,
      COMMON_MATH_VALUES,
    ),
  ),
);

// eslint-disable-next-line fp/no-mutation
module.exports = {
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest', 'fp', 'import'],
  rules: {
    // Core rules replaced by Typescript rules
    'no-use-before-define': 'off',
    'consistent-return': 'off', // TypeScript takes care of checking return
    'import/no-unresolved': 'off', // Doesn't work properly with TypeScript
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': [
      // options from airbnb-base
      'off',
      'all',
      {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false,
        ignoreJSX: 'all', // delegate to eslint-plugin-react
        enforceForArrowConditionals: false,
      },
    ],

    // Additional Fishbrain rules
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/camelcase': ['error', { properties: 'never' }],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true },
    ],
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/no-explicit-any': ['error', { fixToUnknown: true }],
    '@typescript-eslint/triple-slash-reference': [
      'error',
      { types: 'prefer-import' },
    ],
    '@typescript-eslint/prefer-readonly': 'error',

    // Warns if a type assertion does not change the type of an expression
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',

    // Enforce includes method over indexOf method
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md
    '@typescript-eslint/prefer-includes': 'error',

    // Enforce the use of String#startsWith and String#endsWith instead of other equivalent methods of checking substrings
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',

    'fp/no-delete': 'error',
    'fp/no-let': 'error',
    'fp/no-loops': 'error',
    'fp/no-mutating-assign': 'error',
    'fp/no-mutation': [
      'error',
      {
        allowThis: true,
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.tsx',
          '**/*.test.ts',
          '**/testing.tsx',
          '**/*.stories.tsx',
          '**/*.stories.ts',
          '**/setupTests.ts',
          '**/webpack.config.{js,ts}', // webpack config
          '**/webpack.config.*.{js,ts}', // webpack config
        ],
      },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always-and-inside-groups',
        groups: [
          ['builtin', 'external'],
          ['internal', 'sibling', 'parent', 'index'],
        ],
      },
    ],
    'import/prefer-default-export': 'off',

    // Disallow Magic Numbers
    // https://eslint.org/docs/rules/no-magic-numbers
    'no-magic-numbers': [
      'error',
      { ignoreArrayIndexes: true, ignore: ALLOWED_NUMBERS },
    ],

    // disallow dangling underscores in identifiers
    // https://eslint.org/docs/rules/no-underscore-dangle
    'no-underscore-dangle': [
      'error',
      { allow: ['__PRELOADED_STATE__', '__APOLLO_STATE__'] },
    ],

    // disallow the use of console
    // https://eslint.org/docs/rules/no-console
    'no-console': 'off',

    // Disallow assignments that can lead to race conditions due to usage of await or yield
    // https://eslint.org/docs/rules/require-atomic-updates
    'require-atomic-updates': 'error',

    // no export from test file
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-export.md
    'jest/no-export': 'error',
  },
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    extraFileExtensions: ['.ts', '.tsx'],
  },
  env: {
    es6: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
