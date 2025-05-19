<template>
  <div class="dashboard-container">
    <div class="dashboard-text">欢迎 {{ name }}</div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span>系统信息</span>
          </div>
          <div class="info-item">
            <span>用户角色:</span>
            <span>{{ roles.join(' | ') }}</span>
          </div>
          <div class="info-item">
            <span>登录时间:</span>
            <span>{{ new Date().toLocaleString() }}</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span>快速导航</span>
          </div>
          <div class="nav-item" v-if="roles.includes('admin')">
            <router-link to="/admin/index">
              <el-button type="primary" size="small">系统管理</el-button>
            </router-link>
          </div>
          <div class="nav-item">
            <router-link to="/user/index">
              <el-button type="success" size="small">用户中心</el-button>
            </router-link>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span>系统公告</span>
          </div>
          <div class="notice-item">
            <p>欢迎使用后台管理系统</p>
            <p>这是一个基于Vue2的后台管理系统示例</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style lang="less" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
    color: #409EFF;
    margin-bottom: 20px;
  }
}

.info-item, .nav-item, .notice-item {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

.notice-item {
  flex-direction: column;
  p {
    margin: 5px 0;
  }
}
</style>