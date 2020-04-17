module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    browser: true,
    jest: true,
  },
  plugins: ['react', '@typescript-eslint'],
  extends: ['react-app', 'plugin:prettier/recommended'],
  settings: {
    react: {
      version: '16.9',
    },
  },
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
};
