module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
  plugins: ['react-refresh', 'simple-import-sort'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'simple-import-sort/imports': [
        'error',
      {
        groups: [
          // Packages `react` related packages come first.
          ["^react", "^@?\\w"],
          // FSD slices
          ['^(@\/app\/)\\w+'],
          ['^(@\/pages\/)\\w+'],
          ['^(@\\/widgets\/)\\w+'],
          ['^(@\/features\/)\\w+'],
          ['^(@\/entities\/)\\w+'],
          ['^(@\/shared\/)\\w+'],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Style imports.
          ["^.+\\.?(scss)$"],
        ],
      },
    ],
  },
}
