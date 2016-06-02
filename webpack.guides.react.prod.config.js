var webpack = require('webpack'),
    path = require('path'),
    rootFolder = 'guides',
    libFolder = 'src';

module.exports = {
    entry: './guides/src/main',
    output: {
        path: path.join(__dirname, rootFolder, 'build'),
        publicPath: '/build',
        filename: 'bundle.js'
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
        loaders:[
            {
                loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react,plugins[]=transform-runtime'],
                // Only run `.js` and `.jsx` files through Babel
                test: /\.jsx?$/,
                // Skip any files outside of your project's `src` directory
                include: [
                    path.resolve(__dirname, rootFolder),
                    path.resolve(__dirname, libFolder)
                ]
            },
            {
                test: /\.css$/,
                // Skip any files outside of your project's `src` directory
                include: [
                    path.resolve(__dirname, rootFolder),
                    path.resolve(__dirname, libFolder)
                ],
                loader: 'style-loader!css-loader'
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
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};