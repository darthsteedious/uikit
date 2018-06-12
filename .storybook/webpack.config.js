const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, '../src'),
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', { loader: 'css-loader', options: {importLoaders: 1}}, 'postcss-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../src')
      }
    ]
  },
  resolve: {
    alias: {
      stories: path.resolve(__dirname, '../stories'),
      scss: path.resolve(__dirname, '../src/scss'),
      js: path.resolve(__dirname, '../src/js'),
    }
  },
};