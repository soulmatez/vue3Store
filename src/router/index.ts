/*
 * @Author: Soulmate
 * @Date: 2022-06-17 15:31:17
 * @LastEditTime: 2022-12-13 16:04:09
 * @LastEditors: Soulmate
 * @Description: 
 * @FilePath: \vue3Store\src\router\index.ts
 * 版权声明
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import useStore from '@/store';


/** 引入layout */
export const Layout = () => import('@/layout/index.vue'); 

// 参数说明: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
// 静态路由
export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  },
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
    redirect: '/home'
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

