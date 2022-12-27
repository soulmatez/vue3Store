/*
 * @Author: Soulmate
 * @Date: 2022-06-20 09:39:35
 * @LastEditTime: 2022-12-27 09:00:44
 * @LastEditors: Soulmate
 * @Description:
 * @FilePath: \vue3Store\src\types\api\system\user.d.ts
 * 版权声明
 */
/**
 * 登录用户类型声明
 */
export interface UserInfo {
  user: Infos<object>;
  permissions: string[];
}
export interface Infos {
  nickname: string;
  avatar: string;
  roles: string[];
}
