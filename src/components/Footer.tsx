import React from 'react';
import { Coffee, Heart, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-amber-400" />
              <span className="text-2xl font-bold">La Storia Di JOJO</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              A unique space where great food meets productive work. Perfect for students, 
              professionals, and families to eat, work, and connect in Milan's creative district.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Instagram className="h-5 w-5 text-pink-400" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Facebook className="h-5 w-5 text-blue-400" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Twitter className="h-5 w-5 text-sky-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Order Ahead
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Events
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  123 Coworking Street<br />
                  Creative District<br />
                  Milan, Italy 20121
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300 text-sm">+39 02 1234 5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="text-gray-300 text-sm">hello@lastoriadijojo.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-300">Monday - Friday</p>
                  <p className="text-amber-400 font-semibold">7:00 AM - 10:00 PM</p>
                </div>
                <div>
                  <p className="text-gray-300">Saturday - Sunday</p>
                  <p className="text-amber-400 font-semibold">8:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-300 text-sm mb-2">
                Experience the perfect blend of
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-2 text-sm">
                <span className="bg-amber-600 text-white px-3 py-1 rounded-full">Great Food</span>
                <span className="bg-green-600 text-white px-3 py-1 rounded-full">Productive Work</span>
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full">Community</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 La Storia Di JOJO. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>in Milan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;