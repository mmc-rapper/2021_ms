// 利用es6的import引用
import $ from "jquery";

// 引入css模块
import "./css/index.css"

// 引入less模块
import "./css/index.less"

// 引入字体图标的样式
import "./css/iconfont/iconfont.css"

$('li:odd').css({
  background: 'pink'
})
$('li:even').css({
  background: 'red'
})

let obj = {
  name: 'zs',
  age: 20
}

var o = {...obj}
console.log(o);