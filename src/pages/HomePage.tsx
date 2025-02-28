import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Pizza, Sushi, Hamburger, Coffee, Salad, Utensils, ChevronRight } from 'lucide-react';

import SearchBar from '../components/SearchBar';
import CategoryCard from '../components/CategoryCard';
import RestaurantCard from '../components/RestaurantCard';
import TestimonialCard from '../components/TestimonialCard';

const HomePage: React.FC = () => {
  // Mock data for featured restaurants
  const featuredRestaurants = [
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
  ];

  // Mock data for testimonials
  const testimonials = [
    {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      rating: 5,
      comment: 'Khanamandu has completely changed how I order food. The delivery is always on time and the food arrives hot!',
      date: '2 days ago',
    },
    {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      rating: 4,
      comment: 'Great selection of restaurants and the app is super easy to use. Would recommend to anyone!',
      date: '1 week ago',
    },
    {
      name: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      rating: 5,
      comment: 'I love the variety of cuisines available. The customer service is also excellent when there are any issues.',
      date: '3 days ago',
    },
  ];

  // Categories with icons
  const categories = [
    { name: 'Pizza', icon: <Pizza className="h-6 w-6" />, color: 'bg-red-500' },
    { name: 'Sushi', icon: <Sushi className="h-6 w-6" />, color: 'bg-blue-500' },
    { name: 'Burgers', icon: <Hamburger className="h-6 w-6" />, color: 'bg-yellow-500' },
    { name: 'Coffee', icon: <Coffee className="h-6 w-6" />, color: 'bg-brown-500' },
    { name: 'Salads', icon: <Salad className="h-6 w-6" />, color: 'bg-green-500' },
    { name: 'All', icon: <Utensils className="h-6 w-6" />, color: 'bg-purple-500' },
  ];

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // In a real app, this would navigate to search results
  };

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-secondary-500 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Food background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative py-16 px-8 md:py-24 md:px-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Delicious Meals at Your Doorstep
            </h1>
            <p className="text-lg md:text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
              Order food from the best restaurants in town with just a few clicks.
              Fast delivery, great taste!
            </p>
            <SearchBar
              placeholder="Search for restaurants or dishes..."
              onSearch={handleSearch}
              className="max-w-2xl mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Categories</h2>
          <Link
            to="/restaurants"
            className="text-primary-600 dark:text-primary-400 flex items-center hover:underline"
          >
            <span>View All</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              name={category.name}
              icon={category.icon}
              color={category.color}
              onClick={() => console.log(`Selected category: ${category.name}`)}
            />
          ))}
        </div>
      </section>

      {/* Featured Restaurants Section */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Featured Restaurants</h2>
          <Link
            to="/restaurants"
            className="text-primary-600 dark:text-primary-400 flex items-center hover:underline"
          >
            <span>View All</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredRestaurants.map((restaurant) => (
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
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 md:p-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ y: -5 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Find Restaurants
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Browse through our extensive list of restaurants and cuisines to find what you're craving.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-secondary-100 dark:bg-secondary-900 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-secondary-600 dark:text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Place Your Order
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Select your favorite dishes, customize them to your liking, and add them to your cart.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Track your order in real-time as our delivery partners bring your food right to your doorstep.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              rating={testimonial.rating}
              comment={testimonial.comment}
              date={testimonial.date}
            />
          ))}
        </div>
      </section>

      {/* Download App Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-500 rounded-3xl overflow-hidden">
        <div className="py-12 px-8 md:py-16 md:px-12 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Download Our Mobile App
            </h2>
            <p className="text-white opacity-90 mb-6 max-w-md">
              Get the full experience with our mobile app. Order food, track deliveries, and earn rewards on the go!
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-900 transition-colors">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 12.5c0-1.58-.4-3.1-1.17-4.5.05 0 .1.01.17.01 1.86 0 3.5-.92 4.5-2.33-1 .01-1.97-.02-2.92-.1-1.67-.14-3.24-.83-4.5-1.92 0 0-1.03 1.75-1.61 2.67l.01.01c-1.63 2.26-2.61 5.01-2.61 8 0 .06.01.12.01.19-1.84.55-3.18 2.23-3.18 4.23 0 2.48 2.02 4.5 4.5 4.5v-2c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5h.21c.27 2.5 1.86 4.59 4.15 5.61l.63-1.88c-1.55-.52-2.69-1.98-2.69-3.73 0-2.21 1.79-4 4-4z" />
                </svg>
                <span>App Store</span>
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center hover:bg-gray-900 transition-colors">
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3v18h18V3H3zm14.5 5.5l-1.41 1.41L17.67 12l-1.58 1.59L17.5 15l3-3-3-3zM6.5 15l1.41-1.41L6.33 12l1.58-1.59L6.5 9l-3 3 3 3z" />
                </svg>
                <span>Google Play</span>
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Mobile app"
              className="w-full max-w-xs rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;