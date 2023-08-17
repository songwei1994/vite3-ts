<template>
    <div>
      {{title}}
    </div>
  </template>
    
  <script setup lang="ts">
  import { ref } from 'vue';
  
  let title = ref('监测')
  </script>
    
  <style lang="scss" module>
  .container {}
  </style>
    