import { ref } from 'vue'
import data from '../data/associations.json'

export function useHome() {
  const filteredAssociations = ref<[]>([])

  const onSearch = (searchValue<String>) => {
    console.log('or use this.value', searchValue)
    filteredAssociations.value = data.filter((datum) => datum.name.includes(searchValue))
    console.log(filteredAssociations.value)
  }
  return { onSearch, filteredAssociations }
}
