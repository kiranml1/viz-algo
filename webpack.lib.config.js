'use strict';

// framework name
// TODO: need to pick the library name from package.json
var libraryName = 'Blog',
  // webpack
  webpack = require('webpack'),
  // path
  path = require('path'),
  // sass linter plugin
  sassLintPlugin = require('sasslint-webpack-plugin'),
  // plugins array
  plugins = [],
  // base folder for this configuration
  rootFolder,
  // output file for the code
  outputFile;

// TODO: need to add linter to pre-loader for webpack
var sasslint = new sassLintPlugin({
  context: './src/',
});

// TODO: need ro refactor if it can be used for global env variables in application code
var definePlugin = new webpack.DefinePlugin({
  // dev mode
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  // pre-release candidate
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

// define plug-in is included in plug-ins
plugins.push(definePlugin);

plugins.push(sasslint);

// output file for the library
outputFile = libraryName + '.js';
// base folder
rootFolder = 'src';

// web pack configuration
module.exports = {
  // entry files
  entry: [
    // Set up an ES6-ish environment
    'babel-polyfill',
    // Add your application's scripts below
    './' + rootFolder + '/index'
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
    path: __dirname + '/lib',
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
      },
      {
        // json configuration
        loader: 'json-loader',
        include: [
            path.resolve(__dirname)
        ],
        test: /\.json$/
      },
      {
        // scss loaders and compilers
        test: /\.scss$/,
        loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      }
    ]
  },
  // scss loaders and compilers
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, "./src")
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss']
  },
  plugins: plugins
};