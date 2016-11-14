var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),//入口文件就是index.js编译es6版本的js
    output: {
        // path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'//出口文件是这个文件翻译成es5版本的js
    },

module: {
    loaders: [
        { test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    }
};
