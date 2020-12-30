const path = require('path')

module.exports = {
  mode: 'production',
  target: 'web',
  devtool: 'inline-source-map',
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/',
    filename: 'instaembed.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /(node_modules | .git | dist)/,
      }
    ]
  },
   optimization: {
        minimize: true,
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
    }
}

