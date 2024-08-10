import React, { useState } from 'react';

const Rating = () => {
    const [rate, setRate] = useState([false, false, false, false, false]);

    const handleClick = (id) => {
        setRate((prev) => prev.map((_, index) => index <= id));
    };

    return (
        <div className='bg-amber-800 h-screen flex flex-col items-center justify-center'>
            <h1 className='text-2xl mb-4 text-white'>Please Rate My Website</h1>
            <div className='flex gap-4'>
                {rate.map((isActive, id) => (
                    <div
                        key={id}
                        onClick={() => handleClick(id)}
                        className={`w-10 h-10 flex items-center justify-center cursor-pointer border-2 border-gray-500 rounded-full 
                            transition-transform duration-200 ease-in-out 
                            ${isActive ? 'bg-yellow-400 scale-110' : 'bg-slate-100'}
                            hover:bg-yellow-300 hover:scale-105`}
                    >
                        {isActive ? '*' : '-'}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rating;
