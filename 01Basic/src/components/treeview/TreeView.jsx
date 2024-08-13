import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import treeData from './treeData';

const TreeNode = ({ val, level = 0 }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`ml-${level * 4} border-l-2 border-gray-600 pl-4 relative`}>
      <div 
        className="flex items-center cursor-pointer p-3 bg-gray-900 hover:bg-gray-800 rounded-md transition-all duration-300"
        onClick={() => setOpen(!open)}
      >
        <span 
          className={`transition-transform transform ${open ? 'rotate-90' : 'rotate-0'} text-xl text-yellow-500 mr-2`}
        >
          ▶
        </span>
        <div>
          <h1 className="text-lg font-bold text-white">
            {val.name}
          </h1>
          <p className="text-sm text-gray-400">
            {val.description}
          </p>
        </div>
      </div>
      {open && val.children.length > 0 && (
        <div className="mt-2 space-y-2">
          {val.children.map(child => (
            <TreeNode key={child.id} val={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const TreeView = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen p-8 flex flex-col relative">
      {/* Out-of-the-Box Animated Back Button */}
      <div className="fixed top-4 left-4">
        <Link
          to="/"
          className="relative inline-block p-4 bg-transparent text-white text-2xl font-bold rounded-full shadow-lg overflow-hidden transition-transform transform group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-blue-500 to-teal-500 opacity-50 rounded-full blur-md transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:translate-x-4 group-hover:translate-y-4"></span>
          <span className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 shadow-lg transition-transform transform group-hover:scale-150 group-hover:rotate-12 group-hover:bg-blue-800">
            🏠
          </span>
         
        </Link>
      </div>

      <div className="flex-grow">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-yellow-400">
          Stellar Tree Explorer
        </h1>
        <div className="space-y-4">
          {treeData.map(i => (
            <TreeNode key={i.id} val={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TreeView;
