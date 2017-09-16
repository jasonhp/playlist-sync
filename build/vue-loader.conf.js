/**
 * Created by jasonzx on 26/06/2017.
 */

var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
        ? config.build.productionSourceMap
        : config.dev.cssSourceMap,
    extract: isProduction
  }),
  postcss: [
    require('autoprefixer')({
      browsers: ['last 10 versions']
    })
  ]
}
