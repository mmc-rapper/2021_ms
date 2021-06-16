<template>
<el-row type="flex"  justify="center" align="middle">
  <el-col :span="8">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="startLogin()">登录</el-button>
        <el-button @click="resetForm()">重置</el-button>
      </el-form-item>
    </el-form>
  </el-col>
</el-row>
</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {
  data () {
    return {
      ruleForm: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          // 如果文本不写内容会触发  (必填)
          { required: true, message: '请输入用户名', trigger: 'blur' },
          // 格式不正确会触发
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          // 如果文本不写内容会触发  (必填)
          { required: true, message: '请输入密码', trigger: 'blur' },
          // 格式不正确会触发
          { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    startLogin () {
      this.$refs.ruleForm.validate((valid) => {
        // 校验不成功 终止
        if (!valid) {
          return false
        }
        // 校验成功
        axios.post('http://localhost:8888/api/private/v1/login',this.ruleForm).then(res=> {
          console.log(res);
          if (res.data.meta.status === 200) {
            // console.log('登录成功');
            //1. 登录成功提示
            this.$message({
              message: res.data.meta.msg,
              type: 'success',
              duration: 800
            });
            // 保存token到本地
            localStorage.setItem('token',res.data.data.token)

            //2. 跳转到home页面  =>  编程式导航
            this.$router.push('/home')
          }else {
            // console.log('登录失败');
            this.$message({
              // 获取返回的提示更新在提示中
              message: res.data.meta.msg,
              type: 'error',
              duration: 800
            })
          }
        })
      })
      // this.$refs[formName].validate((valid) => {
      //   if (valid) {
      //     alert('submit!')
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
    },
    resetForm () {
      this.$refs.ruleForm.resetFields()
      // this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.el-row {
  height: 100%;
  background-color: #2d434c;
  .el-col {
    background-color: #fff;
    padding: 25px 30px;
    border-radius: 10px;
  }
}

</style>
