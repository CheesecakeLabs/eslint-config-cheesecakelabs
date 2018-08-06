const baseConfig = require.resolve('./');

module.exports = {
  extends: ['airbnb', 'prettier/react', baseConfig],
  rules: {
    'jsx-a11y/href-no-hash': 0,
    'react/jsx-filename-extension': 'off',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
};
