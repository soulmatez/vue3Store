/*
 * @Author: Soulmate
 * @Date: 2022-07-12 13:54:39
 * @LastEditTime: 2022-12-26 15:50:46
 * @LastEditors: Soulmate
 * @Description: 
 * @FilePath: \vue3Store\src\api\common\menuTree.ts
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
    url: '/menuTree/getTree',
    method: 'get'
  });
}

