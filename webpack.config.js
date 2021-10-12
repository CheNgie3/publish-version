
let path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'lib'),
      filename: 'PublishVersion.js',
      library: 'PublishVersion',
      // libraryTarget: 'commonjs'
      globalObject: 'this', // 定义全局变量,兼容node和浏览器运行，避免出现"window is not defined"的情况
      libraryTarget: 'umd' // 定义打包方式Universal Module Definition,同时支持在CommonJS、AMD和全局变量使用
    },
    mode:'production',
    plugins:[
    ],
    resolve: {
      alias: {
        fs: false,
        path:false,
        assert:false,
        child_process:false,
        readline:false
      },
    }
  };