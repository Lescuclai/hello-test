<script setup lang="ts">
import { ref } from 'vue'
const search = ref<string>('')
</script>
<template>
  <a-input-search
    v-model:value="search"
    style="padding: 2rem 25rem"
    placeholder="Search"
    @search="$emit('searchFunction', search)"
  />
</template>
