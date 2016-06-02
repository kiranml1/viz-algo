'use strict';

var libraryName = 'Blog',
    webpack = require('webpack'),
    path = require('path'),
    plugins = [],
    rootFolder,
    outputFile;

var definePlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
    __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

plugins.push(definePlugin);

outputFile = libraryName + '.js';
rootFolder = 'src';

module.exports = {
    entry: [
        // Set up an ES6-ish environment
        'babel-polyfill',
        // Add your application's scripts below
        './' + rootFolder + '/index'
    ],
    debug: true,
    devtool: 'source-map',
    eslint: {
        configFile: './.eslintrc'
    },
    output: {
        path: __dirname + '/lib',
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        preLoaders: [
            {
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
                loader: 'json-loader',
                include: [
                    path.resolve(__dirname)
                ],
                test: /\.json$/
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json']
    },
    plugins: plugins
};