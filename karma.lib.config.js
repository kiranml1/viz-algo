// karma webpack enabler
var webpack = require('karma-webpack'),
  path = require('path'),
  // original webpack configuration of library
  webpackLibConfig = require('./webpack.lib.config.js');

webpackLibConfig.eslint = {
  // eslint configuration
  configFile: './.eslintrc'
};

webpackLibConfig.module.preLoaders = [{
    // eslint configuration
    loader: 'eslint-loader',
    // path for source folder
    include: path.resolve('test/'),
    // Only run `.js` and `.jsx` files through Babel
    test: /\.jsx?$/
  }, {
  // transpile and instrument only testing sources with isparta
    test: /\.jsx?$/,
    include: path.resolve('src/'),
    loader: 'isparta'
  }
];

// loader overrides for karma configuration for webpack
webpackLibConfig.module.loaders = [
  {
    // babel loader for js harmony files
    loader: 'babel-loader',
    // Only run `.js` and `.jsx` files through Babel
    test: /\.jsx?$/,
    // exclude node_modules folder
    exclude: /node_modules/,
    // options to configure babel with
    query: {
      // plugin for karma to trandform the js harmony files on runtime
      plugins: ['transform-runtime'],
      // babel presets for transpilers - es2015 (ES2015/ES6), stage-0 for es7 support, react for react jsx support
      presets: ['es2015', 'stage-0', 'react']
    }
  },
  {
    // json loader for web-pack
    loader: 'json-loader',
    // only test and verify json files
    test: /\.json$/
  }
];

// *optional* isparta options: istanbul behind isparta will use it
webpackLibConfig.isparta =  {
  embedSource: true,
    noAutoWrap: true,
    // these babel options will be passed only to isparta and not to babel-loader
    babel: {
    presets: ['es2015', 'stage-0', 'react']
  }
};

module.exports = function (config) {
  config.set({
    // just run once by default
    singleRun: true,
    // use the mocha test framework
    frameworks: [ 'mocha' ],
    // file patterns which must be included to test under the runner
    files: [
        './node_modules/phantomjs-polyfill/bind-polyfill.js',
        'tests/**/*.js'
    ],
    // pre-processors for the files which are loaded to process under webpack
    preprocessors: {
        'tests/**/*.js': ['webpack'],
        'src/**/*.js': ['webpack']
    },
    // plug-ins which should be provided for running tests
    plugins: [
        webpack,
        'karma-mocha',
        'karma-phantomjs-launcher',
        'karma-coverage',
        'karma-spec-reporter'
    ],
    // browsers to be used for test execution
    browsers: [ 'PhantomJS' ],
    // report results in this format
    reporters: [ 'dots', 'coverage' ],
    // report configuration to be generated from the source
    coverageReporter: {
      reporters: [
        {
          type: 'text-summary'
        }, {
          type: 'html',
          dir: 'reports/coverage'
        }
      ]
    },
    // webpack configuration assignment for karma
    webpack: webpackLibConfig,
    // webpack server
    webpackServer: {
        // please don't spam the console when running in karma!
        noInfo: true
    }
  });
};