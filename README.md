# React Typescript Webpack Starter &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/hdong92/react-typescript-webpack-starter/blob/master/LICENSE) [![Travis Build Status](https://img.shields.io/travis/hdong92/react-typescript-webpack-starter.svg)]() ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

A widget which can be deployed to any patners sites to allow integration with Avios Collect and Spent functionality on their checkout pages.

## About

This app was developed with `React v16`. The application is small and simple enough to not consider adding React-Router or state management library such as Redux.

Code quality and style is very important in any project. This is why `Typescript` was added to allow more static typing when necessary. `tslint` and `.editorconfig` will check for undesirable code syntax and file layout respectively.

Testing is another important aspect of the project, here we are using `jest` to run the unit tests with the help of `enzyme`. Jest also supports checking code coverage out of the box.

Everything is bundled up using `webpack`. The setup supports live-reload on code change during dev mode.

## Development

### Pre-requisite

In order to develop or build this application, make sure you have the following:

* Node (v8.9.0 or later)
* NPM (v6.1.0 or later)
* IDE with support for editorconfig

Note: lower version of Node and NPM will probably work as well, the above versions were just what this app was developed on

### Get started with Dev

Install all the dependencies first

```
npm i
```

Then run the follow command to spin up the local developemnt environment

```
npm run dev
```

### Test

Test can be ran in two ways, the first will run `jest` in watch mode. This is useful when writing tests or debugging.

```
npm t
```

The second is mainly used during production build stage.

```
npm run test:build
```

For more information about `jest` config see `jest.config.js` file in project's root directory.

### Lint

Since Typescript is used in this project, the linter is `tslint` which is extending `tslint-react` which makes sense considering this is a React application.

In order to lint the Typescript files, run

```
npm run lint
```

If there are a lot of linting errors, you can fix them by running

```
npm run lint:fix
```

Note: the auto fix can't fix all the problems

For more information about `tslint` config see `tslint.json` file in project's root directory.

### Build

The distributed version of code should be minimised and etc. We also want to check for linting issues and make sure all the tests are passing when we do a production build.

Simply run the following command to do all the above

```
npm run build
```

## Installation

WIP

