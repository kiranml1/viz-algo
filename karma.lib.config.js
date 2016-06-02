var webpack = require('karma-webpack'),
    webpacklibConfig = require('./webpack.lib.config.js');

webpacklibConfig.module.loaders = [
    {
        loader: "babel-loader",
        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,
        exclude: /node_modules/,
        // Options to configure babel with
        query: {
            plugins: ['transform-runtime'],
            presets: ['es2015', 'stage-0', 'react']
        }
    },
    {
        loader: 'json-loader',
        test: /\.json$/
    }
];

webpacklibConfig.module.postLoaders = [{
    test: /\.(js|jsx)$/, exclude: /(node_modules|bower_components|tests)/,
    loader: 'istanbul-instrumenter'
}];

module.exports = function (config) {
    config.set({
        // just run once by default
        singleRun: true,
        // use the mocha test framework
        frameworks: [ 'mocha' ],
        files: [
            './node_modules/phantomjs-polyfill/bind-polyfill.js',
            'tests/**/*spec.js'
        ],
        preprocessors: {
            'tests/**/*spec.js': ['webpack'],
            'src/**/*.js': ['webpack']
        },
        plugins: [
            webpack,
            'karma-mocha',
            'karma-phantomjs-launcher',
            'karma-coverage',
            'karma-spec-reporter'
        ],
        browsers: [ 'PhantomJS' ],
        // report results in this format
        reporters: [ 'spec', 'coverage' ],
        coverageReporter: {
            dir: 'build/reports/coverage',
            reporters: [
                { type: 'html', subdir: 'report-html' },
                { type: 'lcov', subdir: 'report-lcov' },
                { type: 'cobertura', subdir: '.', file: 'cobertura.txt' }
            ]
        },
        webpack: webpacklibConfig,
        webpackServer: {
            // please don't spam the console when running in karma!
            noInfo: true
        }
    });
};