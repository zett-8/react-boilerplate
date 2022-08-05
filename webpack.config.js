const path = require('path') // eslint-disable-line
const webpack = require('webpack') // eslint-disable-line
const HtmlWebpackPlugin = require('html-webpack-plugin') // eslint-disable-line
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // eslint-disable-line

module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
  },

  entry: './src/index.tsx',

  output: {
    filename: '[name]-[fullhash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[fullhash][ext]',
  },

  devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: '/node_modules/',
        use: 'ts-loader',
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

  devServer: {
    host: '0.0.0.0',
    port: 8000,
    historyApiFallback: true,
    hot: true,
  },
}
