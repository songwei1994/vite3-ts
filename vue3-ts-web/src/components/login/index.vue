<template>
    <div id="module" class="common-layout " >
      登录页
      <el-row style="min-height: 100vh;" class="bg-indigo-500">
        <el-col :span="16"></el-col>
        <el-col :span="8"></el-col>
      </el-row>
    </div>
  </template>
  
  <script setup lang="ts">
  import LocalCache  from "../../utills/index.ts";
  LocalCache.setCache('token','123')
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
  