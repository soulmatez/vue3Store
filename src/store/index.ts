/*
 * @Author: Soulmate
 * @Date: 2022-06-17 15:32:35
 * @LastEditTime: 2022-12-23 09:43:31
 * @LastEditors: Soulmate
 * @Description: 
 * @FilePath: \vue3Store\src\store\index.ts
 * 版权声明
 */
import useUserStore from './modules/user';
import useAppStore from './modules/app';
import useSettingStore from './modules/settings'
import usePermissionStore from './modules/permission';
import useTagsViewStore from './modules/tagsView';


const useStore = () => ({
  user: useUserStore(),
  app: useAppStore(),
  permission: usePermissionStore(),
  setting: useSettingStore(),
  tagsView: useTagsViewStore(),
});

export default useStore;
