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
    name: 'Pastel de Chocolate',
    description: 'Húmedo pastel de chocolate con ganache y frutos rojos.',
    price: 450,
    category: 'pasteles',
    image: '',
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
