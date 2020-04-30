const { override, addWebpackAlias, addWebpackPlugin } = require('customize-cra')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const path = require('path')

module.exports = override(
  addWebpackAlias({
    '@components': path.resolve(__dirname, 'src/components'),
    '@variables': path.resolve(__dirname, 'src/variables'),
  }),
  addWebpackPlugin(new CleanWebpackPlugin()),
)
