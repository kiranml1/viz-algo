module.exports = function (config) {
    config.set({
        browsers: [
            'PhantomJS'
        ],
        frameworks: [
            'jasmine'
        ],
        files: [
            {
                pattern: 'tests.webpack.js',
                watched: false
            }
        ],
        plugins: [
            'karma-phantomjs-launcher',
            'karma-webpack'
        ],
        preprocessors: {
            'tests.webpack.js': [
                'webpack'
            ]
        },
        reporters: [
            'dots'
        ],
        singleRun: true,
        webpack: {
            module: {
                loaders: [
                    { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
                ]
            },
            watch: true
        },
        webpackServer: {
            noInfo: true
        }
    });
};