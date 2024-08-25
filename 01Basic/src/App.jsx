import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';


const App = () => {
  const [darkMode, setDarkMode] = useState(()=>{
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDarkMode
  });
 
  const toggleDarkMode = () => setDarkMode(prevMode => !prevMode);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="container mx-auto p-6">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">React Component Showcase</h1>
          <p className="text-lg mb-6">Explore various React components and their functionalities through this interactive showcase. Each component demonstrates different features and techniques in React development.</p>
          <button
            onClick={toggleDarkMode}
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
          >
            Toggle {darkMode ? 'Light' : 'Dark'} Mode
          </button>
        </header>

        <nav className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              to="/accordion"
              className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 transition-transform transform hover:scale-105"
            >
              Accordion
            </Link>
            <Link
              to="/imageslider"
              className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-600 transition-transform transform hover:scale-105"
            >
              Image Slider
            </Link>
            <Link
              to="/randomcolor"
              className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 transition-transform transform hover:scale-105"
            >
              Random Colour
            </Link>
            <Link
              to="/rating"
              className="bg-purple-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-600 transition-transform transform hover:scale-105"
            >
              Rating
            </Link>
            <Link
              to="/loadmore"
              className="bg-teal-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-teal-600 transition-transform transform hover:scale-105"
            >
              Load More
            </Link>
            <Link
              to="/treeview"
              className="bg-fuchsia-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-fuchsia-600 transition-transform transform hover:scale-105"
            >
              Tree View
            </Link>
            <Link
              to="/theme"
              className="bg-pink-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-pink-600 transition-transform transform hover:scale-105"
            >
              Theme Changer
            </Link>
            <Link
              to="/form"
              className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-yellow-600 transition-transform transform hover:scale-105"
            >
              Form
            </Link>
            <Link
              to="/todo"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-800 transition-transform transform hover:scale-105"
            >
              ToDo
            </Link>
          </div>
        </nav>

        <main className="p-6">
         
        </main>
      </div>
    </div>
  );
}

export default App;
