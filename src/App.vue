<script setup lang="ts">
import homeView from './views/homeView.vue'
</script>

<template>
  <a-page-header
    class="header"
    style="border: 1px solid rgb(235, 237, 240)"
    title="Titre de la page"
    :avatar="{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }"
  />

  <homeView></homeView>
</template>

<style scoped>
.header {
  position: 'sticky';
  top: 0;
  z-index: 1;
  width: '100%';
  display: 'flex';
  background-color: aliceblue;
}
</style>
