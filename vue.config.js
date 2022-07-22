module.exports = {
  devServer: {
    port: 8080,
    open: false, // 编译完成是否打开网页
    host: 'localhost', // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
    https: false, // 编译失败时刷新页面
    // hot: true, // 开启热加载
    // hotOnly: false,
    proxy: {
      [process.env.VUE_APP_API]: {
        target: process.env.VUE_API_DEV_TARGET, // API服务器的地址
        changeOrigin: true,
        pathRewrite: {
          [`^${process.env.VUE_APP_API}`]: ''
        }
      }
      // [process.env.VUE_APP_API1]: {
      //   target: process.env.VUE_API_DEV_TARGET1, // API服务器的地址
      //   changeOrigin: true,
      //   pathRewrite: {
      //     [`^${process.env.VUE_APP_API1}`]: ''
      //   }
      // }
    }
  }
}
