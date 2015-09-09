var getConfig = require('hjs-webpack')
var config = require('./letsreact/config');

var webpackConfig = getConfig({
  in: './index.jsx',
  out: 'dist',
  clearBeforeBuild: true,
  html: config.html
});

webpackConfig.devServer.enhanceApp = function(app) {
  require('./server').enhance(app);
};

webpackConfig.devServer.host = '0.0.0.0';
webpackConfig.devServer.contentBase = './public';

webpackConfig.module.loaders[0] = {
  test: /(\.js$)|(\.jsx$)/,
  exclude: /node_modules/,
  loaders: [
    'babel-loader?stage=0'
  ]
}

if (process.argv[1].indexOf('webpack-dev-server') !== -1) {
  webpackConfig.module.loaders[0].loaders.unshift('react-hot')
}

module.exports = webpackConfig;
