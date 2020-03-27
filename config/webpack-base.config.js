const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  entry: {
    app:'./src/index.js'
  },
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': [
              'vue-style-loader',
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            }
          ]
        })
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            limit: 1000,
            name: 'img/[name].[ext]'
          }
        }
      },
      {
        include:[path.resolve('src/icons')],
        test: /\.svg$/,
        use: {
          loader: 'svg-sprite-loader',
          options: {
            limit: 1000,
            name: 'img/[name].[ext]',
            symbolId: 'icon-[name]'
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            limit: 1000,
            name: 'font/[name].[ext]'
          }
        }
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  },
  resolve: {
    modules: ['node_modules', './node_modules'],
    extensions: ['.vue', '.js', '.json', '.png'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, '../src/')
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new ExtractTextPlugin({
      filename: `css/[name].css`,
      allChunks:true,
    })
  ]
}
