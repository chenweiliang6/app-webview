/*
 * @Author: wx：laowang66608
 * @Date: 2024-01-15 13:56:23
 * @LastEditTime: 2024-07-15 20:07:10
 * @LastEditors: 19994643173 1075005842@qq.com
 * @Description:
 * @FilePath: /移动端Vue3版/h5_project
 * 代码版权方：'通用 H5框架'
 */
const { defineConfig } = require('@vue/cli-service')
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
const port = process.env.port || process.env.npm_config_port || '8081'
console.log(port, 'port')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const timeStamp= new Date().getTime()

module.exports = defineConfig({
  transpileDependencies: true,
  // 部署应用包时的基本路径
  publicPath: process.env.NODE_ENV === 'production' ? '/zjmz' : '/zjmz',
  // 解决vue3搭建项目时 eslint 警告处理
  lintOnSave: false,
  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  productionSourceMap: false,
  /* 打包配置 打包配置成功 */
  // 构建时的输出目录
  outputDir: "dist",
  // 用于放置打包生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
  // assetsDir: "static",
  chainWebpack: (config) => {
    // 解决控制台报错
    config.plugin('define').tap((definitions) => {
      Object.assign(definitions[0], {
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false',
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
      })
      return definitions
    }),
      // 配置路径别名，解决不能使用@来指代src目录的问题
      config.resolve.alias
        .set('@', resolve('src'))
        .set('@assets', resolve('src/assets'))
        .set('@components', resolve('src/components'))
        .set('@views', resolve('src/views'))
        .set('@router', resolve('src/router'))
        .set('@store', resolve('src/store'))
        .set('@utils', resolve('src/utils'))
        .set('@api', resolve('src/api'))
    config.plugin('html').tap(args => {
      args[0].title = '中建民筑'
      return args
    })
  },
  devServer: {
    port: port, // 端口
    compress: false, // 是否压缩
    hot: true, // 是否自动刷新
    open: true, // 是否启动服务后，自动打开浏览器
    proxy: {
      '/api': {
        target: 'https://h5.mameihua.top', //目标url http://127.0.0.1:5173
        changeOrigin: true, //支持跨域
        rewrite: (path) => path.replace(/^\/api/, ""),
      }
    }
  },
  configureWebpack: {
    output: {
      filename: `js/[name].js?v=${timeStamp}`,
      chunkFilename: `js/[name].js?v=${timeStamp}`,
    },
  },
  // rem 适配配置
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            autoprefixer(),
            pxtorem({
              rootValue: 37.5,
              propList: ['*']
            })
          ]
        }
      },
      sass: {
        /**
         * 引入全局变量
         * sass 版本 8 prependData
         * sass 版本 9 additionalData
         **/
        additionalData: `@import "@/assets/sass/index.scss";`
      }
    },
    extract: {
      filename: `css/[name].${timeStamp}.css`,
      chunkFilename: `css/[name].${timeStamp}.css`,
    },
  },
})
