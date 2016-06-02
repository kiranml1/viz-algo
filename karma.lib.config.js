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

module.exports = function (config) {
    config.set({
        singleRun: true, //just run once by default
        frameworks: [ 'mocha' ], //use the mocha test framework
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
            'karma-phantomjs-launcher'
        ],
        browsers: [ 'PhantomJS' ],
        reporters: [ 'dots' ], //report results in this format
        webpack: webpacklibConfig,
        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        }
    });
};