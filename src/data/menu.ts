import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  // Les Pâtes
  {
    id: '1',
    name: 'Lasagne Viande Hachée',
    description: 'Lasagne traditionnelle avec viande hachée, sauce tomate et fromage',
    price: 19,
    category: 'Les Pâtes',
    image: 'https://images.pexels.com/photos/4079520/pexels-photo-4079520.jpeg',
    customizable: true,
    ingredients: ['Pâtes', 'Viande Hachée', 'Sauce Tomate', 'Fromage']
  },
  {
    id: '2',
    name: 'Bolognaise',
    description: 'Pâtes à la sauce bolognaise traditionnelle avec viande hachée',
    price: 18,
    category: 'Les Pâtes',
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
    customizable: true,
    ingredients: ['Pâtes', 'Sauce Bolognaise', 'Viande Hachée', 'Parmesan']
  },
  {
    id: '3',
    name: 'Pesto Poulet',
    description: 'Pâtes au pesto frais avec morceaux de poulet grillé',
    price: 21,
    category: 'Les Pâtes',
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
    customizable: true,
    ingredients: ['Pâtes', 'Pesto', 'Poulet Grillé', 'Parmesan']
  },
  {
    id: '4',
    name: 'Puttanesca',
    description: 'Pâtes à la sauce puttanesca avec olives, câpres et anchois',
    price: 17,
    category: 'Les Pâtes',
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
    customizable: true,
    ingredients: ['Pâtes', 'Sauce Tomate', 'Olives', 'Câpres', 'Anchois']
  },
  {
    id: '5',
    name: 'Carbonara',
    description: 'Pâtes carbonara crémeuses avec lardons et parmesan',
    price: 18,
    category: 'Les Pâtes',
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
    customizable: true,
    ingredients: ['Pâtes', 'Crème', 'Lardons', 'Parmesan', 'Œuf']
  },
  {
    id: '6',
    name: 'Ravioli Ricotta Épinard',
    description: 'Raviolis frais farcis à la ricotta et aux épinards',
    price: 20,
    category: 'Les Pâtes',
    image: 'https://images.pexels.com/photos/4079520/pexels-photo-4079520.jpeg',
    customizable: false,
    ingredients: ['Raviolis', 'Ricotta', 'Épinards', 'Sauce Tomate']
  },
  {
    id: '7',
    name: 'Ravioli 4 Fromages',
    description: 'Raviolis aux quatre fromages dans une sauce crémeuse',
    price: 21,
    category: 'Les Pâtes',
    image: 'https://images.pexels.com/photos/4079520/pexels-photo-4079520.jpeg',
    customizable: false,
    ingredients: ['Raviolis', 'Quatre Fromages', 'Sauce Crème']
  },
  {
    id: '8',
    name: 'Ravioli Viande Hachée',
    description: 'Raviolis farcis à la viande hachée avec sauce tomate',
    price: 22,
    category: 'Les Pâtes',
    image: 'https://images.pexels.com/photos/4079520/pexels-photo-4079520.jpeg',
    customizable: false,
    ingredients: ['Raviolis', 'Viande Hachée', 'Sauce Tomate']
  },
  {
    id: '9',
    name: 'Fruits de Mer',
    description: 'Pâtes aux fruits de mer avec crevettes, moules et calamars',
    price: 25,
    category: 'Les Pâtes',
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
    customizable: true,
    ingredients: ['Pâtes', 'Crevettes', 'Moules', 'Calamars', 'Sauce Tomate']
  },
  
  // Les Plats
  {
    id: '10',
    name: 'Escalope Grillée',
    description: 'Escalope de poulet grillée servie avec riz, salade et frites',
    price: 17,
    category: 'Les Plats',
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg',
    customizable: true,
    ingredients: ['Escalope de Poulet', 'Riz', 'Salade', 'Frites']
  },
  {
    id: '11',
    name: 'Escalope Pannée',
    description: 'Escalope de poulet pannée croustillante avec riz, salade et frites',
    price: 18,
    category: 'Les Plats',
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg',
    customizable: true,
    ingredients: ['Escalope Pannée', 'Riz', 'Salade', 'Frites']
  },
  {
    id: '12',
    name: 'Escalope à la Crème aux Champignons',
    description: 'Escalope de poulet dans une sauce crémeuse aux champignons',
    price: 20,
    category: 'Les Plats',
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg',
    customizable: true,
    ingredients: ['Escalope de Poulet', 'Sauce Crème', 'Champignons', 'Riz', 'Salade', 'Frites']
  },
  {
    id: '13',
    name: 'Ojja Merguez',
    description: 'Plat traditionnel tunisien avec merguez, œufs et sauce tomate épicée',
    price: 15,
    category: 'Les Plats',
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg',
    customizable: false,
    ingredients: ['Merguez', 'Œufs', 'Sauce Tomate', 'Épices']
  },
  {
    id: '14',
    name: 'Ojja Fruits de Mer',
    description: 'Ojja traditionnelle aux fruits de mer avec œufs et sauce épicée',
    price: 20,
    category: 'Les Plats',
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg',
    customizable: false,
    ingredients: ['Fruits de Mer', 'Œufs', 'Sauce Tomate', 'Épices']
  },

  // Les Salades
  {
    id: '15',
    name: 'Salade César',
    description: 'Laitue, roquette, tomate cerise, poulet, parmesan et croutons',
    price: 16,
    category: 'Les Salades',
    image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg',
    customizable: true,
    ingredients: ['Laitue', 'Roquette', 'Tomate Cerise', 'Poulet', 'Parmesan', 'Croutons']
  },
  {
    id: '16',
    name: 'Salade Niçoise',
    description: 'Laitue, roquette, œuf dur, thon, haricots verts, courgette, betterave et croutons',
    price: 19,
    category: 'Les Salades',
    image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg',
    customizable: true,
    ingredients: ['Laitue', 'Roquette', 'Œuf Dur', 'Thon', 'Haricots Verts', 'Courgette', 'Betterave', 'Croutons']
  },
  {
    id: '17',
    name: 'Salade Crevette Bang Bang',
    description: 'Laitue, roquette, tomate cerise, maïs, fromage gouda et crevettes bang bang',
    price: 25,
    category: 'Les Salades',
    image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg',
    customizable: true,
    ingredients: ['Laitue', 'Roquette', 'Tomate Cerise', 'Maïs', 'Fromage Gouda', 'Crevettes Bang Bang']
  }
];

export const categories = ['Tous', 'Les Pâtes', 'Les Plats', 'Les Salades'];