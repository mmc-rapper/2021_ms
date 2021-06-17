<template>
  <el-row type="flex" justify="center" align="middle">
      <el-col :span="8">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
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
/* eslint-disable*/
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
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 点击登录校验
    startLogin () {
      // validate 是饿了么的校验方法
      this.$refs.ruleForm.validate((valid) => {
        if (!valid) {
          return false
        }
        // 发送请求
        axios.post('http://localhost:8888/api/private/v1/login',this.ruleForm).then(res => {
        // 通过穿回来的状态码设置对应的消息提示  判断成功
        if (res.data.meta.status === 200) {
            this.$message({
            message: res.data.meta.msg,
            type: 'success',
            duration: 800
          });
          console.log(res);
          // 将获取到的token保存到localStorage中
          // 后续需要做导航守卫，每次操作都要提供token
          localStorage.setItem('token',res.data.data.token)
          // 成功后跳转到home
          this.$router.push('/home')
        }else {
          this.$message.error(res.data.meta.msg);
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
    }
  }
}
</script>

<style lang="less" scoped>
  .el-row{
    height: 100%;
    background-color: #2d434c;
     .el-col{
      background-color: #fff;
      padding: 25px;
      border-radius: 15px;
       .el-form-item {
        margin-bottom: 22px;
      }
    }
  }

</style>
