<template>
  <div>
     <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="username"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="mobile"
        label="手机号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱">
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size='2'
      @current-change='changePage'>
    </el-pagination>
  </div>
</template>

<script>
import axios from 'axios'
/* eslint-disable */
export default {
  components: { },

  directives: { },

  data () {
    return {
      tableData: [{
        username: '',
        mobile: '',
        email: ''
      }],
      total: 1
    }
  },

  created () {
    this.loadUsers(1)
  },


  methods: {
    loadUsers (pagenum) {
      axios.get('http://localhost:8888/api/private/v1/users',{
        params: {
          query:'',
          pagenum,
          pagesize: 2
        },
        headers: {
          Authorization: localStorage.getItem('token')
        }
      }).then(res => {
        console.log(res.data.data);
        this.tableData = res.data.data.users
        this.total = res.data.data.total
      })
    },
    changePage(e){
      // console.log(e);
      // 重新发送请求调用写好的方法，并且传入当前页数
      this.loadUsers(e)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
