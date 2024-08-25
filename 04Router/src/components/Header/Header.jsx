import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">MyWebsite</h1>
        <nav>
          <ul className="flex space-x-4">
            <NavLink to='/' className={({isActive})=> isActive?`text-orange-700`:`text-white`}>Home</NavLink>
            <NavLink to='/services' className={({isActive})=> isActive?`text-orange-700`:`text-white`}>Sevices</NavLink>
            <NavLink to='/about' className={({isActive})=> isActive?`text-orange-700`:`text-white`}>About</NavLink>
            <NavLink to='/contact' className={({isActive})=> isActive?`text-orange-700`:`text-white`}>Contact Us</NavLink>
           
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
