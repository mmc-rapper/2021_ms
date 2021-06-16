let str = 'abc'

// 注意点：只能导出一个 default 默认
// export default str

// 逻辑模块
// 登录
// let login = () => {
//   console.log('登录');
// }

// // 注册
// let register = () => {
//   console.log('注册');
// }

// 导出函数
export let login = () => {
  console.log('登录');
}
export let register = () => {
  console.log('注册');
}
export let age = 30