// node's path module
var path = require('path');

// karma runner configuration
module.exports = function(config) {
  config.set({
    // base folder for karma runner
    basePath: '',
    // framework for karma test execution
    frameworks: ['jasmine'],
    // files to be included for karma configuration
    files: [
      'renderer-react/tests/**/*.js'
    ],
    // pre-processors for source and tests files with webpoack to transpile to es6
    preprocessors: {
      'renderer-react/src/**/*.js': ['webpack', 'sourcemap'],
      'renderer-react/tests/**/*.js': ['webpack', 'sourcemap']
    },
    webpack: {
      // just do inline source maps instead of the default
      devtool: 'inline-source-map',
      eslint: {
        // eslint configuration
        configFile: './test.eslintrc'
      },
      module: {
        // preloader
        preLoaders: [
          {
            // eslint configuration
            loader: "eslint-loader",
            // Only run `.js` and `.jsx` files through Babel
            test: /\.jsx?$/
          }
        ],
        // loaders
        loaders: [
          {
            // only test js harmony files
            test: /\.js$/,
            // babel loader for webpack
            loader: 'babel',
            // exclude node_modules
            exclude: path.resolve(__dirname, 'node_modules'),
            // babel presets for transpilers - es2015 (ES2015/ES6), stage-0 for es7 support, react for react jsx support
            query: {
                presets: ['es2015', 'stage-0', 'react']
            }
          },
          {
            // only test and verify json files
            test: /\.json$/,
            // json loader for web-pack
            loader: 'json'
          }
        ],
        postLoaders : [{
          // only test jsx files
          test: /\.(js|jsx)$/,
          // exclude node_modules or bower_components or tests folder
          exclude: /(node_modules|bower_components|tests)/,
          // currently this test coverage only gives report of postload which is not es2015 compatible
          // TODO: need to work on isparata or equivalent toolf for es2015 support
          loader: 'istanbul-instrumenter'
        }]
      },
      // externals for react environment in unit tests with enzyme
      externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
    },
    // webpack server
    webpackServer: {
        // please don't spam the console when running in karma!
        noInfo: true
    },
    // karma plugins for test runner
    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-spec-reporter'
    ],
    // babel preprocessor
    babelPreprocessor: {
      options: {
        presets: ['airbnb']
      }
    },
    // report results in this format
    reporters: [ 'spec', 'coverage' ],
    // report configuration to be generated from the source
    coverageReporter: {
      // directory for coverage report
      dir: 'renderer-react/coverage',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        { type: 'cobertura', subdir: '.', file: 'cobertura.txt' }
      ]
    },
    // browsers to be used for test execution
    browsers: ['PhantomJS'],
    // just run once by default
    singleRun: true
  })
};