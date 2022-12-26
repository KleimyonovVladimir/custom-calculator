module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended', 'prettier'],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'comma-dangle': [2, 'never'],
    'semi': [2, 'never'],
    'quotes': 1,
    'no-unused-vars': 1,
    'camelcase': 0,
    'no-shadow': 0,
    'no-console': 0,
    'import/no-anonymous-default-export': 0,
    'import/no-unresolved': 0,
    'multiline-ternary': 0,
    'class-methods-use-this': 0,
    'no-nested-ternary': 1,
    'no-param-reassign': 2,
    'no-empty-pattern': 1,
    'prettier/prettier': 0
  }
}
