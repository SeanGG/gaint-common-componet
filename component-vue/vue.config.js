'use strict'
const port = 9527 // dev port

// console.log(process.env.VUE_APP_BASE_API)
module.exports = {
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/catalog': {
        target: `http://cloud-dev.ztgame.com.cn`,
        changeOrigin: true,
        pathRewrite: {
          '^/catalog': '/catalog'
        }
      },
    },
  },
}
