/*
 * @Author: Soulmate
 * @Date: 2022-06-27 13:38:59
 * @LastEditTime: 2022-06-29 09:39:33
 * @LastEditors: Soulmate
 * @Description: 
 * @FilePath: \storeVue3Ts\src\types\api\system\menu.d.ts
 * 版权声明
 */
/**
 * 菜单查询参数类型声明
 */
 export interface MenuQueryParam {
    name?: string;
  }
  
  /**
   * 菜单分页列表项声明
   */
  
  export interface MenuItem {
    id: number;
    parentId: number;
    gmtCreate: string;
    gmtModified: string;
    name: string;
    icon: string;
    component: string;
    sort: number;
    visible: number;
    children: MenuItem[];
  }
  
  /**
   * 菜单表单类型声明
   */
  export interface MenuFormData {
    /**
     * 菜单ID
     */
    id?: string;
    /**
     * 父菜单ID
     */
    parentId: string;
    /**
     * 菜单名称
     */
    name: string;
    /**
     * 菜单是否可见(1:是;0:否;)
     */
    visible: number;
    icon?: string;
    /**
     * 排序
     */
    sort: number;
    /**
     * 组件路径
     */
    component?: string;
    /**
     * 路由路径
     */
    path: string;
    /**
     * 跳转路由路径
     */
    redirect?: string;
  
    /**
     * 菜单类型(1:菜单；2：目录；3：外链)
     */
    type: string;
  }
  
  /**
   * 菜单分页列表项声明
   */
  
  export interface RootObject {
    code: number;
    msg: string;
    url: string;
    data: Data;
  }
