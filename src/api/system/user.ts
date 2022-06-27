/*
 * @Author: Soulmate
 * @Date: 2022-06-20 09:26:42
 * @LastEditTime: 2022-06-20 09:37:54
 * @LastEditors: Soulmate
 * @Description: 
 * @FilePath: \storeVue3Ts\src\api\system\user.ts
 * 版权声明
 */
import request from '@/utils/request';
import { AxiosPromise } from 'axios';
import {
  UserInfo
} from '@/types';

/**
 * 登录成功后获取用户信息（昵称、头像、权限集合和角色集合）
 */
 export function getUserInfo(): AxiosPromise<UserInfo> {
    return request({
      url: '/youlai-admin/api/v1/users/me',
      method: 'get',
    });
  }