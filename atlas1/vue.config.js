const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // port: 8080,
    // proxy: {
    //   '/api': {
    //     target: 'https://maps.googleapis.com',
    //     changeOrigin: true,
    //     pathRewrite: { '^/api': '' }
    //   }
    // }


proxy:'https://maps.googleapis.com'




  },
})
