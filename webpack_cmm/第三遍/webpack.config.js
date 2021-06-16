// 用node语法来写
const path = require('path')

// 引入插件
const htmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  // 入口
  entry : path.join(__dirname,'./src/main.js'),

  // 出口
  output : {
    path : path.join(__dirname,'./dist/'),

    filename : 'bundle.js'
  },

  // 配置插件
  plugins: [
    // 实例化htmlWebPackPlugin
    new htmlWebPackPlugin({
      template: path.join(__dirname,'./src/index.html')
    })
  ],

  devServer: {
    open: true,
    port: 8090
  },

  // 加载器 loader
  module: {
    rules: [
      {test:/\.css$/,use:['style-loader','css-loader']},

      // 处理less
      {test:/\.less$/,use:['style-loader','css-loader','less-loader']},

      // 处理图片
      {test:/\.(jpg|png|gif)$/,use:['url-loader?limit=100000']},
      // 处理字体
      {test:/\.(ttf|woff|svg|eot)$/,use:['url-loader?limit=100000']},
    ]
  },

  // 环境
  mode: 'production'

}