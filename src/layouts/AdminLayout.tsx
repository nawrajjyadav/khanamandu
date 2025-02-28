import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  ShoppingBag,
  Menu as MenuIcon,
  FileText,
  MessageSquare,
  Settings,
  LogOut,
  ChevronDown,
  User,
  Bell,
  X,
  Sun,
  Moon,
} from 'lucide-react';

const AdminLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleLogout = () => {
    // Handle logout logic here
    navigate('/');
  };

  return (
    <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm fixed top-0 left-0 right-0 z-30">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
              aria-label="Toggle sidebar"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
            <Link to="/admin" className="ml-4 flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 10 }}
                className="text-primary-600 dark:text-primary-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 11h.01" />
                  <path d="M11 15h.01" />
                  <path d="M16 16h.01" />
                  <path d="M2 16l20 6-6-20A20 20 0 0 0 2 16" />
                  <path d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4" />
                </svg>
              </motion.div>
              <span className="text-lg font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                Khanamandu Admin
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors relative"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </button>

              {isNotificationsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 z-50"
                >
                  <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Notifications</h3>
                    <button
                      onClick={() => setIsNotificationsOpen(false)}
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="max-h-60 overflow-y-auto">
                    <a href="#" className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-primary-100 dark:bg-primary-900 rounded-full p-2">
                          <ShoppingBag className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                        </div>
                        <div className="ml-3 w-0 flex-1">
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">New order received</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Order #12345 from John Doe</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">5 minutes ago</p>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-yellow-100 dark:bg-yellow-900 rounded-full p-2">
                          <MessageSquare className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                        </div>
                        <div className="ml-3 w-0 flex-1">
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">New review</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Jane Smith left a 5-star review</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">1 hour ago</p>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-red-100 dark:bg-red-900 rounded-full p-2">
                          <svg className="w-4 h-4 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                        <div className="ml-3 w-0 flex-1">
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Low inventory alert</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Chicken Biryani is running low</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">2 hours ago</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
                    <a href="#" className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-medium">
                      View all notifications
                    </a>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="flex items-center space-x-2 focus:outline-none"
                aria-label="Open user menu"
              >
                <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Admin User</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Restaurant Owner</p>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </button>

              {isProfileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50"
                >
                  <Link
                    to="/admin/settings"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    onClick={() => setIsProfileMenuOpen(false)}
                  >
                    Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    Sign out
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-20 w-64 bg-white dark:bg-gray-800 shadow-md transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } pt-16`}
      >
        <nav className="mt-5 px-2">
          <Link
            to="/admin"
            className={`group flex items-center px-2 py-2 text-base font-medium rounded-md transition-colors ${
              location.pathname === '/admin'
                ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100'
            }`}
          >
            <LayoutDashboard className="mr-3 h-6 w-6" />
            Dashboard
          </Link>
          <Link
            to="/admin/orders"
            className={`mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md transition-colors ${
              location.pathname === '/admin/orders'
                ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100'
            }`}
          >
            <ShoppingBag className="mr-3 h-6 w-6" />
            Orders
          </Link>
          <Link
            to="/admin/menu"
            className={`mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md transition-colors ${
              location.pathname === '/admin/menu'
                ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100'
            }`}
          >
            <FileText className="mr-3 h-6 w-6" />
            Menu
          </Link>
          <Link
            to="/admin/reviews"
            className={`mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md transition-colors ${
              location.pathname === '/admin/reviews'
                ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100'
            }`}
          >
            <MessageSquare className="mr-3 h-6 w-6" />
            Reviews
          </Link>
          <Link
            to="/admin/settings"
            className={`mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md transition-colors ${
              location.pathname === '/admin/settings'
                ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100'
            }`}
          >
            <Settings className="mr-3 h-6 w-6" />
            Settings
          </Link>
        </nav>

        <div className="mt-auto p-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={handleLogout}
            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            <LogOut className="mr-3 h-5 w-5" />
            <span>Sign out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`pt-16 ${isSidebarOpen ? 'md:ml-64' : ''} transition-all duration-300`}>
        <main className="p-6">
          <Outlet />
        </main>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 z-10 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default AdminLayout;