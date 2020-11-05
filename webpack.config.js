const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },

  entry: './src/index.jsx',

  output: {
    filename: '[name]-[hash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext]',
  },

  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
  },

  devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        use: 'babel-loader'
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        include: path.resolve(__dirname, 'src'),
        test: /\.json?$/,
        use: {
          loader: 'json-loader',
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        type: 'asset/resource'
      },
    ]
  },

  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial'
      // test: '/node_modules/',
      // enforce: true
    }
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ja/),
    // new webpack.NormalModuleReplacementPlugin(
    //   /moment-timezone\/data\/packed\/latest\.json/,
    //   require.resolve('./doc/timezone-definitions.json')
    // ),
    // new BundleAnalyzerPlugin()
  ]
}
