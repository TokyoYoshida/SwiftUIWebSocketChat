const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = [{
  mode: 'development',
  entry: {
    client: './js/client.ts',
  },
  output: {
    filename: '[name].js',
    path: `${__dirname}/public/js`
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
},{
  mode: 'development',
  entry: './js/server.ts',
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts', '.js',
    ],
  },
  output: {
    filename: 'server.js',
    path: path.join(__dirname, 'dist')
  }
}];
