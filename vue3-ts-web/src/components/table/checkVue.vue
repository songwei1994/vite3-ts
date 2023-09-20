<template>
    <el-table ref="singleTableRef" :data="tableData" highlight-current-row style="width: 100%;height: 100%;">
        <el-table-column type="index" width="50" />
        <el-table-column property="date" label="Date" width="120" />
        <el-table-column property="name" label="Name" width="120" />
        <el-table-column property="address" label="Address" />
    </el-table>
</template>

<script setup lang="ts">
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
]
</script>

<style lang="scss" module>
.container {}
</style>
