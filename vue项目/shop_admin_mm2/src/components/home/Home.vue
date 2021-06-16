<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="8"><img src="@/assets/images/logo.png" alt=""></el-col>
        <el-col :span="8"><h2>电商后台管理系统</h2></el-col>
        <el-col :span="8" class="right">欢迎上海前端35期荣获国家金奖 <a href="#">退出</a></el-col>
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

<style  scoped>
* {
  margin: 0;
}
.el-container {
  height: 100%;
  min-width: 1200px;
}
.el-row {
}
.el-header {
  padding: 0;
  background-color: #b3c1cd;
}
h2 {
    color: #fff;
    font-size: 28px;
    line-height: 60px;
    text-align: center;
}
.right {
  line-height: 60px;
  text-align: right;
  padding-right: 40px;
}
a {
  text-decoration: none;
  color: #daa520;
}

.el-aside {
  background-color: #545c64;
}

.el-main {
  background-color: #eaeef1;
}
</style>
