const rules = {
  //  0 = off, 1 = warn, 2 = error
  'import/extensions': [1, 'never'],
  'react/prop-types': 0,
  'no-unused-vars': 1,
  'jsx-a11y/anchor-is-valid': [
    'error',
    {
      aspects: ['invalidHref'],
    },
  ],
  'prefer-const': [
    'error',
    {
      destructuring: 'all',
    },
  ],
  // react-hooks
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn',
  'react/jsx-props-no-spreading': 0,
  'react/jsx-filename-extension': [
    0,
    {
      extensions: ['.jsx', '.tsx'],
    },
  ],
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // extends: ['plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    extraFileExtensions: ['.astro'],
  },
  plugins: ['react', 'react-hooks'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.jsx'],
      extends: [
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
      ],
      rules: {
        ...rules,
        'react/require-default-props': 0,
      },
    },
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      extends: [
        'plugin:astro/recommended',
        'plugin:astro/jsx-a11y-recommended',
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:prettier/recommended',
      ],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        ...rules,
        // override/add rules settings here that is specific to astro files , such as:
        // 'astro/no-set-html-directive': 'error',
        'import/no-unresolved': 'off',
      },
    },
  ],

  rules: { ...rules },
};
