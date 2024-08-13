import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from './data.js';

const Accordion = () => {
    const [open, setOpen] = useState([]);
    const [multi, setMulti] = useState(false);

    const handleClick = (id) => {
        setOpen(prevOpen => {
            if (!multi) {
                return prevOpen.includes(id) ? [] : [id];
            } else {
                return prevOpen.includes(id)
                    ? prevOpen.filter(openId => openId !== id)
                    : [...prevOpen, id];
            }
        });
    };

    const handleModeToggle = () => {
        setMulti(prevMode => !prevMode);
    };

    return (
        <div className='bg-gray-900 text-white w-full min-h-screen py-4 relative'>
            {/* Home Button */}
            <Link
                to="/"
                className='absolute top-4 left-4 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg hover:bg-gray-700 transition-transform transform hover:scale-105'
            >
                🏠 Home
            </Link>

            <h1 className='text-5xl font-bold text-cyan-400 my-10 text-center'>Accordion Project</h1>
            <div className='w-2/3 mx-auto bg-gray-800 p-4 rounded-lg shadow-lg'>
                {/* Toggle Button */}
                <button
                    onClick={handleModeToggle}
                    className={`w-full text-center py-3 rounded-lg mb-4 transition-transform transform ${multi ? 'bg-yellow-500 text-gray-900' : 'bg-blue-500 text-gray-100'} hover:bg-opacity-90`}
                >
                    {multi ? "Multiple Open" : "Single Open"}
                </button>

                {/* Accordion Items */}
                {data.map((item) => (
                    <div key={item.id} className='mb-4'>
                        <h2 
                            onClick={() => handleClick(item.id)} 
                            className='cursor-pointer text-cyan-300 p-3 bg-gray-700 rounded-lg mb-1 hover:bg-gray-600 transition-transform transform hover:scale-105'
                            aria-expanded={open.includes(item.id)}
                            role="button"
                            aria-controls={`content-${item.id}`}
                        >
                            {item.title}
                        </h2>
                        <div
                            id={`content-${item.id}`}
                            className={`overflow-hidden transition-all duration-500 ease-in-out max-h-0 ${
                                open.includes(item.id) ? 'max-h-40 opacity-100' : 'opacity-0'
                            }`}
                        >
                            <p className='p-4 bg-gray-900 rounded-lg shadow-md'>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accordion;
