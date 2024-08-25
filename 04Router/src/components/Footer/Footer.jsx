import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
