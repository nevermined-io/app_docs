/* eslint-disable-next-line */
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin')

module.exports = function (_context, _options) {
  return {
    name: 'preload-plugin',
    configureWebpack(_config, _isServer) {
      return {
        plugins: [
          new PreloadWebpackPlugin({
            rel: 'preload',
            as: 'font',
            fileWhitelist: [/\.(woff2?|eot|ttf|otf)(\?.*)?$/i],
          }),
          new PreloadWebpackPlugin({
            rel: 'preload',
            as: 'image',
            fileWhitelist: [/(.*)?home-bg-((?!banner|mobile|products).*)?\.png$/i],
          }),
        ],
      }
    },
  }
}
