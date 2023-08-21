import { filterAssociationList } from '../utils'

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
  }
}

export default api
