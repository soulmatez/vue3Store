/*
 * @Author: Soulmate
 * @Date: 2022-07-12 13:54:39
 * @LastEditTime: 2022-07-12 15:18:59
 * @LastEditors: Soulmate
 * @Description: 
 * @FilePath: \storeVue3\vue3Store\src\api\components\menuTree.ts
 * 版权声明
 */
import { ComponentTreeList } from '@/types';
import request from '@/utils/request';
import { AxiosPromise } from 'axios';

/**
 * 获取treeMenu
 * @param data
 */
export function getTree(): AxiosPromise<ComponentTreeList> {
  return request({
    url: '/components/menuTree/getTree',
    method: 'get'
  });
}

