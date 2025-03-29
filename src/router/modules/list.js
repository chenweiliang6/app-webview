/*
 * @Author: 19994643173 1075005842@qq.com
 * @Date: 2024-07-15 19:18:41
 * @LastEditors: 19994643173 1075005842@qq.com
 * @LastEditTime: 2024-07-15 19:53:40
 * @FilePath: \中建移动端\yidongduan\src\router\modules\list.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const listRouter = [
  {
    path: '/',
    name: 'home',
    component: () => import('../../views/home/question.vue'),
    meta: {
      title: '首页'
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
