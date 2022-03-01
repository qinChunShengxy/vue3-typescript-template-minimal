module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: { 'import/resolver': { typescript: {} } },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'airbnb-typescript',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    'vue/no-multiple-template-root': 'off',
  },
};
