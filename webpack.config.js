const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/boxplot.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    library: '',
    libraryTarget: 'commonjs'
  },
  // externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/react']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};