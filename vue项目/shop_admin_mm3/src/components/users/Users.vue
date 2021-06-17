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
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="2"
      @current-change="currentChange">
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
        email: '',
        mobile: ''
      }],
      total: 6
    }
  },
  created() {
    this.loadUsers(1)
  },

  mounted () {

  },

  methods: {
    loadUsers (pagenum) {
      axios.get('http://localhost:8888/api/private/v1/users',{
        params: {
          query: '',
          pagenum,
          pagesize: 2
        },
        headers: {
          Authorization : localStorage.getItem('token')
        }
      }).then(res => {
        console.log(res.data.data);
        this.tableData = res.data.data.users
      })
    },
    currentChange(e){
      this.loadUsers(e)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
