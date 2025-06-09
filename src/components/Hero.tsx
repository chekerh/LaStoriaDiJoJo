import React from 'react';
import { ArrowDown, Coffee, Wifi, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg)',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          La Storia Di
          <span className="block text-green-400">JOJO</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Où la bonne cuisine rencontre le travail productif. Un espace unique pour les étudiants, professionnels et familles pour manger, travailler et se connecter.
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Coffee className="h-5 w-5 text-green-400" />
            <span>Café Premium</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Wifi className="h-5 w-5 text-green-400" />
            <span>Wi-Fi Gratuit</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Users className="h-5 w-5 text-blue-400" />
            <span>Espace Coworking</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={scrollToMenu}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg"
          >
            Voir le Menu
          </button>
          <button
            onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Commander
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-white" />
        </div>
      </div>
    </section>
  );
};

export default Hero;