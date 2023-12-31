import { describe, expect, it } from 'vitest'
import { removeAccents, filterAssociationList, capitalizeFirstLetter } from './index'
import api from '../services/api'
import filteredList from './mocks/filteredList.json'

describe('utils', () => {
  const str = 'les catégories sont hétéroclites'
  const association = [
    {
      id: 4,
      name: 'assoc4',
      description: 'lorem ipsum assoc4',
      coordinates: { long: -0.5745145082473755, lat: 44.83394241333008 },
      category: 'education',
      address: {
        number: 2,
        street: 'bassin à flot',
        postcode: 33300,
        town: 'Bordeaux',
        country: 'France'
      },
      phoneNumber: '0685217659'
    }
  ]

  it('should remove accents from string', () => {
    expect(removeAccents(str)).toMatch('les categories sont heteroclites')
  })
  it('should filter the assocation list by selected filter in case insencitive', () => {
    expect(filterAssociationList('category', 'EdUcaTion')).toEqual(association)
  })
  it('should return a string with capitalized first letter', () => {
    expect(capitalizeFirstLetter('environnement')).toEqual('Environnement')
  })
  it('should return a list of association by categories', () => {
    expect(api.getAll('', ['education', 'environnement'])).toMatchObject(filteredList)
  })
  it('should return a list of association by name', () => {
    expect(api.getAll('assoc4', [])).toMatchObject(association)
  })
  it('should return an association by id', () => {
    expect(api.getOnebyId(4)).toMatchObject(association[0])
  })
})
