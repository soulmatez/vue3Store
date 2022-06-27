/*
 * @Author: Soulmate
 * @Date: 2022-06-17 14:18:28
 * @LastEditTime: 2022-06-22 14:47:35
 * @LastEditors: Soulmate
 * @Description: 
 * @FilePath: \storeVue3Ts\vite.config.ts
 * 版权声明
 */
import { ConfigEnv, UserConfig, loadEnv } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import vue from '@vitejs/plugin-vue'
import path from 'path'


export default ({ mode }: ConfigEnv): UserConfig => {
  // 获取 .env 环境配置文件
  const env = loadEnv(mode, process.cwd());
  return {  
    plugins: [
      vue(),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]'
      })
    ],
    server: {
      host: 'localhost',
      port: 3000,
      open: true, // 运行自动打开浏览器
      proxy: {
        // [env.VITE_APP_BASE_API]: {
        //   target: '',
        //   changeOrigin: true,
        //   rewrite: path =>
        //     path.replace(new RegExp('^' + env.VITE_APP_BASE_API), '')
        // }
      }
    },
    resolve: {
      // Vite路径别名配置
      alias: {
        '@': path.resolve('./src') // @代替src
      }
    }
  
  };
};
