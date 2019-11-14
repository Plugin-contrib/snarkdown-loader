const path = require('path');

module.exports = {
  entry: './index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: path.resolve(__dirname, '../dist/cjs.js'),
          },
        ],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
  },
  resolveLoader: {
    modules: [path.resolve(__dirname, '../dist')],
  },
};
