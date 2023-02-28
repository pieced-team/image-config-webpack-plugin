<h1 align="center">@pieced/image-config-webpack-plugin 👋</h1>
<p align="center">
  <a href="https://www.npmjs.com/package/@pieced/image-config-webpack-plugin" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@pieced/image-config-webpack-plugin.svg">
  </a>
  <a href="https://www.npmjs.com/package/@pieced/image-config-webpack-plugin" target="_blank">
    <img alt="Download" src="https://img.shields.io/npm/dm/@pieced/image-config-webpack-plugin.svg?color=blue" />
  </a>
  <a href="https://www.npmjs.com/package/@pieced/image-config-webpack-plugin" target="_blank">
  <img alt="Webpack" src="https://img.shields.io/badge/webpack->=5.0.0-blue">
  </a>
  <a href="https://www.npmjs.com/package/@pieced/image-config-webpack-plugin" target="_blank">
  <img alt="Last Commit" src="https://img.shields.io/github/last-commit/pieced-team/image-config-webpack-plugin">
  </a>
  <a href="https://www.npmjs.com/package/@pieced/image-config-webpack-plugin" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/npm/l/@pieced/image-config-webpack-plugin" />
  </a>
</p>

> Automatically configuration webpack5 image loader

## Install

```sh
npm i --save-dev @pieced/image-config-webpack-plugin
```

## Webpack Config

```js
const ImageConfigWebpackPlugin = require('@pieced/image-config-webpack-plugin');
module.exports = {
  plugins: [new ImageConfigWebpackPlugin()],
};
```

## Options

**suffix**

- `type array`
- `default ['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'avif']`


**parser**

- `type object`
- [webpack.rule.parser](https://webpack.js.org/configuration/module/#ruleparser)
- default

```js
const defaultParser = {
  dataUrlCondition: {
    maxSize: webpack.mode === 'development' ? undefined : 1000,
  },
}
```

**generator**

- `type object`
- [webpack.rule.generator](https://webpack.js.org/configuration/module/#rulegenerator)
- default

```js
const defaultGenerator = {
  filename: webpack.mode === 'development' ? '[path][name][ext]' : 'static/images/[contenthash:10][ext]',
}
```
