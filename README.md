# ESLint config for Fishbrain TypeScript projects

[![npm version](https://badge.fury.io/js/eslint-config-fishbrai-base.svg)](https://badge.fury.io/js/eslint-config-fishbrain-base)
[![Build Status](https://travis-ci.com/fishbrain/eslint-config-fishbrain-base.svg?branch=master)](https://travis-ci.com/fishbrain/eslint-config-fishbrain-base)

Rule set based on [Airbnb JavaScript style guide](https://github.com/airbnb/javascript)
with some extra rules for Jest tests from [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest).

## Usage

```bash
npm install -D eslint-config-fishbrain-base
```

In `.eslintrc` (or whatver your ESLint config file is)

```json
{
  "extends": ["eslint-config-fishbrain-base"]
}
```

### Recommended tsconfig.json settings

In addition to setting target, module, moduleResolution etc,
these strictness settings are recommended.

```json
{
  "compilerOptions": {
    "strict": true,
    "noFallthroughCasesInSwitch": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

### Recommended Prettier settings

Add this to `package.json` to get correct config for [prettier](https://prettier.io/)

```json
  "prettier": {
    "singleQuote": true,
    "trailingComma": "all"
  }
```

### Editor settings

To enable ESLint in VS Code add the following to your `settings.json`:

```json
{
  "tslint.enable": false,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```

### Web Projects

For ESLint rules for React based web projects, see: https://github.com/fishbrain/eslint-config-fishbrain

## Deploying

To trigger a release, merge changes into the `master` branch with an updated package version. This
will trigger a Github Actions workflow to deploy a release.
