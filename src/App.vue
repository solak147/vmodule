<template>
  <Layout>
   
  </Layout>

</template>

<script setup>
import { ref, onMounted, reactive, nextTick, onUnmounted } from 'vue'
import Layout from '@/layout/index.vue'
import Utils from './utils'
import API from './apis'

onMounted(async () => {
  console.log(await API.RedEnvelope.getRPActivityInfo())
  console.log(Utils.getURLQuery('ext', 'http://com.com/?ext=124'))
})

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
