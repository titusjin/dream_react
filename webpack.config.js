var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
  entry: {
    IndexBundle : './src/components/IndexPage/IndexApp'
  },
  output: {
  	path: './out',
    filename: '[name].js'  
  },
  module: {
  	loaders: [
      // To transfer jsx into pure js, we can use jsx-loader or babel-loader
      // {test: /\.js$/ , loader: 'jsx-loader?insertPragma=React.DOM&harmony'},
      {test: /\.js$/, loader: 'babel-loader'},

      // To make the css as one js module that can be import by using require(xxx.css) 
      // we need style-loader pipe with css-loader with the symbol "!"
      {test: /\.css$/, loader: 'style-loader!css-loader'},

      // url-loader will taking care of the png/jpg...etc files inside ur css file
      // and make it as data-url embeded into ur page
      // For better understanding of the url-loader, visit the official site: https://github.com/webpack/url-loader
      // {test: /\.jpg$/, loader: "url-loader?limit=8192"},
      {test: /\.(png|jpg)$/, loader: "file"},
    ]
  },
  resolve: {
    // you can now require('fileName') instead of require('file.coffee') or require('file.js')...etc.
    extensions: ['', '.js', '.json', '.coffee'] 
  },
  plugins: [commonsPlugin]
};
