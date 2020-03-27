const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const baseConfig = require('./webpack-base.config')
const path = require('path')
const merge = require('webpack-merge')
const moment = require('moment')
const hash = moment().format('YYYY-MM-DD-HH-mm-ss')
const pro = {
  mode: 'production',
  output: {
    publicPath: '/static/' + hash + '/',
    path: path.resolve(__dirname, '../dist/' + hash)
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns:[path.resolve(__dirname, '../dist/')]
    }),
    new ManifestPlugin({
      fileName: 'manifest.json'
    })
  ]

}
module.exports = merge(baseConfig, pro)

