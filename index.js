module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    semi: ['error', 'never'],
    'no-console': [
      'error', {
        allow: ['warn', 'info', 'error'],
      },
    ],
    'import/named': 'error',
    'import/prefer-default-export': 'off',
    'no-multiple-empty-lines': [
      'error', {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    'import/order': [
      'error', {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error', {
        devDependencies: [
          '**/stories.js',
          '**/*.dev.js',
          '**/*.test.js',
          'server.js',
          'postcss.config.js',
          'webpack.config.*',
        ],
      },
    ],
    'react/jsx-filename-extension': 'off',
    'arrow-parens': ['error', 'always'],
  },
  plugins: [
    'react',
  ],
}
