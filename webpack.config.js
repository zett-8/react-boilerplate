const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  entry: './src/index.js',

  output: {
    filename: '[name]-[hash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext]',
  },

  devServer: {
    historyApiFallback: true,
    hot: true,
  },

  devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        use: 'babel-loader',
      },
    ],
  },

  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial',
    },
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
}
