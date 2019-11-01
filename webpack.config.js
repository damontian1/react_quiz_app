module.exports = {
  entry: [
    './src/index.jsx'
  ],
  output: {
    filename: "./bundle.js"
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-1', 'react']
        }
      }
    ]
  }
}