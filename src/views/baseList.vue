<template>
    <BaseList api="/person/chats">
      <template #default="{ listData }">
         <div v-for="(item, index) in listData" :key="index">{{ item.title }}</div>
      </template>
  </BaseList>
</template>

<script setup>
import BaseList from '@/components/BaseList.vue'

</script>