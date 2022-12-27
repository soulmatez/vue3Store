/*
 * @Author: Soulmate
 * @Date: 2022-06-17 16:50:25
 * @LastEditTime: 2022-12-23 13:17:12
 * @LastEditors: Soulmate
 * @Description: 
 * @FilePath: \vue3Store\src\lang\index.ts
 * 版权声明
 */
// 自定义国际化配置
import { createI18n } from 'vue-i18n';
import { localStorage } from '@/utils/storage';

// 本地语言包
import enLocale from './en';
import zhCnLocale from './zh-cn';

const messages = {
  'zh-cn': {
    ...zhCnLocale,
  },
  en: {
    ...enLocale,
  },
};

/**
 * 获取当前系统使用语言字符串
 *
 * @returns zh-cn|en ...
 */
export const getLanguage = () => {
  // 本地缓存获取
  let language = localStorage.get('language');
  if (language) {
    return language;
  }
  // 浏览器使用语言
  language = navigator.language.toLowerCase();
  const locales = Object.keys(messages);
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale;
    }
  }
  return 'zh-cn';
};

const i18n = createI18n({
  legacy: false,
  locale: getLanguage(),
  messages: messages,
});

export default i18n;
