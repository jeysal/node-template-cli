# node-template-cli

> Template for a node CLI module
> [babel](https://babeljs.io/),
> [eslint](http://eslint.org/),
> [flow](https://flow.org/),
> [jest](https://facebook.github.io/jest/) and
> [prettier](https://github.com/prettier/prettier)

[![build status](https://img.shields.io/travis/jeysal/node-template-cli.svg?style=flat-square)](https://travis-ci.org/jeysal/node-template-cli)
[![AppVeyor build status](https://img.shields.io/appveyor/ci/jeysal/node-template-cli.svg?style=flat-square&label=windows+build)](https://ci.appveyor.com/project/jeysal/node-template-cli)

[![npm package](https://img.shields.io/npm/v/node-template-cli.svg?style=flat-square)](https://www.npmjs.com/package/node-template-cli)
[![license](https://img.shields.io/github/license/jeysal/node-template-cli.svg?style=flat-square)](https://github.com/jeysal/node-template-cli/blob/master/LICENSE)

## Installation

    npm install -g node-template-cli

## Usage

Remember to replace the package info in package.json & README.md.

Relevant npm scripts are:

```
npm run clean
npm run fix
npm run t
npm run check
npm run build
npm run doc
```

```
node-template-cli <some-arg> [<further-args>...]
node-template-cli asdf abc xyz
```

## Exit codes

* `0` if something worked
* `1` if something failed
* `2` for invalid CLI usage
