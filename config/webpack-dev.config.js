const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack-base.config')
const merge = require('webpack-merge')
const dev = {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    publicPath: '/',
  },
  devServer: {
    port: 8081,
    contentBase: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
    })]
}
module.exports = merge(baseConfig, dev)
