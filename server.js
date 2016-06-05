/* eslint-disable no-var, strict */
var webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    config = require('./webpack.renderer.react.config.js');

/**
 * webpack react dev server for hot loading
 * which is used to run the dev server with npm command
 * npm run react-dev-server
 */
new WebpackDevServer(webpack(config), {
  contentBase: 'renderer-react',
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(5000, 'localhost', function (err) {
  if (err) {
      console.log(err);
  }
  console.log('Listening at localhost:5000');
});
