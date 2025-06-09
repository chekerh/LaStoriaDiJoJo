import React, { useState } from 'react';
import { Star, Send, ThumbsUp, MessageCircle } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const Feedback: React.FC = () => {
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 0,
    comment: ''
  });
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: '1',
      name: 'Sarah M.',
      rating: 5,
      comment: 'Amazing atmosphere for working! The coffee is excellent and the pasta is to die for. Perfect spot for remote work.',
      date: '2024-01-10'
    },
    {
      id: '2',
      name: 'Marco R.',
      rating: 5,
      comment: 'Love the concept! Great food, fast WiFi, and a productive environment. The staff is super friendly too.',
      date: '2024-01-08'
    },
    {
      id: '3',
      name: 'Lisa K.',
      rating: 4,
      comment: 'Fantastic place for meetings over lunch. The coworking space is well-designed and the menu has great variety.',
      date: '2024-01-05'
    }
  ]);
  const [submitted, setSubmitted] = useState(false);

  const handleRatingClick = (rating: number) => {
    setNewReview({ ...newReview, rating });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.name && newReview.rating && newReview.comment) {
      const review: Review = {
        id: Date.now().toString(),
        ...newReview,
        date: new Date().toISOString().split('T')[0]
      };
      setReviews([review, ...reviews]);
      setNewReview({ name: '', rating: 0, comment: '' });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const renderStars = (rating: number, interactive = false, onStarClick?: (rating: number) => void) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map(star => (
          <button
            key={star}
            type="button"
            onClick={() => interactive && onStarClick?.(star)}
            className={`${
              interactive ? 'cursor-pointer hover:scale-110' : 'cursor-default'
            } transition-transform`}
            disabled={!interactive}
          >
            <Star
              className={`h-5 w-5 ${
                star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Customer Feedback</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We value your experience! Share your thoughts and see what others are saying about JOJO.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Feedback Form */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Leave a Review</h3>
            
            {submitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <ThumbsUp className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h4>
                <p className="text-green-700">Your review has been submitted successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rating
                  </label>
                  {renderStars(newReview.rating, true, handleRatingClick)}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Review
                  </label>
                  <textarea
                    required
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Tell us about your experience..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="h-4 w-4" />
                  <span>Submit Review</span>
                </button>
              </form>
            )}
          </div>

          {/* Reviews Display */}
          <div>
            <div className="mb-8">
              <div className="bg-amber-50 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">
                  {averageRating.toFixed(1)}
                </div>
                <div className="flex justify-center mb-2">
                  {renderStars(Math.round(averageRating))}
                </div>
                <p className="text-gray-600">Based on {reviews.length} reviews</p>
              </div>
            </div>

            <div className="space-y-6 max-h-96 overflow-y-auto">
              {reviews.map(review => (
                <div key={review.id} className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-gray-600">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{review.name}</p>
                        <p className="text-sm text-gray-500">
                          {new Date(review.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Satisfaction Metrics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <ThumbsUp className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">98%</h4>
            <p className="text-gray-600">Customer Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <MessageCircle className="h-8 w-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">150+</h4>
            <p className="text-gray-600">Reviews</p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
              <Star className="h-8 w-8 text-yellow-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">4.8</h4>
            <p className="text-gray-600">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;