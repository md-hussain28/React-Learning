import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Helper function to generate a random color and its HEX code
const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Convert RGB to HEX
    const toHex = (value) => {
        const hex = value.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };

    const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

    return {
        rgb: `rgb(${r},${g},${b})`,
        hex: hex
    };
};

const RandomColour = () => {
    const [color, setColor] = useState({ rgb: 'rgb(100,100,100)', hex: '#646464' });
    const [copyFeedback, setCopyFeedback] = useState('');

    // Handles color change on button click
    const handleColorChange = () => {
        setColor(generateRandomColor());
        setCopyFeedback(''); // Reset feedback when changing color
    };

    // Handles copying to clipboard
    const handleCopy = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => setCopyFeedback(`Copied: ${text}`))
            .catch((err) => setCopyFeedback('Failed to copy'));
    };

    return (
        <div className='bg-gray-900 min-h-screen flex flex-col items-center justify-center relative'>
            {/* Home Button */}
            <Link
                to="/"
                className='absolute top-4 left-4 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-700 transition-transform transform hover:scale-110'
            >
                🏠 Home
            </Link>

            <div className='w-full max-w-lg p-6 bg-gray-800 rounded-2xl shadow-2xl overflow-hidden relative'>
                <h1 className='text-4xl font-extrabold text-orange-500 mb-6 text-center'>
                    Random Colour Generator
                </h1>
                
                {/* Color Display Area */}
                <div className='relative'>
                    <div className='w-full h-64 rounded-xl overflow-hidden relative bg-gray-900'>
                        <div
                            className='absolute inset-0 transition-all duration-500 ease-in-out'
                            style={{ 
                                backgroundColor: color.rgb,
                                backgroundImage: `linear-gradient(45deg, ${color.hex}, ${color.rgb})`,
                                backgroundSize: '200% 200%',
                                animation: 'gradientAnimation 5s ease infinite'
                            }}
                        >
                            {/* Display Area Animation */}
                            <div className='absolute inset-0 flex items-center justify-center'>
                                <span className='text-white text-6xl font-extrabold animate-pulse'>
                                    🎨
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Controls */}
                <div className='mt-6'>
                    <button
                        className='w-full py-3 mb-4 bg-gradient-to-r from-yellow-400 to-red-500 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 hover:shadow-xl transition-transform duration-300'
                        onClick={handleColorChange}
                    >
                        Generate Color
                    </button>
                    <div className='space-y-4'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-lg font-bold text-gray-900 bg-yellow-300 p-3 rounded-lg shadow-md'>
                                RGB: {color.rgb}
                            </h1>
                            <button
                                className='px-4 py-2 bg-pink-500 text-white font-bold rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-300'
                                onClick={() => handleCopy(color.rgb)}
                            >
                                Copy RGB
                            </button>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-lg font-bold text-gray-900 bg-yellow-300 p-3 rounded-lg shadow-md'>
                                HEX: {color.hex}
                            </h1>
                            <button
                                className='px-4 py-2 bg-pink-500 text-white font-bold rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-300'
                                onClick={() => handleCopy(color.hex)}
                            >
                                Copy HEX
                            </button>
                        </div>
                        {copyFeedback && <p className='mt-4 text-green-400 text-center'>{copyFeedback}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RandomColour;
