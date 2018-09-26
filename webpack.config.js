const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
  entry: path.resolve(SRC_DIR, 'index.js'),
  target: 'node',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        include: SRC_DIR,
        options: {
          presets: ['@babel/env']
        }
      }
    ]
  }
};
