import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import OrderAhead from './components/OrderAhead';
import EventCalendar from './components/EventCalendar';
import Feedback from './components/Feedback';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import { MenuItem, User } from './types';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [showLogin, setShowLogin] = useState(false);
  const [orderItems, setOrderItems] = useState<{ item: MenuItem; quantity: number }[]>([]);

  const handleLogin = (userData: User) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleAddToOrder = (item: MenuItem, quantity: number) => {
    setOrderItems(prev => {
      const existingItem = prev.find(orderItem => orderItem.item.id === item.id);
      if (existingItem) {
        return prev.map(orderItem =>
          orderItem.item.id === item.id
            ? { ...orderItem, quantity: orderItem.quantity + quantity }
            : orderItem
        );
      }
      return [...prev, { item, quantity }];
    });
  };

  const handleClearOrder = () => {
    setOrderItems([]);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onLoginClick={() => setShowLogin(true)}
        isLoggedIn={!!user}
        user={user || undefined}
      />
      
      <main>
        <Hero />
        <Menu onAddToOrder={handleAddToOrder} />
        <OrderAhead orderItems={orderItems} onClearOrder={handleClearOrder} />
        <EventCalendar />
        <Feedback />
        <Contact />
      </main>

      <Footer />

      <Login
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onLogin={handleLogin}
      />

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-green-500 z-50 transform origin-left scale-x-0 transition-transform duration-200"></div>
    </div>
  );
}

export default App;