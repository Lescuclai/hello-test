export interface Association {
  id: number
  name: string
  description: string
  coordinates: { long: number; lat: number }
  category: string
  address: {
    number: number
    street: string
    postcode: number
    town: string
    country: string
  }
  phoneNumber: string
}
