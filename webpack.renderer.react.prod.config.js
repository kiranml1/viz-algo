// webpack
var webpack = require('webpack'),
  // path node module
  path = require('path'),
  // base folder
  rootFolder = 'renderer-react',
  // source folder for source
  libFolder = 'src';

module.exports = {
  // entry files
  entry: './renderer-react/src/main',
  // output files
  output: {
    path: path.join(__dirname, rootFolder, 'build'),
    publicPath: '/build',
    filename: 'bundle.js'
  },
  // module loaders
  module: {
    // pre loaders
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
    // processing loaders for webpack
    loaders:[
      {
        // babel loaders for react project
        loaders: [
          'react-hot',
          'babel?presets[]=es2015,presets[]=stage-0,presets[]=react,plugins[]=transform-runtime'
        ],
        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/,
        // Skip any files outside of your project's `src` directory
        include: [
            path.resolve(__dirname, rootFolder),
            path.resolve(__dirname, libFolder)
        ]
      },
      {
        // css loaders for react project
        test: /\.css$/,
        // Skip any files outside of your project's `src` directory
        include: [
            path.resolve(__dirname, rootFolder),
            path.resolve(__dirname, libFolder)
        ],
        loader: 'style-loader!css-loader'
      },
      {
        // json loader
        loader: 'json-loader',
        // include patterns
        include: [
            path.resolve(__dirname)
        ],
        // test files
        test: /\.json$/
      }
    ]
  },
  // resolve file patterns
  resolve: {
    extensions: ['', '.js', '.json']
  },
  // dev mode
  devtool: 'source-map',
  // plugins for webpack
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