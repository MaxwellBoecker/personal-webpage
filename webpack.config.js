require('dotenv').config();
const webpack = require('webpack');

module.exports = {
  plugins: [
    // ...
    new webpack.DefinePlugin({
      'process.env': {
        'EMAIL': JSON.stringify(process.env.EMAIL),
      }
    })
  ],
  entry: './src/Index.jsx',
  output: {
    filename: 'app.js',
    path: __dirname + '/build',
    publicPath: '/'
  },
  devServer: {
    contentBase: './build'
  },
  devtool: 'eval-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(pdf|png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  }
}
