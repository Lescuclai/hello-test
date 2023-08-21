<script setup lang="ts">
import CheckableTag from '@/components/CheckableTag.vue'
import SearchBar from '@/components/SearchBar.vue'
import { useHome } from '../composables/useHome'

const { onSearch, state, handleChange } = useHome()
</script>

<template>
  <SearchBar @search-function="(arg) => onSearch(arg)"></SearchBar>
  <CheckableTag :state="state" @change-function="(arg1, arg2) => handleChange(arg1, arg2)">
  </CheckableTag>
  <p v-if="state.filteredAssociations.length !== 0">
    {{ state.filteredAssociations }}
  </p>
</template>
