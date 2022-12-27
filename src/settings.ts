/*
 * @Author: Soulmate
 * @Date: 2022-05-30 11:36:14
 * @LastEditTime: 2022-06-21 08:37:39
 * @LastEditors: Soulmate
 * @Description: 
 * @FilePath: \mall-admin-web\src\settings.ts
 * 版权声明
 */
interface DefaultSettings {
    title: string;
    showSettings: boolean;
    tagsView: boolean;
    fixedHeader: boolean;
    sidebarLogo: boolean;
    errorLog: string;
  }
  
  const defaultSettings: DefaultSettings = {
    title: 'youlai-mall',
    showSettings: true,
    tagsView: true,
    fixedHeader: false,
    // 是否显示Logo
    sidebarLogo: true,
    errorLog: 'deve',
  };
  
  export default defaultSettings;
  