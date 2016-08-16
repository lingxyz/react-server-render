/**
 * Copyright (c) 2014 Meizu bigertech, All rights reserved.
 * http://www.bigertech.com/
 * @author Chester
 * @date  15/8/25
 * @description
 *
 */

var path = require('path');
var node_modules_dir = path.join(__dirname, 'node_modules');

var deps = [
  'react/dist/react.min.js'
];

var config = {
  entry: ['webpack/hot/dev-server', path.resolve(
    __dirname, './app/app.js'
  )],
  resolve: {
    alias: {}
  },
  output: {
    path: path.resolve(__dirname, './app')
  },
  module: {
    noParse: [],
    loaders: [{
      test: /\.js?$/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    }, {
      test: /\.sass$/,
      loader: 'style!css!sass'
    }]
  }
};

deps.forEach(function (dep) {
  var depPath = path.resolve(node_modules_dir, dep);
  config.resolve.alias[dep.split(path.sep)[0]] = depPath;
  config.module.noParse.push(depPath);
});

module.exports = config;