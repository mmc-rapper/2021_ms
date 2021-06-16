<template>
<el-container>
  <el-header>
    <el-row>
      <el-col :span="8">
        <img src="../../assets/images/logo.png" alt="">
      </el-col>
      <el-col :span="8"><h1>电商平台管理系统</h1></el-col>
      <el-col :span="8" class="clo">恭喜35期学员平均月薪2w <a href="#">退出</a></el-col>
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

}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  html,body,#app {
    height: 100%;
  }

  .el-container {
    height: 100%;
    min-width: 900px;
  }

  .el-header {
    background: #b3c1cd;
    padding: 0;
  }

  .el-aside {
    background-color: #545c64;
  }
  .el-main {
    background-color: #eaeef1;
  }
  .el-col {
    height: 60px;
  }
  h1 {
    color: #fff;
    text-align: center;
    line-height: 60px;
    font-size: 28px;
  }

  .clo {
    text-align: right;
    line-height: 60px;
    padding-right: 30px;
  }
  a {
    color: #daa520;
    text-decoration: none;
  }
</style>
