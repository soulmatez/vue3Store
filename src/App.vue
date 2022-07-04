<!--
 * @Author: Soulmate
 * @Date: 2022-06-17 14:18:28
 * @LastEditTime: 2022-06-28 11:02:59
 * @LastEditors: Soulmate
 * @Description: 
 * @FilePath: \storeVue3Ts\src\App.vue
 * 版权声明
-->
<script setup lang="ts">
import { computed, ref, watch, provide } from "vue";
import { ElConfigProvider } from "element-plus";

import useStore from '@/store';

// 导入 Element Plus 语言包
import zhCn from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";


const { app } = useStore();

const language = computed(() => app.language);
const size: any = computed(() => app.size);

const locale = ref();
watch(
  language,
  (value) => {
    locale.value = value == "en" ? en : zhCn;
  },
  {
    // 初始化立即执行
    immediate: true,
  }
);
</script>
<template>
  <el-config-provider :locale="locale" :size="size">
    <router-view />
  </el-config-provider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
