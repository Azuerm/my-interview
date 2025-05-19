<template>
  <div class="user-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>用户中心</span>
      </div>
      <div class="user-info">
        <div class="avatar-container">
          <img :src="avatar" class="user-avatar">
        </div>
        <div class="info-container">
          <div class="info-item">
            <span class="label">用户名:</span>
            <span class="value">{{ name }}</span>
          </div>
          <div class="info-item">
            <span class="label">角色:</span>
            <span class="value">{{ roles.join(' | ') }}</span>
          </div>
          <div class="info-item">
            <span class="label">登录时间:</span>
            <span class="value">{{ new Date().toLocaleString() }}</span>
          </div>
        </div>
      </div>
    </el-card>

    <el-card class="box-card" style="margin-top: 20px;">
      <div slot="header" class="clearfix">
        <span>个人设置</span>
      </div>
      <el-form :model="userForm" label-width="80px">
        <el-form-item label="昵称">
          <el-input v-model="userForm.nickname" placeholder="请输入昵称"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="userForm.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="userForm.phone" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="saveUserInfo">保存</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UserPage',
  data() {
    return {
      userForm: {
        nickname: '',
        email: '',
        phone: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles'
    ])
  },
  created() {
    // 模拟获取用户信息
    this.userForm.nickname = this.name
    this.userForm.email = 'user@example.com'
    this.userForm.phone = '13800138000'
  },
  methods: {
    saveUserInfo() {
      this.$message({
        message: '保存成功',
        type: 'success'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.user-container {
  padding: 20px;
}

.user-info {
  display: flex;
  align-items: center;
  
  .avatar-container {
    margin-right: 20px;
    
    .user-avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }
  
  .info-container {
    .info-item {
      margin-bottom: 10px;
      
      .label {
        font-weight: bold;
        margin-right: 10px;
      }
      
      .value {
        color: #606266;
      }
    }
  }
}
</style>