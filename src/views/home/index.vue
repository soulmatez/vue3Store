<!--
 * @Author: YourName
 * @Date: 2022-06-17 14:21:15
 * @LastEditTime: 2022-07-12 15:28:38
 * @LastEditors: Soulmate
 * @Description: 
 * @FilePath: \storeVue3\vue3Store\src\views\home\index.vue
 * 版权声明
-->
<template>
  <div class="common-layout">
    <el-color-picker 
      color-format="rgb" 
      v-model="treeStyle.background" 
      @change="getTreeColor" />
    <MenuTree 
      :style="treeStyle"
      :dataTree="treeData.menu" 
      :maxDeep="maxDeep" 
      >
    </MenuTree>
  </div>
</template>

<script setup lang="ts" name="Home">
import {
  reactive,
  ref,
  onMounted,
  nextTick
} from "vue";
import { getTree } from '@/api/components/menuTree';
import MenuTree from "@/components/MenuTree/index.vue";


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
  getTreeMenu()

  nextTick(()=>{
    setTree()
  })
})

function getTreeMenu(){
  getTree().then((res)=>{
    let list = res.data.list[0];
    treeData.value.menu.push(list as never)
    setTree()
  })
}

function getTreeColor(e: any){
  let str = e.replace('rgb(','').replace(')','');
  treeStyle.value.background = str
}

function setTree(){
  getTreeAsias(treeData.value.menu)
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