import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RestaurantCardProps {
  id: string;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  priceRange: number;
  cuisine: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  id,
  name,
  image,
  rating,
  deliveryTime,
  priceRange,
  cuisine,
}) => {
  // Convert price range to dollar signs
  const priceRangeDisplay = Array(priceRange)
    .fill(0)
    .map((_, i) => '$')
    .join('');

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
    >
      <Link to={`/restaurants/${id}`}>
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-lg px-2 py-1 flex items-center shadow-md">
            <Star className="h-4 w-4 text-yellow-500 mr-1" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">{name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{cuisine}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <Clock className="h-4 w-4 mr-1" />
              <span className="text-sm">{deliveryTime}</span>
            </div>
            <div className="flex items-center text-gray-700 dark:text-gray-300">
              <DollarSign className="h-4 w-4 mr-1" />
              <span className="text-sm">{priceRangeDisplay}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default RestaurantCard;