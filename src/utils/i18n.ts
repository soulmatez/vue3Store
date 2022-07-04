/*
 * @Author: Soulmate
 * @Date: 2022-06-20 09:09:48
 * @LastEditTime: 2022-06-20 09:09:48
 * @LastEditors: Soulmate
 * @Description: 
 * @FilePath: \storeVue3Ts\src\utils\i18n.ts
 * 版权声明
 */
import i18n from '@/lang/index';

export function generateTitle(title: any) {
  // 判断是否存在国际化配置，如果没有原生返回
  const hasKey = i18n.global.te('route.' + title);
  if (hasKey) {
    const translatedTitle = i18n.global.t('route.' + title);
    return translatedTitle;
  }
  return title;
}

