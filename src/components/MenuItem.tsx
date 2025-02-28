import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface MenuItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  onAddToCart: (id: string, quantity: number) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  id,
  name,
  description,
  price,
  image,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      onAddToCart(id, quantity);
      setQuantity(0);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all flex flex-col md:flex-row"
    >
      <div className="md:w-1/4 h-48 md:h-auto overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{name}</h3>
            <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
              ${price.toFixed(2)}
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-4">{description}</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleDecrement}
              className="p-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              disabled={quantity === 0}
            >
              <Minus className="h-5 w-5" />
            </motion.button>
            <span className="mx-3 text-gray-800 dark:text-gray-200 font-medium">{quantity}</span>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleIncrement}
              className="p-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <Plus className="h-5 w-5" />
            </motion.button>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              quantity > 0
                ? 'bg-primary-600 hover:bg-primary-700 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
            }`}
            disabled={quantity === 0}
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuItem;