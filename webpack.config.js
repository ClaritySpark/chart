const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'clearly-log.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'LoggingSDK',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader', 'babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
};
