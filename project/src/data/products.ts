import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Essential Cotton Tee',
    price: 29.99,
    image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Our signature cotton t-shirt made from premium materials for everyday comfort.',
    colors: ['Black', 'White', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 2,
    name: 'Vintage Graphic Tee',
    price: 34.99,
    image: 'https://images.pexels.com/photos/4066293/pexels-photo-4066293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Vintage-inspired graphic t-shirt with a relaxed fit and unique artwork.',
    colors: ['White', 'Gray', 'Black'],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 3,
    name: 'Premium Slim Fit Tee',
    price: 39.99,
    image: 'https://images.pexels.com/photos/5082976/pexels-photo-5082976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Slim fit t-shirt with a modern silhouette, made from luxuriously soft cotton blend.',
    colors: ['Gray', 'Black', 'Blue'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 4,
    name: 'Organic Cotton Crew',
    price: 32.99,
    image: 'https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Sustainable and eco-friendly organic cotton t-shirt with a classic crew neck.',
    colors: ['Green', 'White', 'Brown'],
    sizes: ['S', 'M', 'L', 'XL']
  }
];