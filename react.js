const baseConfig = require.resolve('./')

module.exports = {
  extends: ['airbnb', 'prettier/react', baseConfig],
  rules: {
    'jsx-a11y/href-no-hash': 0,
    'react/jsx-filename-extension': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
}
