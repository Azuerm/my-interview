<template>
  <div class="admin-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>系统管理</span>
      </div>
      <div class="admin-info">
        <p class="admin-tip">此页面仅管理员可见</p>
      </div>
    </el-card>

    <el-card class="box-card" style="margin-top: 20px;">
      <div slot="header" class="clearfix">
        <span>用户管理</span>
      </div>
      <el-table :data="userList" style="width: 100%">
        <el-table-column prop="id" label="ID" width="80"></el-table-column>
        <el-table-column prop="username" label="用户名"></el-table-column>
        <el-table-column prop="role" label="角色"></el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            <el-tag :type="scope.row.status === '启用' ? 'success' : 'danger'">{{ scope.row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="创建时间"></el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination-container">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="100">
        </el-pagination>
      </div>
    </el-card>

    <el-card class="box-card" style="margin-top: 20px;">
      <div slot="header" class="clearfix">
        <span>系统设置</span>
      </div>
      <el-form :model="systemForm" label-width="100px">
        <el-form-item label="系统名称">
          <el-input v-model="systemForm.name"></el-input>
        </el-form-item>
        <el-form-item label="系统描述">
          <el-input type="textarea" v-model="systemForm.description"></el-input>
        </el-form-item>
        <el-form-item label="维护状态">
          <el-switch v-model="systemForm.maintenance"></el-switch>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="saveSystemSettings">保存设置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'AdminPage',
  data() {
    return {
      userList: [
        { id: 1, username: 'admin', role: '管理员', status: '启用', createTime: '2023-01-01 12:00:00' },
        { id: 2, username: 'user', role: '普通用户', status: '启用', createTime: '2023-01-02 12:00:00' },
        { id: 3, username: 'test', role: '普通用户', status: '禁用', createTime: '2023-01-03 12:00:00' }
      ],
      systemForm: {
        name: '后台管理系统',
        description: '这是一个基于Vue2的后台管理系统示例',
        maintenance: false
      }
    }
  },
  methods: {
    handleEdit(row) {
      this.$message({
        message: `编辑用户: ${row.username}`,
        type: 'info'
      })
    },
    handleDelete(row) {
      this.$confirm(`确认删除用户 ${row.username}?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })          
      })
    },
    saveSystemSettings() {
      this.$message({
        message: '系统设置保存成功',
        type: 'success'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.admin-container {
  padding: 20px;
}

.admin-info {
  .admin-tip {
    font-size: 16px;
    color: #409EFF;
    font-weight: bold;
  }
}

.pagination-container {
  margin-top: 20px;
  text-align: right;
}
</style>