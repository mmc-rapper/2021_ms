const path  = require('path')

// 引入插件
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 入口
  entry: path.join(__dirname,'./src/main.js'),

  // 出口
  output: {
    path : path.join(__dirname,'./dist'),
    filename : 'bundle.js'
  },

  // 配置
  plugins: [
    // 实例化htmlWebpackPlugin
    new htmlWebpackPlugin({
      template: path.join(__dirname,'./src/index.html')
    })
  ],

  // 服务器插件
  devServer: {
    open: true,
    port: 1996
  },

  // 加载器 loader
  module: {
    rules: [
      {test:/\.css$/,use:['style-loader','css-loader']},
      {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
      // 处理图片
      {test:/\.(jpg|png|gif)$/,use:['url-loader?limit=100000']},

      // 处理字体文件
      {test:/\.(woff|woff2|ttf|eot|svg)$/,use:['url-loader']},
    ]
  },

  // 环境
  mode: 'production'
}