import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'd' ? false : true;
  });

  useEffect(() => {
    const th = theme ? 'l' : 'd';
    localStorage.setItem('theme', th);
  }, [theme]);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${theme ? 'bg-gray-900 text-white' : 'bg-pink-300 text-gray-900'}`}>
      <header className="p-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
          &larr; Back to Home
        </Link>
        <h1 className="text-2xl font-semibold">Theme Switcher</h1>
        <button 
          onClick={() => setTheme(prev => !prev)} 
          className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition-colors transform hover:scale-105"
        >
          Toggle Theme
        </button>
      </header>
      
      <div className="flex flex-wrap gap-4 p-6">
        {["A", "B", "C", "D", "E", "F", "G"].map((item, index) => (
          <div 
            key={index} 
            className="w-24 h-24 flex items-center justify-center bg-fuchsia-500 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <span className="text-2xl font-bold">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeSwitcher;
