module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb/base', 'prettier'],
  rules: {
    semi: ['error', 'never'],
    'no-console': [
      'error',
      {
        allow: ['warn', 'info', 'error'],
      },
    ],
    'import/named': 'error',
    'import/prefer-default-export': 'off',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    'arrow-parens': ['error', 'as-needed'],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        semi: false,
        parser: 'babylon',
        printWidth: 100,
      },
    ],
  },
  plugins: ['prettier'],
};
