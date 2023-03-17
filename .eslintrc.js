module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:@typescript-eslint/recommended', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'i18next'],
  rules: {
    'react/jsx-indent': [2, 2],
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', 'jsx', '.tsx'],
    }],
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'max-len': 1,
    'react/require-default-props': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 1,
    'react/function-component-definition': 0,
    'no-shadow': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 1,
    'i18next/no-literal-string': ['error', {
      markupOnly: true,
      ignoreAttribute: ['data-testid', 'to'],
    }],
  },
  overrides: [{
    files: ['**/src/**/*.test.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off',
    },
  }],
};
