<template>
  <div class="title">
    {{ pagesStore.pageCount }}
  </div>
  <el-button type="primary" @click="handleEdit('add',null)">增加</el-button>

  <el-table :data="tableData2" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
    <el-table-column label="Address">
      <template #default="{ row }">
        <el-tag :type="row.check ? 'success' : 'warning'">{{ checkFilter(row.check) }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button @click="handleEdit('update',scope.row)">编辑</el-button>
        <el-button type="danger" @click="handleDelete(scope.$index,scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog v-model="centerDialogVisible" :title="category=='add'?'添加数据':'编辑数据'" width="40%" center>
    <el-form :model="addInfoForm">
      <el-form-item label="姓名"><el-input v-model="addInfoForm.name"></el-input> </el-form-item>
      <el-form-item label="地址"><el-input v-model="addInfoForm.address"></el-input> </el-form-item>
      <el-form-item label="时间"> <el-date-picker v-model="addInfoForm.date" placeholder="选择时间"
          style="width: 100%;"></el-date-picker>
      </el-form-item>
      <el-form-item label="是否发表"><el-switch v-model="addInfoForm.check"></el-switch> </el-form-item>

    </el-form>
    <template #footer>
      <span>
        <el-button @click="centerDialogVisible = false">取消</el-button>
        <el-button @click="centerDialogVisible = false" type="primary">{{ category=='add'?'添加数据':'修改' }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { ITableData } from '../../models'
import axios from '../../http'
import { onMounted, computed } from 'vue';
let title = ref('首页')
import usePagesStore from '../../store/pages'

let centerDialogVisible = ref<boolean>(false)
let category = ref<string>('')
const pagesStore = usePagesStore()
const tableData2 = ref<ITableData[]>()
const addInfoForm = ref<ITableData | {}>({
  name: '',
  date: '',
  check: false,
  id: 1,
  address: ''
})
const handleEdit = (type:string,row:ITableData | null) => {
  category.value = type
  centerDialogVisible.value = true
  type=='add'?addInfoForm.value={} :addInfoForm.value={...row}
}
const handleDelete = () => {

}
pagesStore.$subscribe((mutation, state) => {
  console.log(mutation, state);
  console.log(state);
  console.log(mutation);
})
onMounted(async () => {
  let { data } = await axios.request<{ data: ITableData[] }>('get', 'data/query');
  tableData2.value = data;

  let result = await axios.request('get', 'mock/getMenuList');
  console.log(result)
})
const checkFilter = computed(() => (item: boolean) => {
  switch (item) {
    case true:
      return '已发表'
    case false:
      return '未发表'
    default:
      return '未确定'
  }
})
</script>
  
<style lang="scss" scoped>
.title {
  font-size:20px;
}
</style>
  