/*
 * @Author: Soulmate
 * @Date: 2022-06-17 15:32:35
 * @LastEditTime: 2022-06-22 10:00:21
 * @LastEditors: Soulmate
 * @Description: 
 * @FilePath: \storeVue3Ts\src\store\index.ts
 * 版权声明
 */
import useUserStore from './modules/user';
import useAppStore from './modules/app';
import usePermissionStore from './modules/permission';


const useStore = () => ({
  user: useUserStore(),
  app: useAppStore(),
  permission: usePermissionStore()
});

export default useStore;
