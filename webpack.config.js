var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');


module.exports = {
  entry: {
    IndexBundle : './src/IndexPage/IndexApp.js',
    HeaderBundle : './src/HeaderPage/HeaderApp.js',
    FooterBundle : './src/FooterPage/FooterApp.js'
  },
  output: {
  	path: './out',
    filename: '[name].js'      
  },
  module: {
  	loaders: [
  		{test: /\.js$/ , loader: 'jsx-loader?insertPragma=React.DOM&harmony'}
  	]
  },
  plugins: [commonsPlugin]
};
