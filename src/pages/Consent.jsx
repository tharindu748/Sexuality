import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Consent() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode2 = () => {
    setDarkMode(!darkMode);
  };

  // Check localStorage for theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  // Store the theme preference
  useEffect(() => {
    if (darkMode) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div>
      <div className={darkMode ? 'bg-gray-900 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
        <header className="flex justify-between items-center p-4 shadow-md">
          <h1 className="text-2xl font-bold">ඔසප් සෞඛ්‍යය සහ සනීපාරක්ෂාව</h1>
          <button
            onClick={toggleDarkMode2}
            className="text-2xl p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </header>
        <main className="p-6">
          {/* Your component content */}
        </main>
      </div>
    </div>
  );
}
