import React, { useState } from 'react';
import { Plus, Minus, Star } from 'lucide-react';
import { menuItems, categories } from '../data/menu';
import { MenuItem } from '../types';

interface MenuProps {
  onAddToOrder: (item: MenuItem, quantity: number) => void;
}

const Menu: React.FC<MenuProps> = ({ onAddToOrder }) => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  const filteredItems = selectedCategory === 'Tous' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const updateQuantity = (itemId: string, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: Math.max(0, (prev[itemId] || 0) + change)
    }));
  };

  const handleAddToOrder = (item: MenuItem) => {
    const quantity = quantities[item.id] || 1;
    onAddToOrder(item, quantity);
    setQuantities(prev => ({ ...prev, [item.id]: 0 }));
  };

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Menu</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des ingrédients frais, des saveurs authentiques et des plats préparés avec amour. 
            Parfait pour dîner sur place ou emporter à votre espace de coworking.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-green-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                {item.special && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {item.special}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                  <span className="text-2xl font-bold text-green-600">{item.price}€</span>
                </div>
                
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                {item.customizable && item.ingredients && (
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Ingrédients:</p>
                    <div className="flex flex-wrap gap-1">
                      {item.ingredients.map(ingredient => (
                        <span key={ingredient} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="font-semibold min-w-[2rem] text-center">
                      {quantities[item.id] || 1}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <button
                    onClick={() => handleAddToOrder(item)}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offers Banner */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-8 text-center text-white">
          <div className="flex justify-center mb-4">
            <Star className="h-8 w-8 text-yellow-300" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Offres Spéciales</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <p className="font-semibold">Remise Employé</p>
              <p className="text-sm">10% de réduction sur toutes les commandes</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
              <p className="font-semibold">Menus du Jour</p>
              <p className="text-sm">Boissons offertes avec certains plats</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;