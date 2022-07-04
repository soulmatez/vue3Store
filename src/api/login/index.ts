/*
 * @Author: Soulmate
 * @Date: 2022-06-20 09:40:07
 * @LastEditTime: 2022-06-28 13:25:56
 * @LastEditors: Soulmate
 * @Description: 
 * @FilePath: \storeVue3Ts\src\api\login\index.ts
 * 版权声明
 */
import { Captcha, LoginFormData, LoginResponseData } from '@/types';
import request from '@/utils/request';
import { AxiosPromise } from 'axios';

/**
 * 登录
 * @param data
 */
export function login(data: LoginFormData): AxiosPromise<LoginResponseData> {
  return request({
    url: '/oauth/token',
    method: 'post',
    params: data,
    headers: {
      Authorization: 'Basic bWFsbC1hZG1pbi13ZWI6MTIzNDU2', // 客户端信息Base64明文：
    },
  });
}

/**
 * 注销
 */
export function logout() {
  return request({
    url: '/oauth/logout',
    method: 'delete',
  });
}

/**
 * 获取图片验证码
 */
export function getCaptcha(): AxiosPromise<Captcha> {
  return request({
    url: '/captcha?t=' + new Date().getTime().toString(),
    method: 'get',
  });
}
