<template>
  <div v-loading="loading2">
    <div v-if="!loading2">
      <h2>首页</h2>
      <br>
      <br>
      <el-select v-model="value">
        <el-option v-for="item in selectOptions.options" :key="item.key" :label="item.label"
          :value="item.value"></el-option>
      </el-select>
      <el-button :loading="loading" @click="onSubmit">加载</el-button>
      <h3>{{ time }}, 你好呀!</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { useFetchSelect } from '@/hooks/useSelect.ts'
import { useAutoRequest, submitApi } from '@/hooks/useloading.ts'

const value = ref('')
//获取下拉框选项
function getSelectData() {
  return new Promise<any[]>((resolve, reject) => {
    setTimeout(() => {
      console.log(Math.random());
      if (Math.random() > 0.2) {
        resolve([{
          key: 1,
          value: 'apple',
          label: 'apple'
        }, {
          key: 2,
          label: 'juice',
          value: 'juice'
        }]);
      } else reject(new Error('wrong network'))
    }, 3000)
  })
}
const selectOptions = useFetchSelect({
  apiFun: getSelectData
})

//获取button状态
const [loading, submit] = useAutoRequest(submitApi);

function onSubmit() {
  submit("aaa").then((res) => {
    console.log("res", res);
  });
}

const time = ref(new Date().toLocaleString())
const loading2 = ref(true)

setTimeout(() => {
  loading2.value = false
}, 1000)
</script>

<style lang='scss' scoped></style>