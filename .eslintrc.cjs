module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'airbnb',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-shadow': 'off',
    'no-param-reassign': 0,
    'arrow-body-style': 'off',
    'no-useless-catch': 'off',
    'import/no-cycle': 'off',
    'no-restricted-syntax': 'off',
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react-refresh/only-export-components': 'off',
    'react/jsx-no-constructed-context-values': 'off',
  },
  // 'import/no-extraneous-dependencies': [
  //   'error',
  //   {
  //     devDependencies: ['**/*.test.ts', '**/*.test.tsx'],
  //   },
  // ],
};
