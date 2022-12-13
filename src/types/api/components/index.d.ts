/*
 * @Author: Soulmate
 * @Date: 2022-07-04 16:37:23
 * @LastEditTime: 2022-12-13 14:18:19
 * @LastEditors: Soulmate
 * @Description: 
 * @FilePath: \vue3Store\src\types\api\components\index.d.ts
 * 版权声明
 */
/**
 * 层级盒子类型声明
 */
export interface ComponentTreeList {
    list: ComponentTreeMenu[];
}
export interface ComponentTreeMenu {
    name: string;
    desc: string;
    width: Number;
    background: string;
    children: ComponentTreeMenu[];
}