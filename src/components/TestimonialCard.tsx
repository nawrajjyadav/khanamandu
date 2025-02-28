import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  avatar,
  rating,
  comment,
  date,
}) => {
  // Generate star rating
  const stars = Array(5)
    .fill(0)
    .map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
    >
      <div className="flex items-center mb-4">
        <img
          src={avatar}
          alt={name}
          className="h-12 w-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100">{name}</h4>
          <div className="flex mt-1">{stars}</div>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{comment}</p>
      <p className="text-gray-500 dark:text-gray-500 text-xs">{date}</p>
    </motion.div>
  );
};

export default TestimonialCard;