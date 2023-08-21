import data from '../data/associations.json'

export const removeAccents = (string: string) =>
  string.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

export const filterAssociationList = (keyFilter: string, valueFilter: string) => {
  return data.filter((datum) => datum[keyFilter].includes(removeAccents(valueFilter.toLowerCase())))
}
