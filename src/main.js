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

// pinia以及数据持久化
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"
const piain = createPinia();
piain.use(piniaPluginPersistedstate)


const app = createApp(App);
vant(app);
app.use(piain);
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
