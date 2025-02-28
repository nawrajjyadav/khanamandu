import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, ChevronDown, X } from 'lucide-react';

import SearchBar from '../components/SearchBar';
import RestaurantCard from '../components/RestaurantCard';

const RestaurantListingPage: React.FC = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [priceFilter, setPriceFilter] = useState<number | null>(null);
  const [ratingFilter, setRatingFilter] = useState<number | null>(null);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  // Mock data for restaurants
  const restaurants = [
    {
      id: '1',
      name: 'Spice Garden',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      rating: 4.8,
      deliveryTime: '25-35 min',
      priceRange: 2,
      cuisine: 'Indian',
    },
    {
      id: '2',
      name: 'Sushi Master',
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      rating: 4.7,
      deliveryTime: '30-40 min',
      priceRange: 3,
      cuisine: 'Japanese',
    },
    {
      id: '3',
      name: 'Burger Joint',
      image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      rating: 4.5,
      deliveryTime: '15-25 min',
      priceRange: 2,
      cuisine: 'American',
    },
    {
      id: '4',
      name: 'Pizza Palace',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      rating: 4.6,
      deliveryTime: '20-30 min',
      priceRange: 2,
      cuisine: 'Italian',
    },
    {
      id: '5',
      name: 'Taco Fiesta',
      image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
      rating: 4.3,
      deliveryTime: '20-30 min',
      priceRange: 1,
      cuisine: 'Mexican',
    },
    {
      id: '6',
      name: 'Noodle House',
      image: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      rating: 4.4,
      deliveryTime: '25-35 min',
      priceRange: 2,
      cuisine: 'Chinese',
    },
    {
      id: '7',
      name: 'Mediterranean Delight',
      image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      rating: 4.7,
      deliveryTime: '30-45 min',
      priceRange: 3,
      cuisine: 'Mediterranean',
    },
    {
      id: '8',
      name: 'Thai Spice',
      image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      rating: 4.5,
      deliveryTime: '25-40 min',
      priceRange: 2,
      cuisine: 'Thai',
    },
  ];

  // Cuisine types for filtering
  const cuisineTypes = [
    'All',
    'Indian',
    'Japanese',
    'American',
    'Italian',
    'Mexican',
    'Chinese',
    'Mediterranean',
    'Thai',
  ];

  const toggleFilter = (filter: string) => {
    if (filter === 'All') {
      setActiveFilters([]);
      return;
    }

    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter((f) => f !== filter));
    } else {
      setActiveFilters([...activeFilters.filter((f) => f !== 'All'), filter]);
    }
  };

  const togglePriceFilter = (price: number) => {
    if (priceFilter === price) {
      setPriceFilter(null);
    } else {
      setPriceFilter(price);
    }
  };

  const toggleRatingFilter = (rating: number) => {
    if (ratingFilter === rating) {
      setRatingFilter(null);
    } else {
      setRatingFilter(rating);
    }
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
    setPriceFilter(null);
    setRatingFilter(null);
  };

  // Filter restaurants based on selected filters
  const filteredRestaurants = restaurants.filter((restaurant) => {
    // Filter by cuisine
    if (activeFilters.length > 0 && !activeFilters.includes(restaurant.cuisine)) {
      return false;
    }

    // Filter by price
    if (priceFilter !== null && restaurant.priceRange !== priceFilter) {
      return false;
    }

    // Filter by rating
    if (ratingFilter !== null && restaurant.rating < ratingFilter) {
      return false;
    }

    return true;
  });

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // In a real app, this would filter restaurants by name or cuisine
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Restaurants
        </h1>
        <SearchBar
          placeholder="Search for restaurants or cuisines..."
          onSearch={handleSearch}
        />
      </div>

      {/* Filters Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Filters</h2>
          <button
            onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
            className="md:hidden flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
          >
            <Filter className="h-5 w-5 mr-1" />
            <span>Filters</span>
            <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${isFilterMenuOpen ? 'rotate-180' : ''}`} />
          </button>
          {(activeFilters.length > 0 || priceFilter !== null || ratingFilter !== null) && (
            <button
              onClick={clearAllFilters}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
            >
              Clear all
            </button>
          )}
        </div>

        {/* Desktop Filters */}
        <div className="hidden md:block">
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Cuisine</h3>
            <div className="flex flex-wrap gap-2">
              {cuisineTypes.map((cuisine) => (
                <button
                  key={cuisine}
                  onClick={() => toggleFilter(cuisine)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    activeFilters.includes(cuisine) || (cuisine === 'All' && activeFilters.length === 0)
                      ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {cuisine}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Price Range</h3>
            <div className="flex gap-2">
              {[1, 2, 3].map((price) => (
                <button
                  key={price}
                  onClick={() => togglePriceFilter(price)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    priceFilter === price
                      ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {Array(price).fill('$').join('')}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Rating</h3>
            <div className="flex gap-2">
              {[3, 4, 4.5].map((rating) => (
                <button
                  key={rating}
                  onClick={() => toggleRatingFilter(rating)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    ratingFilter === rating
                      ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {rating}+ ★
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Filters */}
        {isFilterMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4"
          >
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Cuisine</h3>
              <div className="flex flex-wrap gap-2">
                {cuisineTypes.map((cuisine) => (
                  <button
                    key={cuisine}
                    onClick={() => toggleFilter(cuisine)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      activeFilters.includes(cuisine) || (cuisine === 'All' && activeFilters.length === 0)
                        ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {cuisine}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Price Range</h3>
              <div className="flex gap-2">
                {[1, 2, 3].map((price) => (
                  <button
                    key={price}
                    onClick={() => togglePriceFilter(price)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      priceFilter === price
                        ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {Array(price).fill('$').join('')}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Rating</h3>
              <div className="flex gap-2">
                {[3, 4, 4.5].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => toggleRatingFilter(rating)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      ratingFilter === rating
                        ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {rating}+ ★
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Active Filters */}
        {(activeFilters.length > 0 || priceFilter !== null || ratingFilter !== null) && (
          <div className="flex flex-wrap gap-2 mt-4">
            {activeFilters.map((filter) => (
              <motion.div
                key={filter}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full text-sm font-medium flex items-center"
              >
                {filter}
                <button
                  onClick={() => toggleFilter(filter)}
                  className="ml-1 text-primary-500 dark:text-primary-300 hover:text-primary-700 dark:hover:text-primary-200"
                >
                  <X className="h-3 w-3" />
                </button>
              </motion.div>
            ))}
            {priceFilter !== null && (
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full text-sm font-medium flex items-center"
              >
                {Array(priceFilter).fill('$').join('')}
                <button
                  onClick={() => setPriceFilter(null)}
                  className="ml-1 text-primary-500 dark:text-primary-300 hover:text-primary-700 dark:hover:text-primary-200"
                >
                  <X className="h-3 w-3" />
                </button>
              </motion.div>
            )}
            {ratingFilter !== null && (
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full text-sm font-medium flex items-center"
              >
                {ratingFilter}+ ★
                <button
                  onClick={() => setRatingFilter(null)}
                  className="ml-1 text-primary-500 dark:text-primary-300 hover:text-primary-700 dark:hover:text-primary-200"
                >
                  <X className="h-3 w-3" />
                </button>
              </motion.div>
            )}
          </div>
        )}
      </div>

      {/* Results */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {filteredRestaurants.length} {filteredRestaurants.length === 1 ? 'Restaurant' : 'Restaurants'} Found
          </h2>
          <div className="flex items-center">
            <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">Sort by:</span>
            <select className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-sm px-3 py-1 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option>Recommended</option>
              <option>Rating: High to Low</option>
              <option>Delivery Time</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        {filteredRestaurants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                id={restaurant.id}
                name={restaurant.name}
                image={restaurant.image}
                rating={restaurant.rating}
                deliveryTime={restaurant.deliveryTime}
                priceRange={restaurant.priceRange}
                cuisine={restaurant.cuisine}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 dark:text-gray-500 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">No restaurants found</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">Try adjusting your filters or search for something else.</p>
            <button
              onClick={clearAllFilters}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantListingPage;