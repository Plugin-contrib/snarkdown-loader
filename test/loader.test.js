import webpack from 'webpack';
import MemoryFS from 'memory-fs';

const runWebpack = (config) => {
  const compiler = webpack(config);

  if (!config.output) {
    compiler.outputFileSystem = new MemoryFS();
  }

  return new Promise((resolve, reject) =>
    compiler.run((error, stats) => {
      if (error) {
        reject(error);
      }

      return resolve(stats);
    })
  );
};

describe('snarkdown - loader', () => {
  it('should works', async (done) => {
    const config = require('./demos/webpack.config');

    const stats = await runWebpack(config);
    const { source } = stats.toJson().modules[1];

    expect(source).toMatchSnapshot();
    done();
  });
});
