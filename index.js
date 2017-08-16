module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
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
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
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
    'arrow-parens': ['error', 'as-needed'],
    'prettier/prettier': ['error', {
      singleQuote: true,
      trailingComma: 'all',
      bracketSpacing: true,
      jsxBracketSameLine: false,
      semi: false,
      parser: 'babylon',
      printWidth: 100,
    }],
  },
  plugins: ['react', 'prettier'],
}
