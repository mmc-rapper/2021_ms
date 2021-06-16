<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="8"><img src="@/assets/images/logo.png" alt=""></el-col>
        <el-col :span="8"><h2>电商后台管理系统</h2></el-col>
        <el-col :span="8" class="right">欢迎上海前端100期星曜会员 <a href="#">退出</a></el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-container {
  height: 100%;
}
.el-header {
  padding: 0;
  background-color: #b3c1cd;
}
h2 {
  color: #fff;
  font-size: 28px;
  text-align: center;
  line-height: 60px;
}
.right {
  text-align: right;
  line-height: 60px;
  padding-right: 40px;
}
a {
  text-decoration: none;
  color: #dda520;
}
.el-aside {
  background-color: #545c64;
}
.el-main {
  background-color: #eaeef1;
}
</style>
