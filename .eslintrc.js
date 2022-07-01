module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jest',
  ],
  rules: {
    'no-unused-vars': 'warn',
    'react/jsx-uses-react': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'import/no-absolute-path': 'off',
    'no-self-compare': 'warn',
    'arrow-body-style': ['error', 'always'],
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' }],
    'quotes': ['error', 'single', { 'avoidEscape': true }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};
