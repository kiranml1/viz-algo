var path = require('path');

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'guides/tests/**/*.js'
        ],
        preprocessors: {
            'guides/src/**/*.js': ['webpack', 'sourcemap'],
            'guides/tests/**/*.js': ['webpack', 'sourcemap']
        },
        webpack: {
            // kind of a copy of your webpack config
            devtool: 'inline-source-map',
            // just do inline source maps instead of the default
            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        loader: 'babel',
                        exclude: path.resolve(__dirname, 'node_modules'),
                        query: {
                            presets: ['es2015', 'stage-0', 'react']
                        }
                    },
                    {
                        test: /\.json$/,
                        loader: 'json'
                    }
                ]
            },
            externals: {
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true
            }
        },
        webpackServer: {
            // please don't spam the console when running in karma!
            noInfo: true
        },
        plugins: [
            'karma-webpack',
            'karma-jasmine',
            'karma-sourcemap-loader',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher'
        ],
        babelPreprocessor: {
            options: {
                presets: ['airbnb']
            }
        },
        reporters: ['dots'],
        browsers: ['PhantomJS'],
        singleRun: true
    })
};