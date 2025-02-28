import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, Trash2 } from 'lucide-react';

interface CartItemProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  quantity,
  image,
  onUpdateQuantity,
  onRemove,
}) => {
  const handleIncrement = () => {
    onUpdateQuantity(id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      onUpdateQuantity(id, quantity - 1);
    }
  };

  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex items-center py-4 border-b border-gray-200 dark:border-gray-700"
    >
      <div className="h-16 w-16 rounded-lg overflow-hidden flex-shrink-0">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="ml-4 flex-1">
        <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">{name}</h4>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleDecrement}
              className="p-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              disabled={quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </motion.button>
            <span className="mx-2 text-gray-800 dark:text-gray-200 text-sm font-medium">{quantity}</span>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleIncrement}
              className="p-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <Plus className="h-4 w-4" />
            </motion.button>
          </div>
          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
            ${(price * quantity).toFixed(2)}
          </span>
        </div>
      </div>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={handleRemove}
        className="ml-4 p-1 rounded-full text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400 transition-colors"
        aria-label="Remove item"
      >
        <Trash2 className="h-5 w-5" />
      </motion.button>
    </motion.div>
  );
};

export default CartItem;