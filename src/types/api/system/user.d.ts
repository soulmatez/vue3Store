/*
 * @Author: Soulmate
 * @Date: 2022-06-20 09:39:35
 * @LastEditTime: 2022-06-20 09:39:36
 * @LastEditors: Soulmate
 * @Description: 
 * @FilePath: \storeVue3Ts\src\types\api\system\user.ts
 * 版权声明
 */
/**
 * 登录用户类型声明
 */
 export interface UserInfo {
    nickname: string;
    avatar: string;
    roles: string[];
    perms: string[];
  }