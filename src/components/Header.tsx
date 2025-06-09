import React, { useState } from 'react';
import { Menu, X, Coffee, User } from 'lucide-react';

interface HeaderProps {
  onLoginClick: () => void;
  isLoggedIn: boolean;
  user?: { name: string; loyaltyPoints: number };
}

const Header: React.FC<HeaderProps> = ({ onLoginClick, isLoggedIn, user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm fixed w-full top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-green-800">La Storia Di JOJO</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('order')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Commander
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Événements
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-green-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* User Area */}
          <div className="flex items-center space-x-4">
            {isLoggedIn && user ? (
              <div className="hidden md:flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-full">
                <User className="h-4 w-4 text-green-600" />
                <span className="text-sm text-green-800">{user.name}</span>
                <span className="text-xs bg-green-200 px-2 py-1 rounded-full text-green-800">
                  {user.loyaltyPoints} pts
                </span>
              </div>
            ) : (
              <button
                onClick={onLoginClick}
                className="hidden md:flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                <User className="h-4 w-4" />
                <span>Connexion</span>
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-green-600 transition-colors"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="text-left text-gray-700 hover:text-green-600 transition-colors"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('order')}
                className="text-left text-gray-700 hover:text-green-600 transition-colors"
              >
                Commander
              </button>
              <button
                onClick={() => scrollToSection('events')}
                className="text-left text-gray-700 hover:text-green-600 transition-colors"
              >
                Événements
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-green-600 transition-colors"
              >
                Contact
              </button>
              {!isLoggedIn && (
                <button
                  onClick={onLoginClick}
                  className="text-left bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Connexion
                </button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;