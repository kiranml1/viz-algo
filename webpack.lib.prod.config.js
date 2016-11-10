'use strict';

// framework name
var libraryName = require('./package.json').name,
  // webpack
  webpack = require('webpack'),
  // uglify js webpack plug-in
  UglifyJsPlugin = webpack.optimize.UglifyJsPlugin,
  // output file for the code
  outputFile,
  // webpack configuration for production
  prodConfig = require('./webpack.lib.config.js');

// output file for the code
outputFile = libraryName + '.min.js';
prodConfig.output.filename = outputFile;

// enable uglify js plug-in for webpack configuration
prodConfig.plugins.push(new UglifyJsPlugin({
  minimize: true,
  compress: {
      warnings: false
  }
}));

module.exports = prodConfig;
