const path = require('path');

const config = {
  entry: path.join(__dirname, '/public/scripts/index.js'),
  output: {
    path: path.join(__dirname, './build'),
    filename: 'bundle.[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
    ],
  },
};

module.exports = config;
