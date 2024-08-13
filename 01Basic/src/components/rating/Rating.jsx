import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Rating = () => {
    const [rate, setRate] = useState([false, false, false, false, false]);

    const handleClick = (id) => {
        setRate((prev) => prev.map((_, index) => index <= id));
    };

    return (
        <div className='bg-amber-800 min-h-screen flex flex-col items-center justify-center relative'>
            {/* Home Button */}
            <Link
                to="/"
                className='absolute top-4 left-4 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-700 transition-transform transform hover:scale-110'
            >
                🏠 Home
            </Link>

            <h1 className='text-3xl font-extrabold mb-6 text-white'>Please Rate My Website</h1>
            <div className='flex gap-4'>
                {rate.map((isActive, id) => (
                    <div
                        key={id}
                        onClick={() => handleClick(id)}
                        className={`w-12 h-12 flex items-center justify-center cursor-pointer rounded-full 
                            transition-transform duration-300 ease-in-out 
                            ${isActive ? 'bg-yellow-400 scale-125 rotate-12' : 'bg-slate-100 hover:bg-yellow-200'}
                            shadow-lg hover:scale-110`}
                    >
                        <span className={`text-2xl font-bold ${isActive ? 'text-white' : 'text-gray-700'}`}>
                            {isActive ? '*' : '-'}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rating;
