const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  module: {
      rules:[
      {
        test : /\.js$/,
        exclude:/node_modules/,
        use :{
          loader:'babel-loader',
        },
      },
      {
        test: /\.css$/, // Process .css files
        use: [
          'style-loader', // Injects styles into the DOM
          'css-loader' // Interprets @import and url() like import/require() and will resolve them.
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin ({
      template:'./public/index.html',
      filename:'./index.html',
    }),
  ],
};
