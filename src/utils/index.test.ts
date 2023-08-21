import { describe, expect, it } from 'vitest'
import { removeAccents, filterAssociationList } from './index'
import api from '../services/api'
import filteredList from './mocks/filteredList.json'

describe('utils', () => {
  const str = 'Hello les amis'
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
    expect(removeAccents(str).match('les categories sont heteroclites'))
  })
  it('should do nothing if there is no accent', () => {
    expect(removeAccents(str).match(str))
  })
  it('should filter the assocation list by selected filter in case insencitive', () => {
    expect(filterAssociationList('category', 'EdUcaTion')).toEqual(association)
  })
  it('should return a list of association by categories', () => {
    expect(api.getAll('', ['education', 'environnement'])).toMatchObject(filteredList)
  })
  it('should return a list of association by name', () => {
    expect(api.getAll('assoc4', [])).toMatchObject(association)
  })
})
