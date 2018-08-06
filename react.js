module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier/react'],
  rules: {
    'jsx-a11y/href-no-hash': 0,
    'react/jsx-filename-extension': 'off',
  },
  plugins: ['react'],
};
