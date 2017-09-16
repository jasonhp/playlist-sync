var path = require('path');
var config = require('../config');
var utils = require('./utils');
var projectRoot = path.resolve(__dirname, '../');

// happy pack optimize
var HappyPack = require('happypack')
var os = require('os')
var happyThreadPool = HappyPack.ThreadPool({size: os.cpus().length})
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js',
    background: './chrome/background/main.js',
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
        ? config.build.assetsPublicPath
        : config.dev.assetsPublicPath,
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: [
      path.resolve(__dirname, "src"),
      path.resolve(__dirname, "chrome"), // TODO： 两个怎么办？
      'node_modules'
    ],
    alias: {
      // 'src': path.resolve(__dirname, '../src'),
      'chrome': path.resolve(__dirname, '../chrome'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: vueLoaderConfig
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: 'HappyPack/loader?id=jsHappy',
        },
        include: [resolve('src'), resolve('chrome'), resolve('test')]
      },
      {
        test: /\.html$/,
        use: {
          loader: 'vue-html-loader'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('img/[name].[ext]')
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('fonts/[name].[ext]')
          }
        }
      }
    ]
  },
  plugins: [
    // happypack
    new HappyPack({
      id: 'jsHappy',
      threadPool: happyThreadPool,
      loaders: ['babel-loader?cacheDirectory']
    })
  ]
};
