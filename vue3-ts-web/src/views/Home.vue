<template>

  <div class="content flex">
    <div class="left">
      <el-switch v-model="isCollapse" active-text="展开" inactive-text="折叠" inline-prompt />
      <el-menu default-active="2" :collapse="isCollapse" @open="handleOpen" @close="handleClose"
        active-text-color="#ffd04b" @select="selectItem">
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <DataAnalysis />
            </el-icon>
            <span>动态履历</span>
          </template>
          <el-menu-item index="checkVue">点检</el-menu-item>
          <el-menu-item index="faultVue">故障</el-menu-item>
          <el-menu-item index="repairVue">维修</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon>
              <Document />
            </el-icon>
            <span>静态履历</span>
          </template>
          <el-menu-item index="2-1">点检标准</el-menu-item>
          <el-menu-item index="2-2">维修标准</el-menu-item>
          <el-menu-item index="2-3">给油脂标准</el-menu-item>
          <el-menu-item index="2-4">技术标准</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
    <div class="right relative">
      <div class="box-table m-1 absolute" style="width: 100%;">
        <component :is="compId"></component>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, shallowRef,markRaw } from 'vue'
import {
  DataAnalysis,
  Document
} from '@element-plus/icons-vue'
import checkVue from '@/components/table/checkVue.vue'
import faultVue from '@/components/table/faultVue.vue'
import repairVue from '@/components/table/repairVue.vue'

const isCollapse = ref(false)
// const activeCom = ref(0)
const compId = shallowRef(checkVue)
const compData = reactive([
  {
    name: 'checkVue',
    com: markRaw(checkVue)
  },{
    name: 'faultVue',
    com: markRaw(faultVue)
  },{
    name: 'repairVue',
    com: markRaw(repairVue)
  },
  // {
  //   name: 'checkStaticVue',
  //   com: markRaw(checkStaticVue)
  // },{
  //   name: 'repairStaticVue',
  //   com: markRaw(repairStaticVue)
  // }, {
  //   name: 'oilStaticVue',
  //   com: markRaw(oilStaticVue)
  // }, {
  //   name: 'techStaticVue',
  //   com: markRaw(techStaticVue)
  // },
])
const selectItem = (key: string) => {  
  let map = compData.find(item=>item.name == key)!.com
  compId.value = map
}
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang='scss' scoped>
.container {
  width: 100%;
  height: 100%;
}

.content {
  width: 100%;
  height: 100%;

  .left {
    // width: 200px;
  }

  .right {
    flex: 1;
  }
}

// .collpaseMenu{
//   width: 80px;
// }
:deep(.is-active) {
  color: #0078d4 !important;
}

.box-table {
  height: 600px;
}</style>