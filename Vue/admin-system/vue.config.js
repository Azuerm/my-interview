module.exports = {
  lintOnSave: false,
  devServer: {
    open: true,
    port: 8080
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  }
}