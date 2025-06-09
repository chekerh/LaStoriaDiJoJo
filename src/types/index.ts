export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  customizable: boolean;
  ingredients?: string[];
  special?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  type: 'movie' | 'gaming' | 'dinner' | 'workshop';
  capacity: number;
  registered: number;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  loyaltyPoints: number;
  isEmployee: boolean;
}

export interface Order {
  id: string;
  items: MenuItem[];
  total: number;
  status: 'preparing' | 'ready' | 'completed';
  orderType: 'pickup' | 'delivery';
  estimatedTime: string;
}