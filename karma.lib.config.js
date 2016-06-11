// Karma webpack enabler
var webpack = require('karma-webpack'),
  // original webpack configuration of library
  webpacklibConfig = require('./webpack.lib.config.js');

webpacklibConfig.eslint = {
  // eslint configuration
  configFile: './test.eslintrc'
};

webpacklibConfig.module.preLoaders = [{
    // eslint configuration
    loader: "eslint-loader",
    // Only run `.js` and `.jsx` files through Babel
    test: /\.jsx?$/
  }
];

// loader overrides for karma configuration for webpack
webpacklibConfig.module.loaders = [
  {
    // babel loader for js harmony files
    loader: "babel-loader",
    // Only run `.js` and `.jsx` files through Babel
    test: /\.jsx?$/,
    // exclude node_modules folder
    exclude: /node_modules/,
    // Options to configure babel with
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

// webpack post loaders
webpacklibConfig.module.postLoaders = [{
  // only test jsx files
  test: /\.(js|jsx)$/,
  // exclude node_modules or bower_components or tests folder
  exclude: /(node_modules|bower_components|tests)/,
  // currently this test coverage only gives report of postload which is not es2015 compatible
  // TODO: need to work on isparata or equivalent toolf for es2015 support
  loader: 'istanbul-instrumenter'
}];

module.exports = function (config) {
  config.set({
    // just run once by default
    singleRun: true,
    // use the mocha test framework
    frameworks: [ 'mocha' ],
    // file patterns which must be included to test under the runner
    files: [
        './node_modules/phantomjs-polyfill/bind-polyfill.js',
        'tests/**/*spec.js'
    ],
    // pre-processors for the files which are loaded to process under webpack
    preprocessors: {
        'tests/**/*spec.js': ['webpack'],
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
    reporters: [ 'spec', 'coverage' ],
    // report configuration to be generated from the source
    coverageReporter: {
      // directory for coverage report
      dir: 'build/reports/coverage',
      reporters: [
          { type: 'html', subdir: 'report-html' },
          { type: 'lcov', subdir: 'report-lcov' },
          { type: 'cobertura', subdir: '.', file: 'cobertura.txt' }
      ]
    },
    // webpack configuration assignment for karma
    webpack: webpacklibConfig,
    // webpack server
    webpackServer: {
        // please don't spam the console when running in karma!
        noInfo: true
    }
  });
};