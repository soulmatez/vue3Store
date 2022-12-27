<!--
 * @Author: YourName
 * @Date: 2022-06-17 14:21:15
 * @LastEditTime: 2022-12-26 16:47:03
 * @LastEditors: Soulmate
 * @Description: 
 * @FilePath: \vue3Store\src\views\home\index.vue
 * 版权声明
-->
<template>
  <div class="common-layout">
    dad
  </div>
</template>

<script setup lang="ts" name="Home">
import {
  reactive,
  ref,
  onMounted,
  nextTick
} from "vue";
import { getTree } from '@/api/common/menuTree';


let maxDeep = ref(0);
const treeStyle = ref({
  color: '#fff',
  background: '122,165,255'
})
const treeData:any = ref({
  menu: [],
});

onMounted(()=>{
  // 获取treeMenu菜单
  // getTreeMenu()
})

function getTreeMenu(){
  getTree().then((res)=>{
    let list = res.data.list;
    treeData.value.menu.push(list as never)
    console.log(treeData.value, 'treeData.value')
    setTree()
  })
}

function getTreeColor(e: any){
  let str = e.replace('rgb(','').replace(')','');
  treeStyle.value.background = str
}

function setTree(){
  getTreeAsias(treeData.value.menu[0])
  console.log(treeData.value, 'treeData.value')
  maxDeep.value = setMaxDeepNumber(treeData.value.menu)
}

function setMaxDeepNumber(array: any, nullArray: Array<[]> = []){
  array.forEach((item:any, index:any) => {
      if(item.children != null && item.children.length > 0){
          setMaxDeepNumber(item.children, nullArray)
      }else{
          nullArray.push(item as never)
      }
  })
  return Math.max.apply(Math,nullArray.map((item: any) => { return item.deep << 0 }))
}

function getTreeAsias(array: any, deepNum: any=1){
    array.forEach((item:any, index:any) => {
        if(item.children != null && item.children.length > 0){
            getTreeAsias(item.children, deepNum+1)
        }
        item.deep = deepNum
    })
    return array;
}
</script>

<style lang="scss" scoped>
.common-layout {
}
</style>