/*
 * @Author: Soulmate
 * @Date: 2022-06-20 09:22:51
 * @LastEditTime: 2022-06-20 09:40:50
 * @LastEditors: Soulmate
 * @Description: 
 * @FilePath: \storeVue3Ts\src\types\api\system\login.ts
 * 版权声明
 */
/**
 * 登录表单类型声明
 */
 export interface LoginFormData {
    username: string;
    password: string;
    grant_type: string;
    code: string;
    uuid: string;
  }
  
  /**
   * 登录响应类型声明
   */
  export interface LoginResponseData {
    access_token: string;
    token_type: string;
  }
  
  /**
   * 验证码类型声明
   */
  export interface Captcha {
    img: string;
    uuid: string;
  }
  