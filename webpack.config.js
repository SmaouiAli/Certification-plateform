// const path = require('path')
// const webpack = require('webpack')

// module.exports = {
//   entry: path.resolve(__dirname, 'client/src', 'index.js'),
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js'
//   },
//   devServer: {
//     contentBase: path.resolve(__dirname, 'dist'),
//     open: true,
//     clientLogLevel: 'silent',
//     port: 5000
//   },
//   module: {
//     rules: [
//       {
//         test:/\.(js|jsx)?$/,
//         include: path.resolve(__dirname, 'src'),
//         exclude: /node_modules/,
//         use: [{
//           loader: 'babel-loader',
//           options: {
//             presets: [
//               ['@babel/preset-env', {
//                 "targets": "defaults" 
//               }],
//               '@babel/preset-react',
//             ]
//           }
//         }]
//       },
      
//     ]
//   },
//   resolve: {
//     extensions: ['*', '.js', '.jsx'],
//   },
// }

var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/dist');
module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};