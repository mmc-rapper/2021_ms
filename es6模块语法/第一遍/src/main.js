// // 利用es6的import引用
// import $ from "jquery";

// // 引入css模块
// import "./css/index.css"

// // 引入less模块
// import "./css/index.less"

// // 引入字体图标的样式
// import "./css/iconfont/iconfont.css"

// $('li:odd').css({
//   background: 'pink'
// })
// $('li:even').css({
//   background: 'red'
// })

// let obj = {
//   name: 'zs',
//   age: 20
// }

// var o = {...obj}
// console.log(o);

/**  
 * 1. export default 和 import
 * 2. export 和 import
 * 3. import axios from 'axios'
 */

// 1. export default 和 import
// res 名字可以随意取
// import res from './a.js'
// console.log(res);

// 2. export 和 import
// 方式1：解构{}
import { login,register,age as xx} from "./a";
// login()
// register()
// console.log(xx);

// 方式2：将a.js里的所有东西都导入，用 * as xx
import * as res from './a.js'
console.log(res);
res.login()
res.register()
console.log(res.age); 

// 3. import axios from 'axios'