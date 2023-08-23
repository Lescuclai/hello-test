<script setup lang="ts">
import homeView from './views/home.vue'
import { inject } from 'vue'

const isLargeScreen = inject('isLargeScreen')
</script>

<template>
  <a-page-header
    class="header"
    style="border: 1px solid rgb(235, 237, 240)"
    title="Rechercher une association"
    :avatar="{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }"
  />
  <div :class="{ bigBody: isLargeScreen, smallBody: !isLargeScreen }">
    <homeView />
  </div>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  background-color: aliceblue;
}
.bigBody {
  margin: 0 25rem;
}
.smallBody {
  margin: 0 3rem;
}
</style>
