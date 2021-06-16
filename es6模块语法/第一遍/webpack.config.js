const path = require('path')
// 引入模块
const htmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  // 入口
  entry: path.join(__dirname,'./src/main.js'),

  // 出口
  output: {
    // 文件夹目录
    path: path.join(__dirname,'./dist'),
    // 文件名
    filename: 'bundle.js'
  },

  // 环境
  mode: 'production',

  // 添加一个字段  devServer
  devServer:{
    open: true,
    port: 3001
  },

  // 配置loader
  module: {
    rules: [
      // 1. 处理css
      // 注意点 use执行loader 顺序 从右往左
      // css-loader  :  读取css文件内容,将其转化为一个模块
      // style-loader :拿到模块, 创建一个style标签,插入页面中
      {test: /\.css$/,use:['style-loader','css-loader'] },

      // 2. 处理less
      {test: /\.less$/,use:['style-loader','css-loader','less-loader'] },

      // 3. 处理图片
      {test: /\.(jpg|png|gif)$/,use:['url-loader?limit=100000'] },

      // 4. 处理字体图标
      {test: /\.(svg|woff|woff2|ttf|eot)$/,use:['url-loader?limit=100000'] },
    ]
  },

  // 插件
  plugins:[
    // 实例化这个插件
    new htmlWebpackPlugin({
      template: path.join(__dirname,'./src/index.html')
    })
  ]
 }