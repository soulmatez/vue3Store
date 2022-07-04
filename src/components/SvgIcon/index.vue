<!--
 * @Author: Soulmate
 * @Date: 2022-06-20 10:57:38
 * @LastEditTime: 2022-06-20 11:50:36
 * @LastEditors: Soulmate
 * @Description: 
 * @FilePath: \storeVue3Ts\src\components\SvgIcon\index.vue
 * 版权声明
-->
<template>
  <svg aria-hidden="true" class="svg-icon">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  iconClass: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    default: '',
  },
});

const symbolId = computed(() => `#${props.prefix}-${props.iconClass}`);
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  overflow: hidden;
  fill: currentColor;
}
</style>
