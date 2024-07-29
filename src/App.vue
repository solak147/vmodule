<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />

  <BaseList api="/person/chats">
      <template #default="{ listData }">
         <div v-for="(item, index) in listData" :key="index">{{ item.title }}</div>
      </template>
  </BaseList>

</template>

<script setup>
import { ref, onMounted, reactive, nextTick, onUnmounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import BaseList from './components/BaseList.vue'
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
