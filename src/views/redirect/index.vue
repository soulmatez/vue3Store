<!--
 * @Author: Soulmate
 * @Date: 2022-12-13 16:04:48
 * @LastEditTime: 2022-12-13 16:10:44
 * @LastEditors: Soulmate
 * @Description: 
 * @FilePath: \vue3Store\src\views\redirect\index.vue
 * 版权声明
-->
<template>
  <div />
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const { params, query } = route;
const { path } = params;

console.log(params,query)
router.replace({ path: "/" + path, query });
</script>
