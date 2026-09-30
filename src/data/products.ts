import gelatina1 from '../assets/productos/gelatina1.png'
import gelatina2 from '../assets/productos/gelatina2.png'
import gelatina3 from '../assets/productos/gelatina3.png'
import gelatina4 from '../assets/productos/gelatina4.png'
import gelatina5 from '../assets/productos/gelatina5.png'
import gelatina6 from '../assets/productos/gelatina6.png'
import gelatina7 from '../assets/productos/gelatina7.png'
import gelatina8 from '../assets/productos/gelatina8.jpeg'
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
    name: 'Gelatina 3 leches con Frutas',
    description: 'Exquisita gelatina cremosa en capas, coronada con fresas jugosas, duraznos en almíbar y uvas frescas.',
    price: 350,
    category: 'gelatinas',
    image: gelatina1,
    featured: true,
  },
  {
    id: 2,
    name: 'Gelatina Floral de Mosaico',
    description: 'Espectacular gelatina de mosaico multicolor con base cremosa y una deslumbrante flor de mango al centro.',
    price: 380,
    category: 'gelatinas',
    image: gelatina2,
    featured: true,
  },
  {
    id: 3,
    name: 'Chocoflan Sorpresa Especial',
    description: 'Cremoso chocoflan decorado con abundantes fresas frescas, detalles dorados y mariposas de adorno.',
    price: 420,
    category: 'pasteles',
    image: chocoflan,
    featured: true,
  },
  {
    id: 4,
    name: 'Cupcakes Gourmet Florales',
    description: 'Set de cupcakes esponjosos decorados con rosetones artesanales de betún multicolor y perlas comestibles.',
    price: 45,
    category: 'postres',
    image: cupkas,
    featured: true,
  },
  {
    id: 5,
    name: 'Brochetas de Donas Glaseadas',
    description: 'Divertidas brochetas de donas esponjosas con ricos glaseados de chocolate, vainilla y toppings crujientes.',
    price: 30,
    category: 'postres',
    image: donas,
  },
  {
    id: 6,
    name: 'Gelatina Tricolor Mexicana',
    description: 'Orgullo patrio en cada rebanada: gelatina tricolor con fresas frescas, uvas verdes y el escudo nacional.',
    price: 360,
    category: 'gelatinas',
    image: gelatina3,
  },
  {
    id: 7,
    name: 'Gelatina Frutal Suprema',
    description: 'Festiva gelatina gourmet repleta de una abundante selección de fresas, mangos y uvas frescas.',
    price: 340,
    category: 'gelatinas',
    image: gelatina4,
  },
  {
    id: 8,
    name: 'Gelatina Corazón Cumpleaños',
    description: 'Elegante gelatina en forma de corazón sobre pastel de chocolate, decorada con fresas, cerezas y mariposa dorada.',
    price: 370,
    category: 'gelatinas',
    image: gelatina5,
  },
  {
    id: 9,
    name: 'Gelatina Cremosa de Piña',
    description: 'Suave gelatina cremosa de piña con leche, decorada con piña natural, cerezas al almíbar y finas perlas.',
    price: 350,
    category: 'gelatinas',
    image: gelatina6,
  },
  {
    id: 10,
    name: 'Gelatina Royale con Coco',
    description: 'Deliciosa gelatina cremosa con base de fresa, decorada con trufas de coco y chispas blancas.',
    price: 390,
    category: 'gelatinas',
    image: gelatina7,
  },
  {
    id: 11,
    name: 'Panqué Glaseado con Nuez',
    description: 'Exquisito panqué casero esponjoso bañado en glaseado cremoso y espolvoreado con abundante nuez picada.',
    price: 180,
    category: 'pasteles',
    image: panque,
  },
  {
    id: 12,
    name: 'Pastel en Copa Gourmet',
    description: 'Elegantes copas individuales con deliciosas capas intercaladas de bizcocho, crema y toppings especiales.',
    price: 55,
    category: 'postres',
    image: pastelenvaso,
  },
  {
    id: 13,
    name: 'Roles de Canela Especiales',
    description: 'Tientanores roles de canela suaves coronados con glaseado y toppings de mango, frutos rojos y galleta.',
    price: 40,
    category: 'postres',
    image: roles,
  },
  {
    id: 14,
    name: 'Rosca de Reyes Tradicional',
    description: 'Tradicional rosca esponjosa dorada al horno, decorada con tiras de ate de frutas, azúcar y cerezas.',
    price: 320,
    category: 'pasteles',
    image: rosca,
    featured: true,
  },
  {
    id: 15,
    name: 'Paletas de Gelatina Temáticas',
    description: 'Paletas individuales de gelatina cremosa personalizadas con temática y diseños especiales para eventos.',
    price: 380,
    category: 'gelatinas',
    image: gelatina8,
    featured: true,
  },
]

