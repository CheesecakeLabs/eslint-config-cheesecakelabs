# eslint-config-cheesecakelabs

This package provides CheesecakeLab's .eslintrc extensible shared config.

## Install

with yarn:
```
$ yarn add --dev eslint-config-cheesecakelabs
```

or with npm:
```
$ npm install --save-dev eslint-config-cheesecakelabs
```

## Usage

Shareable configs are designed to work with the extends feature of `.eslintrc` files. Instead of using a file path for the value of extends, use your module name.

For example:

```json
{
    "extends": "eslint-config-cheesecakelabs"
}
```
You can also omit the `eslint-config- and it will be automatically assumed by ESLint:
```json
{
    "extends": "cheesecakelabs"
}
```

## React

**IMPORTANT:** To use the react config, you need to add it explicitly.

```json
{
  "extends": "cheesecakelabs/react"
}
```

  [More Info](http://eslint.org/docs/developer-guide/shareable-configs)
