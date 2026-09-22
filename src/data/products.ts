import gelatina1 from '../assets/productos/gelatina1.png'
import gelatina2 from '../assets/productos/gelatina2.png'
import gelatina3 from '../assets/productos/gelatina3.png'
import gelatina4 from '../assets/productos/gelatina4.png'
import gelatina5 from '../assets/productos/gelatina5.png'
import gelatina6 from '../assets/productos/gelatina6.png'
import gelatina7 from '../assets/productos/gelatina7.png'
import cupkas from '../assets/productos/cupkas.png'
import chocoflan from '../assets/productos/chocoflan.png'
import donas from '../assets/productos/donas.png'
import panque from '../assets/productos/panque.png'
import pastelenvaso from '../assets/productos/pastelenvaso.png'
import roles from '../assets/productos/roles.png'
import rosca from '../assets/productos/rosca.png'

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
    category: 'gelatinas',
    image: gelatina1,
    featured: true,
  },
  {
    id: 2,
    name: 'Gelatina Floral Encantada',
    description: 'Hermosa gelatina con diseño de flor encapsulada, elaborada con técnicas artesanales.',
    price: 380,
    category: 'gelatinas',
    image: gelatina2,
    featured: true,
  },
  {
    id: 3,
    name: 'Chocoflan Imposible',
    description: 'La combinación perfecta entre pastel de chocolate húmedo y flan napolitano cremoso.',
    price: 420,
    category: 'pasteles',
    image: chocoflan,
    featured: true,
  },
  {
    id: 4,
    name: 'Cupcakes Gourmet Decorados',
    description: 'Set de cupcakes esponjosos con betún suave, decorados delicadamente.',
    price: 45,
    category: 'cupcakes',
    image: cupkas,
    featured: true,
  },
  {
    id: 5,
    name: 'Donas Artesanales Glaseadas',
    description: 'Donas esponjosas cubiertas con deliciosos glaseados y toppings variados.',
    price: 30,
    category: 'postres',
    image: donas,
  },
  {
    id: 6,
    name: 'Gelatina 3D de Frutas',
    description: 'Gelatina con relieve tridimensional y combinaciones de sabores frutales y cremosos.',
    price: 360,
    category: 'gelatinas',
    image: gelatina3,
  },
  {
    id: 7,
    name: 'Gelatina Mosaico Creamy',
    description: 'Bloques de sabores frutales sobre una suave base de crema de vainilla.',
    price: 340,
    category: 'gelatinas',
    image: gelatina4,
  },
  {
    id: 8,
    name: 'Gelatina Gourmet de Capas',
    description: 'Elegante gelatina en capas intercaladas con textura cremosa y sabor único.',
    price: 370,
    category: 'gelatinas',
    image: gelatina5,
  },
  {
    id: 9,
    name: 'Gelatina Especial Multicolor',
    description: 'Colorida gelatina decorativa ideal para celebraciones y eventos especiales.',
    price: 350,
    category: 'gelatinas',
    image: gelatina6,
  },
  {
    id: 10,
    name: 'Gelatina de Corazón Fantasía',
    description: 'Diseño especial en forma de corazón con encapsulado cristalino artesanal.',
    price: 390,
    category: 'gelatinas',
    image: gelatina7,
  },
  {
    id: 11,
    name: 'Panqué Casero Tradicional',
    description: 'Panqué suave y aromático con mantequilla de alta calidad y toque de vainilla.',
    price: 180,
    category: 'pasteles',
    image: panque,
  },
  {
    id: 12,
    name: 'Pastel en Vaso Gourmet',
    description: 'Práctica presentación individual con capas de bizcocho, crema y rellenos especiales.',
    price: 55,
    category: 'postres',
    image: pastelenvaso,
  },
  {
    id: 13,
    name: 'Roles de Canela Especiales',
    description: 'Roles de canela recién horneados con glacé real y canela aromática.',
    price: 40,
    category: 'postres',
    image: roles,
  },
  {
    id: 14,
    name: 'Rosca Artesanal Especial',
    description: 'Esponjosa y tradicional rosca artesanal decorada con acitrón, frutos secos y cubierta especial.',
    price: 320,
    category: 'pasteles',
    image: rosca,
    featured: true,
  },
]

