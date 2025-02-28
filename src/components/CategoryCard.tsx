import React from 'react';
import { motion } from 'framer-motion';

interface CategoryCardProps {
  icon: React.ReactNode;
  name: string;
  color: string;
  onClick?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon, name, color, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`flex flex-col items-center justify-center p-4 rounded-xl cursor-pointer ${color} shadow-sm hover:shadow-md transition-all`}
      onClick={onClick}
    >
      <div className="text-white mb-2">{icon}</div>
      <span className="text-white font-medium text-sm">{name}</span>
    </motion.div>
  );
};

export default CategoryCard;