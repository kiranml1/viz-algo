'use strict';

var libraryName = 'Blog',
    webpack = require('webpack'),
    UglifyJsPlugin = webpack.optimize.UglifyJsPlugin,
    outputFile,
    prodConfig = require('./webpack.lib.config.js');

outputFile = libraryName + '.min.js';

prodConfig.output.filename = outputFile;
prodConfig.plugins.push(new UglifyJsPlugin({
    minimize: true,
    compress: {
        warnings: false
    }
}));

module.exports = prodConfig;