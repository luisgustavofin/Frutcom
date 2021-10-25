module.exports = {
  extends: 'airbnb',
  plugins: [
    'import',
    'react'
  ],
  parser: 'babel-eslint',
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.tsx'] }],
    'import/prefer-default-export': 'off',
    'dot-notation': 'off',
    'arrow-parens': 'off',
    'linebreak-style': 0,
    'comma-dangle': 'off',
    'no-plusplus': 'off',
    'react/destructuring-assignment': 'off',
    'prefer-destructuring': 'off',
    'class-methods-use-this': 'off',
    'max-len': 'off',
    'react/prop-types': 'off',
    'react/prefer-stateless-function': 'off',
    'object-curly-newline': 'off',
    'consistent-return': 'off',
    'no-mixed-operators': ['error', { allowSamePrecedence: true }],
    'brace-style': ['error', 'stroustrup'],
    'no-param-reassign': 0,
    'import/no-self-import': 1,
    'import/no-cycle': 1
  }
};
