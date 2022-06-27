/*
 * @Author: Soulmate
 * @Date: 2022-06-17 15:31:17
 * @LastEditTime: 2022-06-27 13:44:48
 * @LastEditors: Soulmate
 * @Description: 
 * @FilePath: \storeVue3Ts\src\router\index.ts
 * 版权声明
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import useStore from '@/store';


// 参数说明: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
// 静态路由
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: { hidden: true },
  },
  { 
    path: '/home',
    component: () => import('@/views/home/index.vue'),
    name: 'Home',
    meta: { title: 'home', icon: 'homepage', affix: true },
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    meta: { hidden: true },
  },
  {
    path: '/',
    redirect: '/home',
    // children: [
    //   {
    //     path: 'home',
    //     component: () => import('@/views/home/index.vue'),
    //     name: 'Home',
    //     meta: { title: 'home', icon: 'homepage', affix: true },
    //   },
    //   {
    //     path: '401',
    //     component: () => import('@/views/error-page/401.vue'),
    //     meta: { hidden: true },
    //   }
    // ],
  }
];

// 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes as RouteRecordRaw[],
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

// 重置路由
export function resetRouter() {
  const { permission } = useStore();
  permission.routes.forEach((route) => {
    const name = route.name;
    if (name && router.hasRoute(name)) {
      router.removeRoute(name);
    }
  });
}

export default router;

