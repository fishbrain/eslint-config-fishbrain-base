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
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest', 'fp', 'import'],
  rules: {
    // Core rules replaced by Typescript rules
    'no-use-before-define': 'off',
    'consistent-return': 'off', // TypeScript takes care of checking return

    // Additional Fishbrain rules
    '@typescript-eslint/camelcase': ['error', { properties: 'never' }],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true },
    ],
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/promise-function-async': 'error',
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
    'no-magic-numbers': [
      'error',
      { ignoreArrayIndexes: true, ignore: ALLOWED_NUMBERS },
    ],
    'no-underscore-dangle': [
      'error',
      { allow: ['__PRELOADED_STATE__', '__APOLLO_STATE__'] },
    ],
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
