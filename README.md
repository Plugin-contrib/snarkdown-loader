<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![tests][tests]][tests-url]
[![cover][cover]][cover-url]
[![chat][chat]][chat-url]
[![size][size]][size-url]

# snarkdown-loader

## Getting Started

Its using [snarkdown](https://github.com/developit/snarkdown) for parsing the html.

> I have a plan to add few more extended features like **highlighting**, **passing path instead of markdown code**, **Prettier html** and will add them soon. Few of these requires changes with the core snarkdown.

To begin, you'll need to install `snarkdown-loader`:

```console
npm install snarkdown-loader --save-dev
```

Then add the loader to your `webpack` config. For example:

**index.js**

```js
import file from 'readme.md';
```

<!-- isLoader ? use(this) : delete(isPlugin) -->

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
[deps-url]: https://david-dm.org/webpack-contrib/snarkdown-loader
[tests]: https://dev.azure.com/webpack-contrib/snarkdown-loader/_apis/build/status/webpack-contrib.snarkdown-loader?branchName=master
[tests-url]: https://dev.azure.com/webpack-contrib/snarkdown-loader/_build/latest?definitionId=2&branchName=master
[cover]: https://codecov.io/gh/webpack-contrib/snarkdown-loader/branch/master/graph/badge.svg
[cover-url]: https://codecov.io/gh/webpack-contrib/snarkdown-loader
[chat]: https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg
[chat-url]: https://gitter.im/webpack/webpack
[size]: https://packagephobia.now.sh/badge?p=snarkdown-loader
[size-url]: https://packagephobia.now.sh/result?p=snarkdown-loader
