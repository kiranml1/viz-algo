var webpack = require('webpack'),
    path = require('path'),
    rootFolder = 'guides';

console.log(__dirname + '/' + rootFolder + '/build');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:5000',
        'webpack/hot/dev-server',
        './guides/src/main'
    ],
    output: {
        path: __dirname + '/' + rootFolder + '/build',
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
                include: path.resolve(__dirname, rootFolder)
            },
            {
                test: /\.css$/,
                // Skip any files outside of your project's `src` directory
                include: path.resolve(__dirname, rootFolder),
                loader: 'style-loader!css-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js','.json']
    },
    devtool: 'eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};