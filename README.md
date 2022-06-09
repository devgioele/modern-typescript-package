# Modern TypeScript package

Create a new package in no time :rocket:

## Features

- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [yarn](https://yarnpkg.com/)
- [esbuild](https://esbuild.github.io/)
- [@swc/jest](https://swc.rs/docs/usage/jest)
- [GitHub Actions](https://github.com/features/actions) configurations
- [VS Code](https://code.visualstudio.com/) settings

## Getting started

### Install Node.js

Install [version 16.10 or higher of Node.js](https://nodejs.org/en/download/). Use `node -v` to check your current version.

### Enable corepack

```sh
corepack enable
```

### Install dependencies
```sh
yarn
```

### Test
```sh
yarn test
```

### Build
```sh
yarn build
```

## Releasing

Whenever it is appropriate to increase the version number, run locally:

```sh
yarn version <version>
```

Replace `<version>` with one of the following:

- major
- minor
- patch

Then commit, push and start the `publish` workflow.

For more information, see [the docs](https://yarnpkg.com/cli/version).