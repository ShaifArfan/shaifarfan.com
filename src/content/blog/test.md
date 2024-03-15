---
title: Eslint Prettier Setup with React & TypeScript
pubDate: 2022-07-01
description: 'This is the first post of my new Astro blog.'
author: 'Astro Learner'
cover: './test.jpeg'
coverAlt: 'A image for test'
tags: ['astro', 'blogging', 'learning in public']
tutorial: 'eMgLHOrDkAs'
---

I also have a video version of this blog post. If you prefer watching over reading, you can watch it here:

## 01. Create project & setup initial Eslint hi

First create a project using react & ts.

I will be using next.js with ts. For that, you need to run this command.

```bash {1}
yarn create next-app --typescript  # [!code ++]
```

This will already install `eslint` & create an `eslintrc.json` file. Which we will not use. We will set up the ESLint manually.

If you don’t have ESLint installed, first you need to install ESLint by:

```bash
npm i -D eslint
```

Once we have ESLint in our project, we can start ESLint setup by running this command:

```bash
npm init @eslint/config
```

This will ask some question, that you need to answer based on the project you are working on:

Here is the ans that I choose since right now I am on next JS app.

01-Q: How would you like to use ESLint?

▸ To check syntax and find problems

02-Q: What type of modules does your project use?

▸ JavaScript modules (import/export)

03-Q: Which framework does your project use?

▸ React

04-Q: Does your project use TypeScript?

▸ Yes

05-Q: Where does your code run?

▸ Browser

06-Q: What format do you want your config file to be in?

▸ JavaScript

After that based on your answers, It will ask you to install some packages now, for that you can choose yes and also choose which package manager you wanna use to install them.

Now you can see it will create a new `eslintrc` file for you. Since we choose the format of the config file `JavaScript`, the file name will be `.eslintrc.js`

## 02. Adding `Airbnb` ESLint Style Guide for Ts.

### Adding `eslint-config-airbnb`

```bash
npx install-peerdeps --dev eslint-config-airbnb

npx install-peerdeps --dev eslint-config-airbnb #for non react project
```

once we installed this, we need to extend our `.eslintrc.js` file.

```jsx
extends: ["airbnb", "airbnb/hooks"] // [!code --]
extends: ["airbnb-base"] // [!code ++]
```

### Adding **`eslint-config-airbnb-typescript`**

```bash
npm install eslint-config-airbnb-typescript \
            @typescript-eslint/eslint-plugin@^5.13.0 \
            @typescript-eslint/parser@^5.0.0 \
            --save-dev
```

once we installed this, we can extend `airbnb-typscript` in our `.eslintrc.js` file.

```jsx title=".eslintrc.js"
extends: [
  'airbnb',
	'airbnb-typescript', // 'airbnb-typescript/base' for non react
	'airbnb/hooks' // [!code highlight]
]
```

Also, we need to Configure the ESLint TypeScript parser in `.eslntrc.js` file

```jsx
parser: "@typescript-eslint/parser",
parserOptions: {
   project: "./tsconfig.json",
}
```

Also include the `eslintrc.js` file in our `tsconfig.json` file.

```json
"include": [
	".eslintrc.js" //eslintrc js file
]
```

## 03. Adding `Prettier` to our project.

```bash
npm install -D prettier eslint-config-prettier eslint-plugin-prettier
```

After the installation, we need to extend it in our `eslintrc` file.

```jsx

extends: [
..., // all other extends,
"plugin:prettier/recommended" // this should be the last one
]
```

Now for our prettier configurations, we need to create a file called `.prettierrc.js` Now you can add your prettier rules in this file.

```jsx
// prettier.config.js or .prettierrc.js
module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
};
```

That’s it. Now you can add this two script to your package.json to find ESLint error and fix them.

```json
"lint": "eslint .",
"lint:fix": "eslint . --fix",
```

**Try to reload the code editor, if you face any unexpected issue.**

## 04. For VS Code.

For VS Code, you can install ESLint & prettier extensions to take more advantage.

Once you have these two extensions, you can add these settings in your VS Code `settings.json`

```json
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,
"eslint.alwaysShowStatus": true,
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
```

Now you don’t need to run lint scripts to fix errors. Now, when you save files, it will automatically fix all the auto fixable errors for you.
