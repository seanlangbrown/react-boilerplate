const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const packageJson = require('./package.json');
const resolveSrcDir = (dir) => path.resolve(__dirname, 'src', dir);
module.exports = {
  entry: './src/index.js',
  output: {
    path: resolveSrcDir('dist'),
    filename: packageJson.name + '-bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
        resolve: {
          extensions: [
            '.js',
            '.jsx'
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ],
   resolve: {
    alias: {
      App: resolveSrcDir('app'),
      Store: resolveSrcDir('store'),
    }
  }
}
