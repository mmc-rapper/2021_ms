// 引入jquery
import $ from 'jquery'

// 引入css
import './css/index.css'

// 引入less
import './css/index.less'

// 引入字体文件
import './css/iconfont/iconfont.css'

$('li:odd').css({
  background: 'blue'
})
$('li:even').css({
  background: 'red'
})