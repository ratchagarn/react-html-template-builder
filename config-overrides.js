const { override, addWebpackAlias, addWebpackPlugin } = require('customize-cra')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const path = require('path')

module.exports = override(
  addWebpackAlias({
    '@components': path.resolve(__dirname, 'src/components'),
    '@config': path.resolve(__dirname, 'src/config'),
    '@layouts': path.resolve(__dirname, 'src/layouts'),
    '@pages': path.resolve(__dirname, 'src/pages'),
    '@styles': path.resolve(__dirname, 'src/styles'),
    '@variables': path.resolve(__dirname, 'src/variables'),
  }),
  addWebpackPlugin(new CleanWebpackPlugin())
)
