import React, { useState } from 'react';
import { Clock, MapPin, CreditCard, CheckCircle } from 'lucide-react';
import { MenuItem, Order } from '../types';

interface OrderAheadProps {
  orderItems: { item: MenuItem; quantity: number }[];
  onClearOrder: () => void;
}

const OrderAhead: React.FC<OrderAheadProps> = ({ orderItems, onClearOrder }) => {
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: ''
  });

  const total = orderItems.reduce((sum, { item, quantity }) => sum + (item.price * quantity), 0);
  const estimatedTime = orderType === 'pickup' ? '20-25 minutes' : '35-45 minutes';

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderItems.length === 0) return;
    
    // Simulate order placement
    setOrderPlaced(true);
    setTimeout(() => {
      setOrderPlaced(false);
      onClearOrder();
      setCustomerInfo({ name: '', phone: '', email: '', address: '' });
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <section id="order\" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-50 rounded-xl p-12">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-green-800 mb-4">Commande Confirmée!</h2>
            <p className="text-xl text-green-700 mb-6">
              Votre commande a été passée avec succès. Temps estimé de {orderType === 'pickup' ? 'retrait' : 'livraison'}: {estimatedTime}
            </p>
            <div className="bg-white rounded-lg p-6 inline-block">
              <p className="text-gray-700 font-semibold">Total de la commande: {total.toFixed(2)}€</p>
              <p className="text-gray-600">Nous vous préviendrons quand votre commande sera prête!</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Commander à l'Avance</h2>
          <p className="text-xl text-gray-600">
            Évitez l'attente et ayez votre nourriture prête à votre arrivée ou livrée à votre porte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Votre Commande</h3>
            
            {orderItems.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">Aucun article dans votre commande pour le moment.</p>
                <p className="text-sm text-gray-400 mt-2">Ajoutez des articles du menu ci-dessus pour commencer!</p>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {orderItems.map(({ item, quantity }, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-600">Quantité: {quantity}</p>
                      </div>
                      <span className="font-bold text-green-600">{(item.price * quantity).toFixed(2)}€</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-300 pt-4">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Total:</span>
                    <span className="text-green-600">{total.toFixed(2)}€</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Order Form */}
          <div>
            {/* Order Type Selection */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Type de Commande</h3>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setOrderType('pickup')}
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    orderType === 'pickup'
                      ? 'border-green-600 bg-green-50 text-green-800'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <MapPin className="h-6 w-6 mx-auto mb-2" />
                  <p className="font-semibold">Retrait</p>
                  <p className="text-sm text-gray-600">20-25 minutes</p>
                </button>
                <button
                  onClick={() => setOrderType('delivery')}
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    orderType === 'delivery'
                      ? 'border-green-600 bg-green-50 text-green-800'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Clock className="h-6 w-6 mx-auto mb-2" />
                  <p className="font-semibold">Livraison</p>
                  <p className="text-sm text-gray-600">35-45 minutes</p>
                </button>
              </div>
            </div>

            {/* Customer Information Form */}
            <form onSubmit={handleSubmitOrder} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom Complet
                </label>
                <input
                  type="text"
                  required
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Numéro de Téléphone
                </label>
                <input
                  type="tel"
                  required
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={customerInfo.email}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              {orderType === 'delivery' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adresse de Livraison
                  </label>
                  <textarea
                    required
                    value={customerInfo.address}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              )}

              <div className="bg-green-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span className="font-semibold text-green-800">Temps Estimé:</span>
                </div>
                <p className="text-green-700">{estimatedTime}</p>
              </div>

              <button
                type="submit"
                disabled={orderItems.length === 0}
                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center space-x-2"
              >
                <CreditCard className="h-5 w-5" />
                <span>Passer Commande - {total.toFixed(2)}€</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderAhead;