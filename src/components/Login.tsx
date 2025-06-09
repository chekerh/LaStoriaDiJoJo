import React, { useState } from 'react';
import { X, User, Mail, Lock, Star } from 'lucide-react';
import { User as UserType } from '../types';

interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: UserType) => void;
}

const Login: React.FC<LoginProps> = ({ isOpen, onClose, onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    isEmployee: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate login/signup
    const user: UserType = {
      id: Date.now().toString(),
      name: formData.name || formData.email.split('@')[0],
      email: formData.email,
      loyaltyPoints: Math.floor(Math.random() * 500),
      isEmployee: formData.isEmployee
    };
    
    onLogin(user);
    onClose();
    setFormData({ name: '', email: '', password: '', isEmployee: false });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <User className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            {isSignUp ? 'Rejoindre JOJO' : 'Bon Retour'}
          </h2>
          <p className="text-gray-600 mt-2">
            {isSignUp ? 'Créez votre compte et commencez à gagner des points de fidélité' : 'Connectez-vous à votre compte'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {isSignUp && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nom Complet
              </label>
              <input
                type="text"
                required={isSignUp}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Entrez votre nom complet"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <div className="relative">
              <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Entrez votre email"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mot de Passe
            </label>
            <div className="relative">
              <Lock className="h-5 w-5 text-gray-400 absolute left-3 top-3.5" />
              <input
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Entrez votre mot de passe"
              />
            </div>
          </div>

          {isSignUp && (
            <div className="flex items-center">
              <input
                type="checkbox"
                id="isEmployee"
                checked={formData.isEmployee}
                onChange={(e) => setFormData({ ...formData, isEmployee: e.target.checked })}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="isEmployee" className="ml-2 text-sm text-gray-700">
                Je suis un employé JOJO (obtenez 10% de réduction!)
              </label>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
          >
            {isSignUp ? 'Créer un Compte' : 'Se Connecter'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-green-600 hover:text-green-700 font-medium"
          >
            {isSignUp ? 'Vous avez déjà un compte? Connectez-vous' : 'Besoin d\'un compte? Inscrivez-vous'}
          </button>
        </div>

        {/* Loyalty Program Info */}
        <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Star className="h-5 w-5 text-green-600" />
            <span className="font-semibold text-green-800">Programme de Fidélité</span>
          </div>
          <p className="text-sm text-gray-700">
            Gagnez des points à chaque achat et échangez-les contre des repas gratuits, des boissons et des avantages exclusifs!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;