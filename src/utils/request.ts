/*
 * @Author: Soulmate
 * @Date: 2022-12-23 09:25:24
 * @LastEditTime: 2022-12-26 15:37:13
 * @LastEditors: Soulmate
 * @Description: 
 * @FilePath: \vue3Store\src\utils\request.ts
 * 版权声明
 */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ElMessage, ElMessageBox } from 'element-plus';
import { localStorage } from '@/utils/storage';
import useStore from '@/store';

// 创建 axios 实例
console.log('import.meta.env.VITE_APP_BASE_API', import.meta.env.VITE_APP_BASE_API)
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API + import.meta.env.VITE_APP_VERSION,
  timeout: 50000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
});

// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (!config.headers) {
      throw new Error(
        `Expected 'config' and 'config.headers' not to be undefined`
      );
    }
    const { user } = useStore();
    if (user.token) {
      config.headers.Authorization = `${localStorage.get('token')}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { code, msg } = response.data;
    if (code === 200) {
      return response.data;
    } else {
      // 响应数据为二进制流处理(Excel导出)
      if (response.data instanceof ArrayBuffer) {
        return response;
      }
      ElMessage({
        message: msg || '系统出错',
        type: 'error',
      });
      return Promise.reject(new Error(msg || 'Error'));
    }
  },
  (error) => {
    const { code, msg } = error.response.data;
    if (code === 'A0230') {
      // token 过期
      localStorage.clear(); // 清除浏览器全部缓存
      window.location.href = '/'; // 跳转登录页
      ElMessageBox.alert('当前页面已失效，请重新登录', '提示', {});
    } else {
      ElMessage({
        message: msg || '系统出错',
        type: 'error',
      });
    }
    return Promise.reject(new Error(msg || 'Error'));
  }
);

// 导出 axios 实例
export default service;
