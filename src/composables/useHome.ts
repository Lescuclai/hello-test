import { reactive, ref } from 'vue'
import api from '../services/api'
import { type Association } from '../data/interfaces/association'
import { useRouter } from 'vue-router'

export function useHome() {
  const state = reactive({
    tags: ['Environnement', 'Santé', 'Education', 'Développement local'],
    selectedTags: [] as string[],
    filteredAssociations: [] as Association[]
  })

  const selectedAssociationId = ref<Number>(0)
  const associationPosition = ref({ long: null, lat: null })

  const router = useRouter()

  const resetSelectedAssociation = (): void => {
    selectedAssociationId.value = 0
    associationPosition.value = { long: null, lat: null }
  }

  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked
      ? [...state.selectedTags, tag]
      : state.selectedTags.filter((t) => t !== tag)
    state.selectedTags = nextSelectedTags
    state.filteredAssociations = api.getAll('', state.selectedTags)
    resetSelectedAssociation()
  }

  const onSearch = (searchValue: string) => {
    state.filteredAssociations = api.getAll(searchValue.toLowerCase(), [])
  }

  function onClickCard(id: number) {
    if (id === selectedAssociationId.value) {
      resetSelectedAssociation()
    } else {
      selectedAssociationId.value = id
      const associationFullData = api.getOnebyId(selectedAssociationId.value)
      associationPosition.value = associationFullData.coordinates
      router.push(`/#${id}`)
    }
  }

  return { onSearch, state, handleChange, onClickCard, selectedAssociationId, associationPosition }
}
