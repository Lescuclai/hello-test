import { filterAssociationList } from '../utils'
import data from '../data/associations.json'

const api = {
  getAll: (searchValue: string, categories: string[]) => {
    if (searchValue && searchValue !== '') {
      return filterAssociationList('name', searchValue)
    } else {
      const associations: [] = []
      categories.map((categ) => {
        associations.push(filterAssociationList('category', categ))
      })

      return associations.flat()
    }
  },
  getOnebyId: (id: number) => {
    return data.find((association) => association.id === id)
  }
}

export default api
