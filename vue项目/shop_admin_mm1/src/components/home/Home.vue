<template>
<el-container>
  <el-header>
    <el-row>
      <el-col :span="8">
        <img src="../../assets/images/logo.png" alt="">
      </el-col>
      <el-col :span="8"><h1>电商平台管理系统</h1></el-col>
      <el-col :span="8" class="clo">恭喜35期学员平均月薪2w <a href="#" @click.prevent="logout">退出</a></el-col>
    </el-row>
  </el-header>
  <el-container>
    <el-aside width="200px">
      <!-- 左侧导航 -->
      <el-row class="tac">
        <el-col :span="24">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :router='true'>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item index="users">用户列表</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>权限管理</span>
              </template>
                <el-menu-item index="roles">角色列表</el-menu-item>
                <el-menu-item index="rights">权限列表</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>商品管理</span>
              </template>
                <el-menu-item index="3-1">商品列表</el-menu-item>
                <el-menu-item index="3-2">分类参数</el-menu-item>
                <el-menu-item index="3-3">商品分类</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>订单管理</span>
              </template>
                <el-menu-item index="4-1">订单列表</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>数据统计</span>
              </template>
                <el-menu-item index="5-1">数据报表</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$confirm('此操作将退出登录, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 1. 删除token
        localStorage.removeItem('token')
        // 2. 跳转到login页面
        this.$router.push('/login')
        // 3. 提示退出成功
        this.$message({
          type: 'success',
          message: '退出成功!',
          duration: 800
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出',
          duration: 800
        })
      })
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="less" scoped>
  .el-container {
    height: 100%;
    min-width: 900px;
    .el-header {
      background: #b3c1cd;
      padding: 0;
      .el-col {
        height: 60px;
      }
      .clo {
        text-align: right;
        line-height: 60px;
        padding-right: 30px;
      }
    }
    .el-aside {
      background-color: #545c64;
    }
    .el-main {
      background-color: #eaeef1;
    }
  }
  h1 {
    color: #fff;
    text-align: center;
    line-height: 60px;
    font-size: 28px;
  }

  a {
    color: #daa520;
    text-decoration: none;
  }
</style>
