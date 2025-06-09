import React, { useState } from 'react';
import { Calendar, Clock, Users, Film, Gamepad2, Utensils, BookOpen } from 'lucide-react';
import { events } from '../data/events';

const EventCalendar: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [registrations, setRegistrations] = useState<{ [key: string]: boolean }>({});

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'movie': return <Film className="h-5 w-5" />;
      case 'gaming': return <Gamepad2 className="h-5 w-5" />;
      case 'dinner': return <Utensils className="h-5 w-5" />;
      case 'workshop': return <BookOpen className="h-5 w-5" />;
      default: return <Calendar className="h-5 w-5" />;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'movie': return 'from-purple-500 to-pink-500';
      case 'gaming': return 'from-blue-500 to-cyan-500';
      case 'dinner': return 'from-red-500 to-orange-500';
      case 'workshop': return 'from-green-500 to-teal-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const handleRSVP = (eventId: string) => {
    setRegistrations(prev => ({
      ...prev,
      [eventId]: !prev[eventId]
    }));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Événements à Venir</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Rejoignez nos événements communautaires! Des soirées cinéma aux ateliers, il y a toujours quelque chose d'excitant qui se passe chez JOJO.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {events.map(event => (
            <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`h-2 bg-gradient-to-r ${getEventColor(event.type)}`}></div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${getEventColor(event.type)} text-white`}>
                      {getEventIcon(event.type)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                      <p className="text-sm text-gray-500 capitalize">{event.type}</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{event.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Clock className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Users className="h-4 w-4" />
                    <span>{event.registered}/{event.capacity} inscrits</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="w-full bg-gray-200 rounded-full h-2 mr-4">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${getEventColor(event.type)}`}
                      style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                    ></div>
                  </div>
                  <button
                    onClick={() => handleRSVP(event.id)}
                    disabled={event.registered >= event.capacity}
                    className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                      registrations[event.id]
                        ? 'bg-green-600 text-white'
                        : event.registered >= event.capacity
                        ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                        : 'bg-green-600 hover:bg-green-700 text-white'
                    }`}
                  >
                    {registrations[event.id] 
                      ? 'Inscrit!' 
                      : event.registered >= event.capacity 
                      ? 'Complet' 
                      : 'S\'inscrire'
                    }
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Event Registration Success */}
        {Object.values(registrations).some(Boolean) && (
          <div className="mt-12 bg-green-50 border border-green-200 rounded-xl p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-2 bg-green-100 rounded-full">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-green-800 mb-2">Événements Inscrits!</h3>
            <p className="text-green-700">
              Vous recevrez des emails de confirmation et des rappels pour vos événements inscrits.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventCalendar;