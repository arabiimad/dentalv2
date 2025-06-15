// src/data/products.ts
export interface Product {
  id: string
  name: string
  price: number
  image: string
  description: string
}

export const products: Product[] = [
  {
    id: 'fauteuil-101',
    name: 'Fauteuil opératoire X200',
    price: 2499.00,
    image: '/images/fauteuil.jpg',
    description: 'Fauteuil ergonomique avec inclinaison motorisée…'
  },
  {
    id: 'lumiere-led-450',
    name: 'Lampe LED 4500K',
    price: 399.00,
    image: '/images/lampe-led.jpg',
    description: 'Éclairage froid à intensité variable…'
  },
  // …etc
]
