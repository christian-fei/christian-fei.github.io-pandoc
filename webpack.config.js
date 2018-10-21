var webpack = require('webpack')
// var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin
var path = require('path')

module.exports = function (env) {
  return {
    entry: path.resolve(__dirname, 'assets/js/index.js'),
    output: {
      path: path.resolve(__dirname, 'dest'),
      filename: '[name].min.js',
      chunkFilename: '[id].chunk.js'
    },
    mode: 'production',
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'main.min',
            chunks: 'all'
          }
        }
      }
    }
  }
}
