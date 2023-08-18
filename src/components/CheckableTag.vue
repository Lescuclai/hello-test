<script setup lang="ts">
import { useCheckableTag } from '../composables/useCheckableTag'

const { state, handleChange } = useCheckableTag()
</script>
<template>
  <div class="flexibleRows">
    <template v-for="tag in state.tags" :key="tag">
      <a-checkable-tag
        :checked="state.selectedTags.indexOf(tag) > -1"
        @change="(checked) => handleChange(tag, checked)"
      >
        {{ tag }}
      </a-checkable-tag>
    </template>
  </div>
</template>

<style scoped>
.flexibleRows {
  display: flex;
  justify-content: center;
}
</style>
