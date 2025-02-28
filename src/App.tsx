import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layouts
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';

// Pages
import HomePage from './pages/HomePage';
import RestaurantListingPage from './pages/RestaurantListingPage';
function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        {/* Customer Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="restaurants" element={<RestaurantListingPage />} />
         
        </Route>

       
      </Routes>
    </AnimatePresence>
  );
}

export default App;