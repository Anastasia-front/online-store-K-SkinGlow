module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb', 'airbnb/hooks', 'plugin:react/jsx-runtime'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    indent: ['error', 'tab'],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
  plugin: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
    //or if we want to group imports can use below.
    'simple-import-sort/imports': [
      2,
      {
        groups: [['^react'], ['^redux'], ['^styled'], ['^@?\\w'], ['@/(.*)']],
      },
    ],
  },
};
