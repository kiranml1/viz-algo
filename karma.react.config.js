var path = require('path');

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'renderer-react/tests/**/*.js'
        ],
        preprocessors: {
            'renderer-react/src/**/*.js': ['webpack', 'sourcemap'],
            'renderer-react/tests/**/*.js': ['webpack', 'sourcemap']
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
                ],
                postLoaders : [{
                    test: /\.(js|jsx)$/, exclude: /(node_modules|bower_components|tests)/,
                    loader: 'istanbul-instrumenter'
                }]
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
            'karma-phantomjs-launcher',
            'karma-coverage',
            'karma-spec-reporter'
        ],
        babelPreprocessor: {
            options: {
                presets: ['airbnb']
            }
        },
        // report results in this format
        reporters: [ 'spec', 'coverage' ],
        coverageReporter: {
            dir: 'renderer-react/coverage',
            reporters: [
                { type: 'html', subdir: 'report-html' },
                { type: 'lcov', subdir: 'report-lcov' },
                { type: 'cobertura', subdir: '.', file: 'cobertura.txt' }
            ]
        },
        browsers: ['PhantomJS'],
        singleRun: true
    })
};