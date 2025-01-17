/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint.
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    'eslint-plugin-import',
    '@typescript-eslint',
    '@typescript-eslint/tslint',
  ],
  root: true,
  ignorePatterns: ['node_modules/', 'lib/'],
  rules: {
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'snake_case'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
      },
    ],
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/tslint/config': [
      'error',
      {
        rules: {
          whitespace: true,
        },
      },
    ],
    '@typescript-eslint/type-annotation-spacing': 'error',
    'brace-style': ['error', '1tbs'],
    'comma-dangle': ['error', 'always-multiline'],
    eqeqeq: ['error', 'smart'],
    'id-denylist': [
      'error',
      'any',
      'Number',
      'number',
      'String',
      'string',
      'Boolean',
      'boolean',
      'Undefined',
      'undefined',
    ],
    'id-match': 'error',
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        'newlines-between': 'ignore',
        groups: [
          ['builtin', 'external', 'internal', 'unknown', 'object', 'type'],
          'parent',
          ['sibling', 'index'],
        ],
        distinctGroup: false,
        pathGroupsExcludedImportTypes: [],
        pathGroups: [
          {
            pattern: './',
            patternOptions: {
              nocomment: true,
              dot: true,
            },
            group: 'sibling',
            position: 'before',
          },
          {
            pattern: '.',
            patternOptions: {
              nocomment: true,
              dot: true,
            },
            group: 'sibling',
            position: 'before',
          },
          {
            pattern: '..',
            patternOptions: {
              nocomment: true,
              dot: true,
            },
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '../',
            patternOptions: {
              nocomment: true,
              dot: true,
            },
            group: 'parent',
            position: 'before',
          },
        ],
      },
    ],
    'max-len': [
      'error',
      {
        code: 150,
      },
    ],
    'no-eval': 'error',
    'no-multiple-empty-lines': 'error',
    'no-redeclare': 'error',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'off',
    'no-var': 'off',
  },
};
