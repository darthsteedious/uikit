const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractCSS = new ExtractTextPlugin({
  filename: 'uikit.css',
  allChunks: true,
});


module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "uikit.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, './src'),
      },
      {
        test: /\.scss$/,
        use: ExtractCSS.extract({
          fallback: 'style-loader',
          use: [{ loader: 'css-loader', options: {importLoaders: 1}}, 'postcss-loader', 'sass-loader']
        }),
        include: path.resolve(__dirname, './src')
      }
    ]
  },
  resolve: {
    alias: {
      scss: path.resolve(__dirname, './src/scss'),
      js: path.resolve(__dirname, './src/js'),
    }
  },
  target: 'web',
  plugins: [
    ExtractCSS,
  ]
};