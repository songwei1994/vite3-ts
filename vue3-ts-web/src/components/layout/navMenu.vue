<template>
  <el-aside>
    <el-menu default-active="2" router>
        <el-menu-item v-for="v in navMenus" :key="v.url" :index = "v.url">
            <el-icon><component :is="v.icon"/></el-icon>
                <span>{{ v.name }}</span>
        </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script setup lang="ts">
import {useMenu} from './useMenu'
const {navMenus} = useMenu()


</script>

<style lang="scss" module>
 .container {

 }
</style>
