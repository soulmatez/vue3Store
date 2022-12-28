/*
 * @Author: Soulmate
 * @Date: 2022-06-17 15:45:34
 * @LastEditTime: 2022-12-27 14:14:08
 * @LastEditors: Soulmate
 * @Description: 
 * @FilePath: \vue3Store\src\store\modules\app\index.ts
 * 版权声明
 */
import { AppState } from '@/types';
import { localStorage } from '@/utils/storage';
import { defineStore } from 'pinia';
import { getLanguage } from '@/lang/index';

const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    device: 'desktop',
    sidebar: {
      opened: localStorage.get('sidebarStatus')
        ? !!+localStorage.get('sidebarStatus')
        : true,
      withoutAnimation: false,
    },
    language: getLanguage(),
    size: localStorage.get('size') || 'default',
  }),
  actions: {
    toggleSidebar() {
      this.sidebar.opened = !this.sidebar.opened;
      this.sidebar.withoutAnimation = false;
      console.log(this.sidebar.opened)
      if (this.sidebar.opened) {
        localStorage.set('sidebarStatus', 1);
      } else {
        localStorage.set('sidebarStatus', 0);
      }
    },
    closeSideBar(withoutAnimation: any) {
      localStorage.set('sidebarStatus', 0);
      this.sidebar.opened = false;
      this.sidebar.withoutAnimation = withoutAnimation;
    },
    toggleDevice(device: string) {
      this.device = device;
    },
    setSize(size: string) {
      this.size = size;
      localStorage.set('size', size);
    },
    setLanguage(language: string) {
      this.language = language;
      localStorage.set('language', language);
    },  
  },
});

export default useAppStore;
