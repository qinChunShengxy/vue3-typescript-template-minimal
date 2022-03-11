module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  settings: { 'import/resolver': { typescript: {} } },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'airbnb-typescript',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/no-multiple-template-root': 'off',
  },
}
