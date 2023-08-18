import { reactive } from 'vue'

export function useCheckableTag() {
  const state = reactive({
    tags: ['Environnement', 'Santé', 'Eductation', 'Développement local'],
    selectedTags: [] as string[]
  })
  const handleChange = (tag: string, checked: boolean) => {
    const { selectedTags } = state
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag)
    state.selectedTags = nextSelectedTags
  }
  return { state, handleChange }
}
