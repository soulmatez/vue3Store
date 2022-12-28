/*
 * @Author: Soulmate
 * @Date: 2022-06-17 15:45:43
 * @LastEditTime: 2022-12-27 13:57:05
 * @LastEditors: Soulmate
 * @Description: 
 * @FilePath: \vue3Store\src\store\modules\user\index.ts
 * 版权声明
 */
import { defineStore } from 'pinia';
import { LoginFormData, UserState } from '@/types';
import { localStorage } from '@/utils/storage';
import { login, logout } from '@/api/login';
import { getUserInfo } from '@/api/system/user';
import { resetRouter } from '@/router';

const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    token: localStorage.get('token') || 'ceshiToken',
    nickname: '',
    avatar: '',
    roles: [],
    perms: [],
  }),
  actions: {
    async RESET_STATE() {
      this.$reset();
    },
    /**
     * 登录
     */
    login(loginData: LoginFormData) {
      const { username, password, code, uuid } = loginData;
      return new Promise((resolve, reject) => {
        login({
          username: username.trim(),
          password: password,
          grant_type: 'captcha',
          code: code,
          uuid: uuid,
        })
          .then((response) => {
            const { access_token, token_type } = response.data;
            const accessToken = token_type + ' ' + access_token;
            localStorage.set('token', accessToken);
            this.token = accessToken;
            resolve(access_token);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    /**
     *  获取用户信息（昵称、头像、角色集合、权限集合）
     */
    getUserInfo() {
      return new Promise((resolve, reject) => {
        getUserInfo()
          .then(({ data }) => {
            if (!data) {
              return reject('Verification failed, please Login again.');
            }
            const { permissions:perms, user } = data;
            const { nickname, avatar, roles } = user;
            if (!roles || roles.length <= 0) {
              reject('getUserInfo: roles must be a non-null array!');
            }
            this.nickname = nickname;
            this.avatar = avatar;
            this.roles = roles;
            this.perms = perms;
            resolve(data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    /**
     *  注销
     */
    logout() {
      return new Promise((resolve, reject) => {
        logout()
          .then(() => {
            localStorage.remove('token');
            this.RESET_STATE();
            // resetRouter();
            resolve(null);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    /**
     * 清除 Token
     */
    resetToken() {
      return new Promise((resolve) => {
        localStorage.remove('token');
        this.RESET_STATE();
        resolve(null);
      });
    },
  },
});

export default useUserStore;
