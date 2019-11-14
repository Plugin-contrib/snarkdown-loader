const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './index.js'),
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: path.resolve(__dirname, '../../dist/cjs.js'),
          },
        ],
      },
    ],
  },
  resolveLoader: {
    modules: [path.resolve(__dirname, '../../dist')],
  },
};
