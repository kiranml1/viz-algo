// webpack
var webpack = require('webpack'),
  // path
  path = require('path'),
  // TODO: need to add linter to pre-loader for webpack
  sassLintPlugin = require('sasslint-webpack-plugin'),
  // base folder for webpack configuration
  rootFolder = 'renderer-react',
  // library folder of sourcew
  libFolder = 'src';

module.exports = {
  // entry files
  entry: [
    'webpack-dev-server/client?http://localhost:5000',
    'webpack/hot/dev-server',
    './renderer-react/src/main'
  ],
  // ourput files
  output: {
    path: __dirname + '/' + rootFolder + '/build',
    publicPath: '/build',
    filename: 'bundle.js'
  },
  // modules for webpack bundling
  module: {
    // pre-loaders for webpack
    preLoaders: [
      {
        // eslint processors
        loader: "eslint-loader",
        // Skip any files outside of your project's `src` directory
        include: [
            path.resolve(__dirname, rootFolder)
        ],
        // Only run `.js` and `.jsx` files through Babel
        test: /\.jsx?$/
      }
    ],
    // processing loaders for react
    loaders:[
      {
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
        test: /\.css$/,
        // Skip any files outside of your project's `src` directory
        include: [
          path.resolve(__dirname, rootFolder),
          path.resolve(__dirname, libFolder)
        ],
        loader: 'style-loader!css-loader'
      },
      {
        // json loaders
        loader: 'json-loader',
        // include patterns
        include: [
            path.resolve(__dirname)
        ],
        // test file patterns
        test: /\.json$/
      },
      {
        // sass loader configuration
        test: /\.scss$/,
        // loaders for scss
        loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      }
    ]
  },
  // sass loader configuration
  sassLoader: {
    // scss include patterns
    includePaths: [
      path.resolve(__dirname, "./src"),
      path.resolve(__dirname, "./renderer-react")
    ]
  },
  // resolve file patterns
  resolve: {
    extensions: ['', '.js', '.json', '.scss']
  },
  // dev mode
  devtool: 'source-map',
  // plugins
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};