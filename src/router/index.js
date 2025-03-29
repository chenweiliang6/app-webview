import { createRouter, createWebHashHistory } from 'vue-router'
import { listRouter } from './modules/list'
import NProgress from '../config/nprogress'

const routes = [
  ...listRouter
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  strict: false,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

/**
 * @description 路由拦截
 * */
router.beforeEach((to, from, next) => {
  // 启动加载条
  // NProgress.start()
  // 更改title名称
  to.meta.title && (document.title = to.meta.title)
  next()
})

/**
 * @description 路由跳转结束
 * */
router.afterEach(() => {
	// NProgress.done();
});

/**
 * @description 路由跳转错误
 * */
router.onError(error => {
	// NProgress.done();
  console.warn("路由错误", error.message);
});

export default router
