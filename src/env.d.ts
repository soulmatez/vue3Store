/*
 * @Author: Soulmate
 * @Date: 2022-06-17 14:18:28
 * @LastEditTime: 2022-07-12 13:59:44
 * @LastEditors: Soulmate
 * @Description: 
 * @FilePath: \storeVue3\vue3Store\src\env.d.ts
 * 版权声明
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// 环境变量 TypeScript的智能提示
interface ImportMetaEnv {
  VITE_APP_TITLE: string;
  VITE_APP_PORT: string;
  VITE_APP_VERSION: string;
  VITE_APP_BASE_API: string;
}


interface ImportMeta {
  readonly env: ImportMetaEnv;
}
