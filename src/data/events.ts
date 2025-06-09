import { Event } from '../types';

export const events: Event[] = [
  {
    id: '1',
    title: 'Movie Night: Italian Cinema',
    description: 'Join us for a classic Italian film with popcorn and drinks',
    date: '2024-01-15',
    time: '19:00',
    type: 'movie',
    capacity: 30,
    registered: 12
  },
  {
    id: '2',
    title: 'Board Game Evening',
    description: 'Bring friends or make new ones over board games and snacks',
    date: '2024-01-18',
    time: '18:30',
    type: 'gaming',
    capacity: 20,
    registered: 8
  },
  {
    id: '3',
    title: 'Chef\'s Special Dinner',
    description: 'Multi-course tasting menu featuring seasonal ingredients',
    date: '2024-01-20',
    time: '20:00',
    type: 'dinner',
    capacity: 25,
    registered: 15
  },
  {
    id: '4',
    title: 'Productivity Workshop',
    description: 'Learn effective coworking strategies and time management',
    date: '2024-01-22',
    time: '14:00',
    type: 'workshop',
    capacity: 15,
    registered: 6
  }
];