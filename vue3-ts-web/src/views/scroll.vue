<template>
    <div>
      <h1>keep-alive 记录滚动位置</h1>
      <p v-for="i in 100" :key="i">{{i}}我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容</p>
    </div>
      <!-- <div v-loading="loading">
    <div v-if="!loading">

    </div>
  </div> -->
  <!-- <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="User" name="first">User</el-tab-pane>
      <el-tab-pane label="Config" name="second">Config</el-tab-pane>
      <el-tab-pane label="Role" name="third">Role</el-tab-pane>
      <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
    </el-tabs> -->
  </template>
  
  <script setup lang="ts">
  import useKeepScroll from '../hooks/useKeepScroll.ts'
  // const loading = ref(false)
// import { useFetchSelect } from '@/hooks/useSelect.ts'
// import { useAutoRequest, submitApi } from '@/hooks/useloading.ts'

// const value = ref('')
//获取下拉框选项
// function getSelectData() {
//   return new Promise<any[]>((resolve, reject) => {
//     setTimeout(() => {
//       console.log(Math.random());
//       if (Math.random() > 0.2) {
//         resolve([{
//           key: 1,
//           value: 'apple',
//           label: 'apple'
//         }, {
//           key: 2,
//           label: 'juice',
//           value: 'juice'
//         }]);
//       } else reject(new Error('wrong network'))
//     }, 3000)
//   })
// }
// const selectOptions = useFetchSelect({
//   apiFun: getSelectData
// })

//获取button状态
// const [loading, submit] = useAutoRequest(submitApi);

// function onSubmit() {
//   submit("aaa").then((res) => {
//     console.log("res", res);
//   });
// }

// const time = ref(new Date().toLocaleString())
// const loading2 = ref(true)

// setTimeout(() => {
//   loading2.value = false
// }, 1000)
  defineOptions({
    name: 'ArticleDetail'
  })
  
  useKeepScroll()
  </script>