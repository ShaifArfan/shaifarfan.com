// .eslintrc.cjs
module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    extraFileExtensions: ['.astro'],
  },
  env: {
    node: true,
    browser: true,
  },
  rules: {},
  ignorePatterns: ['.astro', 'dist', 'node_modules'],
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      extends: [
        'plugin:astro/recommended',
        'plugin:astro/jsx-a11y-recommended',
      ],
      rules: {},
    },
    {
      // define the configuration for ts/tsx files.
      files: ['*.ts', '*.tsx'],
      extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
      ],
      parserOptions: {
        project: true,
      },
      rules: {
        'react/react-in-jsx-scope': 0,
        'react/require-default-props': 0,
        'import/prefer-default-export': 0,
        'react/jsx-props-no-spreading': 0,
      },
    },
  ],
};
