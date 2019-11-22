<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

[![npm][npm]][npm-url]
[![node][node]][node-url]
[![chat][chat]][chat-url]
[![size][size]][size-url]
[![total-downloads][total-downloads]][total-downloads]
![issues](https://img.shields.io/github/issues/Plugin-contrib/snarkdown-loader)
[![GitHub license](https://img.shields.io/github/license/Plugin-contrib/snarkdown-loader)](https://github.com/Plugin-contrib/snarkdown-loader/blob/master/LICENSE)

# snarkdown-loader

## Getting Started

A lightweight markdown loader using [`snarkdown`](https://github.com/developit/snarkdown)

To begin, you'll need to install `snarkdown-loader`:

```console
npm install snarkdown-loader --save-dev
```

Then add the loader to your `webpack` config. For example:

**index.js**

```js
import file from 'readme.md';
```

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /.md$/,
        use: [
          {
            loader: `snarkdown-loader`,
          },
        ],
      },
    ],
  },
};
```

And run `webpack` via your preferred method.

## Example

webpack.config.js

```js
module.exports = {
  module: {
    rules: [
      {
        test: /.md$/,
        use: [
          {
            loader: 'html-loader', // Exports HTML as string
          },
          {
            loader: `snarkdown-loader`, // converts the markdown to HTML
          },
        ],
      },
    ],
  },
};
```

## Contributing

Please take a moment to read our contributing guidelines if you haven't yet done so.

[CONTRIBUTING](./.github/CONTRIBUTING.md)

## License

[MIT](./LICENSE)

[npm]: https://img.shields.io/npm/v/snarkdown-loader.svg
[npm-url]: https://npmjs.com/package/snarkdown-loader
[node]: https://img.shields.io/node/v/snarkdown-loader.svg
[node-url]: https://nodejs.org
[deps]: https://david-dm.org/webpack-contrib/snarkdown-loader.svg
[deps-url]: https://david-dm.org/plugin-contrib/snarkdown-loader
[tests]: https://dev.azure.com/plugin-contrib/snarkdown-loader/_apis/build/status/plugin-contrib.snarkdown-loader?branchName=master
[tests-url]: https://dev.azure.com/plugin-contrib/snarkdown-loader/_build/latest?definitionId=2&branchName=master
[cover]: https://codecov.io/gh/webpack-contrib/snarkdown-loader/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/webpack-contrib/snarkdown-loader
[chat]: https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg
[chat-url]: https://gitter.im/webpack/webpack
[size]: https://badgen.net/bundlephobia/min/snarkdown-loader
[size-url]: https://badgen.net/bundlephobia/min/snarkdown-loader
[total-downloads]: https://img.shields.io/npm/dt/snarkdown-loader.svg
