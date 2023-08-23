<script setup lang="ts">
import { inject } from 'vue'

const isLargeScreen = inject('isLargeScreen')
</script>

<template>
  <a-page-header
    class="header"
    style="border: 1px solid rgb(235, 237, 240)"
    title="HelloRecherche"
  />

  <div :class="{ bigBody: isLargeScreen, smallBody: !isLargeScreen }">
    <RouterView></RouterView>
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
