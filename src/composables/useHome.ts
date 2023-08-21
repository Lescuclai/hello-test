import { reactive } from 'vue'
import api from '../services/api'
import { type Association } from '../data/interfaces/association'

export function useHome() {
  const state = reactive({
    tags: ['Environnement', 'Santé', 'Education', 'Développement local'],
    selectedTags: [] as string[],
    filteredAssociations: [] as Association[]
  })

  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked
      ? [...state.selectedTags, tag]
      : state.selectedTags.filter((t) => t !== tag)
    state.selectedTags = nextSelectedTags
    state.filteredAssociations = api.getAll('', state.selectedTags)
  }

  const onSearch = (searchValue: string) => {
    state.filteredAssociations = api.getAll(searchValue.toLowerCase(), [])
  }
  return { onSearch, state, handleChange }
}
