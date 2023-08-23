<script setup lang="ts">
const props = defineProps<{
  state: {
    tags: string[]
    selectedTags: string[]
  }
}>()
</script>
<template>
  <div class="flexibleRows">
    <template v-for="tag in props.state.tags" :key="tag">
      <a-checkable-tag
        :style="{ margin: 0 }"
        :checked="props.state.selectedTags.indexOf(tag) > -1"
        @change="
          (checked: boolean) => {
            $emit('changeFunction', tag, checked)
          }
        "
      >
        {{ tag }}
      </a-checkable-tag>
    </template>
  </div>
</template>

<style scoped>
.flexibleRows {
  display: flex;
  gap: 5px;
  justify-content: center;
}
</style>
