/* eslint-disable no-var, strict, no-console */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const configuration = require('./webpack.renderer.react.config.js');

/**
 * webpack react dev server for hot loading
 * which is used to run the dev server with npm command
 * npm run react-dev-server
 */
new WebpackDevServer(webpack(configuration), {
  contentBase: 'renderer-react',
  publicPath: configuration.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(5000, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:5000');
});
