<!--
 * @Author: YourName
 * @Date: 2022-06-17 14:21:15
 * @LastEditTime: 2022-06-22 16:37:26
 * @LastEditors: Soulmate
 * @Description: 
 * @FilePath: \storeVue3Ts\src\views\home\index.vue
 * 版权声明
-->
<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts" name="Home">
import { reactive } from "vue";

  const leftTabList = reactive([]);
</script>

<style lang="scss" scoped>
  .common-layout{
    .el-container{
      width: 100%;
      height: 100vh;
      .el-aside{
        background: chartreuse;
      }
      .el-main{
        background: chocolate;
      }
    }
  }
</style>