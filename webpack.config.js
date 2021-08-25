const path = require('path');

module.exports = {
   entry: './src/index.js',
   output: {
      path: __dirname + '/dist/assets',
      filename: 'bundle.js'
   },
   devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      publicPath: '/assets/',
      disableHostCheck: true,
      hot: true
   },
   module: {
      rules: [{
         test: /\.js$/,
         exclude: /node_modules/,
         use: {
            loader: 'babel-loader',
            options: {
               presets: ['@babel/preset-env']
            }
         }
      }]
   }
};