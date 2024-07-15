export const listRouter = [
  {
    path: '/',
    name: 'home',
    component: () => import('../../views/home/index.vue'),
    meta: {
      title: '首页'
    }
  },{
    path: '/my',
    name: 'my',
    component: () => import('../../views/my/index.vue'),
    meta: {
      title: '我的'
    }
  },{
    path: '/404',
    name: 'Error',
    component: () => import('../../views/error/404.vue'),
    meta: {
      title: '404'
    }
  },{
    path: "/:pathMatch(.*)*",
    name: "notFound",
    redirect: {
      path:'/404'
    }
  }
]
