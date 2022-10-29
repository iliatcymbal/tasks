const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new HTMLPlugin({
      title: 'React',
      template: path.resolve(__dirname, 'index.html')
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      name(module) {
        const moduleFileName = module
          .identifier()
          .split('/')
          .reduceRight((item) => item);

        return moduleFileName.replace(/\.\w+$/, '');
      },
    }
  },
  devServer: {
    port: 9000,
    hot: true,
  }
};
