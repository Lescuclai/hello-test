<script setup lang="ts">
import CheckableTag from '@/components/CheckableTag.vue'
import SearchBar from '@/components/SearchBar.vue'
import CardsList from '@/components/CardsList.vue'
import Map from '@/components/Map.vue'
import { useHome } from '../composables/useHome'

const { onSearch, state, handleChange, onClickCard, selectedAssociationId, associationPosition } =
  useHome()
</script>

<template>
  <SearchBar @search-function="(arg) => onSearch(arg)"></SearchBar>
  <CheckableTag :state="state" @change-function="(arg1, arg2) => handleChange(arg1, arg2)">
  </CheckableTag>
  <Map :position="associationPosition" :filteredAssociations="state.filteredAssociations"></Map>
  <CardsList
    :associations="state.filteredAssociations"
    :selectedAssociation="selectedAssociationId"
    @select-card="(arg) => onClickCard(arg)"
  ></CardsList>
</template>
