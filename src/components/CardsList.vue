<script setup lang="ts">
import { type Association } from '../data/interfaces/association'
import { capitalizeFirstLetter } from '../utils'
import { inject } from 'vue'

const isLargeScreen = inject('isLargeScreen')

defineProps<{
  associations: Association[]
  selectedAssociation: Number
}>()
</script>
<template>
  <a-card
    v-for="association in associations"
    :key="association.id"
    :title="association.name"
    @click="() => $emit('selectCard', association.id)"
    :class="{ selected: selectedAssociation === association.id }"
    class="card"
  >
    <span class="category">{{ capitalizeFirstLetter(association.category) }}</span>
    <p v-if="isLargeScreen && association.description.length > 300">
      {{ association.description.substring(0, 300) }}<span>...</span>
    </p>
    <p v-else-if="!isLargeScreen && association.description.length > 125">
      {{ association.description.substring(0, 125) }}<span>...</span>
    </p>
    <p v-else>{{ association.description }}</p>
  </a-card>
</template>

<style scoped>
.card {
  margin: 1rem 0;
}
.selected {
  border-color: aquamarine;
}
.category {
  padding: 5px;
  border: 1px solid cadetblue;
  border-radius: 5px;
}
</style>
