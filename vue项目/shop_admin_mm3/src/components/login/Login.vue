<template>
  <el-row type="flex" justify="center" align="middle">
    <el-col :span="8">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item label="用户名" class="label" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" class="label" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="startLogin('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
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
    startLogin () {
      // 饿了么里面的 validate 就是校验方法
      this.$refs.ruleForm.validate((valid) => {
        if (!valid) {
          return false
        }
        // console.log('成功')
        // 发送请求
        axios.post('http://localhost:8888/api/private/v1/login',this.ruleForm).then(res=> {
          console.log(res);
          // 通过返回的状态码来设置消息提示
          if (res.data.meta.status === 200) {
            this.$message({
              message: res.data.meta.msg,
              type: 'success',
              duration: 800
            });
            // 跳转到home 编程式导航
            this.$router.push('/home')
          }else {
            this.$message({
              message: res.data.meta.msg,
              type: 'error',
              duration: 800
            });
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
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app {

}
.el-row {
  height: 100%;
  background-color: #2d434c;
}
.el-col {
  background-color: #fff;
  padding: 25px;
  border-radius: 15px;
}

.el-form-item {
  margin-bottom: 22px;
}


</style>
