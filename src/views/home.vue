<script setup lang="ts">
import CheckableTag from '@/components/CheckableTag.vue'
import SearchBar from '@/components/SearchBar.vue'
import { useHome } from '../composables/useHome'

const { onSearch } = useHome()
</script>

<template>
  <SearchBar @search-function="(arg) => onSearch(arg)"></SearchBar>
  <CheckableTag></CheckableTag>
</template>
