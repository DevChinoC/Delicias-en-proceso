import gelatina1 from '../assets/productos/gelatina1.png'

export interface Product {
  id: number
  name: string
  description: string
  price: number
  category: string
  image: string
  featured?: boolean
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Gelatina Artística Mosaico',
    description: 'Deliciosa gelatina artesanal multicolor con leche condensada y un acabado cristalino único.',
    price: 350,
    category: 'postres',
    image: gelatina1,
    featured: true,
  },
  {
    id: 2,
    name: 'Cupcakes de Vainilla',
    description: 'Esponjosos cupcakes con buttercream de vainilla.',
    price: 35,
    category: 'cupcakes',
    image: '',
    featured: true,
  },
  {
    id: 3,
    name: 'Galletas Decoradas',
    description: 'Galletas de mantequilla con glaseado royal icing.',
    price: 25,
    category: 'galletas',
    image: '',
    featured: true,
  },
  {
    id: 4,
    name: 'Cheesecake de Fresa',
    description: 'Cremoso cheesecake con coulis de fresa natural.',
    price: 380,
    category: 'postres',
    image: '',
  },
]
