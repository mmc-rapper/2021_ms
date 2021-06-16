<template>
<div>
  <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="username"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        width="180">
      </el-table-column>
      <el-table-column
        prop="mobile"
        label="电话">
      </el-table-column>
      <el-table-column
        label="用户状态">
      </el-table-column>
      <el-table-column
        label="操作">
      </el-table-column>
  </el-table>
  <el-pagination
  background
  layout="prev, pager, next"
  :total="total"
  :page-size ='2'
  :current-page= pagenum
  @current-change="changPage">
  </el-pagination>
</div>

</template>

<script>
// 引入axios
import axios from 'axios'
export default {
  data () {
    return {
      tableData: [{
        username: '',
        email: '',
        mobile: ''
      }],
      total: 0,
      // 当前页
      pagenum: 1
    }
  },
  created () {
    this.loadUserList(1)
  },
  methods: {
    // 加载用户数据
    loadUserList (pagenum) {
      axios.get('http://localhost:8888/api/private/v1/users', {
        params: {
          query: '',
          pagenum,
          pagesize: '2'
        },
        headers: {
          Authorization: localStorage.getItem('token')
        }
      }).then(res => {
        console.log(res.data)
        this.tableData = res.data.data.users
        this.total = res.data.data.total
        // this.pagenum = res.data.data.pagenum
      })
    },
    changPage (e) {
      // console.log('11')
      console.log(e)
      this.loadUserList(e)
    }
  },
  watch: {
  }

}
</script>

<style lang="less" scoped>

</style>
