<template>
  <div id="module" class="common-layout">
    <el-container>
      <NavMenu></NavMenu>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import NavMenu from './navMenu.vue'
</script>

<style lang="scss" scoped>
.common-layout{
  height: 100%;
}
:deep(.el-container){
  height: 100%;
  .el-aside{
    background-color: #005a9e;
    .el-menu--vertical{
      background-color: #005a9e;
      .el-menu-item{
        color: white;
        &:hover{
          color: red;
          background-color: #2b88d8;
        }
      }
    }
  }
}
</style>
