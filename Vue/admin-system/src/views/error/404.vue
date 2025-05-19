<template>
  <div class="error-container">
    <div class="error-content">
      <h1 class="error-code">404</h1>
      <div class="error-desc">抱歉，您访问的页面不存在</div>
      <el-button type="primary" @click="goHome">返回首页</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page404',
  methods: {
    goHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
.error-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f7fa;
  
  .error-content {
    text-align: center;
    
    .error-code {
      font-size: 120px;
      color: #409EFF;
      margin: 0;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .error-desc {
      font-size: 24px;
      color: #606266;
      margin: 20px 0 30px;
    }
  }
}
</style>