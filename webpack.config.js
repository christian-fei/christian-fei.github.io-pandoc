var webpack = require('webpack')
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin
var path = require('path')

module.exports = function (env) {
  return {
    entry: path.resolve(__dirname, 'assets/js/index.js'),
    output: {
      path: path.resolve(__dirname, 'dest'),
      filename: '[name].bundle.js',
      chunkFilename: '[id].chunk.js'
    },
    plugins: [
      new CommonsChunkPlugin({
        filename: 'main.js',
        name: 'main'
      })
    ]
  }
}
