<!--
 * @Author: Soulmate
 * @Date: 2022-07-04 14:58:44
 * @LastEditTime: 2022-07-12 15:27:28
 * @LastEditors: Soulmate
 * @Description: 
 * @FilePath: \storeVue3\vue3Store\src\components\MenuTree\index.vue
 * 版权声明
-->
<template>
  <el-space wrap>
    <template v-for="(item, index) in dataTree" :key="index">
      <el-card class="box-card" :style="`width: ${item.width}px;background: rgba(${style.background},${item.deep/maxDeep});color: ${style.color}`">
        <template #header>
          <div class="card-header">
            <span>{{ item.name }}</span>
          </div>
        </template>
        <div class="text item">
          <p v-if="item.children == null">{{ item.desc }}</p>
          <MenuTree 
            v-else 
            :dataTree="item.children" 
            :maxDeep="maxDeep" 
            :style="style"
            >
          </MenuTree>
        </div>
      </el-card>
    </template>
  </el-space>
</template>

<script setup lang="ts" name="MenuTree">
import MenuTree from "@/components/MenuTree/index.vue";
import { ComponentTreeMenu } from "@/types/api/components/";
import { computed, reactive, Prop, handleError, onMounted, ref, nextTick } from "vue";
import { ElMessage } from "element-plus";

const props = defineProps({
  dataTree: {
    type: Array,
    default: () => {
      return [];
    },
  },
  style: {
    type: Object,
    default: () => {
      return {}
    }
  },
  maxDeep: {
    type: Number,
    default: () => {
      return 10
    }
  }
});

</script>

<style lang="scss" scoped>
.lang-select__icon {
  line-height: 50px;
}
.el-card{
 cursor: pointer;
 color: #fff;
}
</style>
