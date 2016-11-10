'use strict';

// framework name
var libraryName = require('./package.json').name,
  // webpack
  webpack = require('webpack'),
  // path
  path = require('path'),
  // plugins array
  plugins = [],
  // base folder for this configuration
  rootFolder,
  // output folder for this configuration
  outputFolder,
  // output file for the code
  outputFile;

// TODO: need ro refactor if it can be used for global env variables in application code
var definePlugin = new webpack.DefinePlugin({
  // dev mode
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  // pre-release candidate
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

// define plug-in is included in plug-ins
plugins.push(definePlugin);

// output file for the library
outputFile = libraryName + '.js';
// base folder
rootFolder = 'src';
//output folder
outputFolder = 'lib';

// web pack configuration
module.exports = {
  // entry files
  entry: [
    // Set up an ES6-ish environment
    'babel-polyfill',
    // Add your application's scripts below
    path.resolve(__dirname, rootFolder, 'index')
  ],
  // debug mode
  debug: true,
  // dev tool configuration
  devtool: 'source-map',
  // eslint configuration
  eslint: {
    configFile: './.eslintrc'
  },
  // output files
  output: {
    // path
    path: path.resolve(__dirname, outputFolder),
    // file name
    filename: outputFile,
    // library name
    library: libraryName,
    // library target type of module
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    preLoaders: [
      {
        // eslint configuration
        loader: "eslint-loader",
        // Skip any files outside of your project's `src` directory
        include: [
          path.resolve(__dirname, rootFolder)
        ],
        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/
      }
    ],
    loaders: [
      {
        // babel loader configuration
        loader: "babel-loader",
        // Skip any files outside of your project's `src` directory
        include: [
            path.resolve(__dirname, rootFolder)
        ],
        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,
        // Options to configure babel with
        query: {
            plugins: ['transform-runtime'],
            presets: ['es2015', 'stage-0', 'react']
        }
      }, {
        // json configuration
        loader: 'json-loader',
        // paths to current folder
        include: [
            path.resolve(__dirname)
        ],
        // test for filters
        test: /\.json$/
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  },
  plugins: plugins
};