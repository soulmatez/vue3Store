/*
 * @Author: Soulmate
 * @Date: 2022-06-22 09:53:07
 * @LastEditTime: 2022-12-27 17:26:21
 * @LastEditors: Soulmate
 * @Description: 
 * @FilePath: \vue3Store\src\permission.ts
 * 版权声明
 */
import router from '@/router';
import { ElMessage } from 'element-plus';
import useStore from '@/store';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
NProgress.configure({ showSpinner: false }); // 进度环显示/隐藏

// 白名单路由
const whiteList = ['/login', '/home'];
router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title as string ? (`${to.meta.title} - 卓越者开发平台`) as string : '卓越者 · 一群热爱者';
  NProgress.start();
  const { user, permission } = useStore();
  const hasToken = user.token;
  if (hasToken) {
    // 登录成功，跳转到首页
    if (to.path === '/login') {
      next({ path: '/' });
      NProgress.done();
    } else {
      const hasGetUserInfo = user.roles.length > 0;
      if (hasGetUserInfo) {
        if (to.matched.length === 0) {
          from.name ? next({ name: from.name }) : next('/401');
        } else {
          next();
        }
      } else {
        try {
          await user.getUserInfo();
          const roles = user.roles;
          const accessRoutes: any = await permission.generateRoutes(roles);
          accessRoutes.forEach((route: any) => {
            router.addRoute(route);
          });
          next({ ...to, replace: true });
        } catch (error) {
          // 移除 token 并跳转登录页
          // await user.resetToken();
          // ElMessage.error((error as any) || 'Has Error');
          // next(`/login?redirect=${to.path}`);
          // NProgress.done();
        }
      }
    }
  } else {
    // 未登录可以访问白名单页面(登录页面)
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});
