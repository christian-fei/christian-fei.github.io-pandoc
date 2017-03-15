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
    module: {
      loaders: [
        {
          test: /\.(jpe?g|png|gif|svg|ico)$/i,
          loader: 'image?bypassOnDebug&optimizationLevel=9&interlaced=false'
        }
      ]
    },
    plugins: [
      new CommonsChunkPlugin({
        filename: 'main.min.js',
        name: 'main',
        minify: true
      }),
      new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        compress: false
      })
    ]
  }
}
