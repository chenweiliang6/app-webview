/*
 * @Author: 19994643173 1075005842@qq.com
 * @Date: 2024-07-15 19:18:41
 * @LastEditors: 19994643173 1075005842@qq.com
 * @LastEditTime: 2024-07-15 19:43:06
 * @FilePath: \中建移动端\yidongduan\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
// 路由配置
import router from './router'

// css初始化
import "@/assets/css/result.css"

// rem适配方案基准
import 'lib-flexible/flexible'

// 1. 引入vant组件
import { vant } from './config/vantConfig';

// 2. 引入组件样式
import 'vant/lib/index.css';
import { Popover, Icon,Sticky } from 'vant';

// // pinia以及数据持久化
// import { createPinia } from 'pinia'
// import piniaPluginPersistedstate from "pinia-plugin-persistedstate"
// const piain = createPinia();
// piain.use(piniaPluginPersistedstate)


const app = createApp(App);
vant(app);
// app.use(piain);
app.use(Popover).use(Icon).use(Sticky);
app.use(router);
app.mount('#app');

console.log(
  [
    "%c",
    "-----------------------------",
    "-                           -",
    "-     admin_vue3_ts_pc      -",
    "-     WX：laowang66608      -",
    "-                           -",
    "-----------------------------",
  ].join("\n"),
  "color:#FD802E;font-size:16px"
)
