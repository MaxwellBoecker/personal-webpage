const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = () => ({
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed), // it will automatically pick up key values from .env file
    }),
  ],
  entry: './src/Index.jsx',
  output: {
    filename: 'app.js',
    path: `${__dirname}/build`,
    publicPath: '/',
  },
  devServer: {
    contentBase: './build',
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
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(pdf|png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
});
// };
// {
//   entry: './src/Index.jsx',
//   output: {
//     filename: 'app.js',
//     path: __dirname + '/build',
//     publicPath: '/'
//   },
//   devServer: {
//     contentBase: './build'
//   },
//   devtool: 'eval-source-map',
//   mode: 'development',
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react']
//           }
//         }
//       },
//       {
//         test: /\.(pdf|png|jpe?g|gif)$/i,
//         use: [
//           {
//             loader: 'file-loader',
//           },
//         ],
//       },
//     ]
//   }
// }
