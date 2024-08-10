import React, { useState } from 'react';

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
        <div className='bg-emerald-900 flex p-7 h-screen w-full'>
            <div className='mx-auto w-3/4'>
                <h1 className='text-2xl text-center border-2 rounded-xl px-3 py-1 text-cyan-300'>
                    Random Colour Generator
                </h1>
                <div className="flex p-4">
                    <div className='w-1/2'>
                        <button
                            className='border-2 px-3 py-2 border-black rounded-full bg-gray-200 hover:bg-gray-300 transition-colors'
                            onClick={handleColorChange}
                        >
                            Generate Color
                        </button>
                        <div className='mt-4 '>
                            <div className='flex items-center mb-2 justify-start'>
                                <h1 className='font-serif text-black bg-green-400 p-2 rounded'>
                                    RGB: {color.rgb}
                                </h1>
                                <button
                                    className='ml-2 border-2 px-2 py-1 border-black rounded-full bg-gray-200 hover:bg-gray-300'
                                    onClick={() => handleCopy(color.rgb)}
                                >
                                    Copy RGB
                                </button>
                            </div>
                            <div className='flex items-center'>
                                <h1 className='font-serif text-black bg-green-400 p-2 rounded'>
                                    HEX: {color.hex}
                                </h1>
                                <button
                                    className='ml-2 border-2 px-2 py-1 border-black rounded-full bg-gray-200 hover:bg-gray-300'
                                    onClick={() => handleCopy(color.hex)}
                                >
                                    Copy HEX
                                </button>
                            </div>
                            {copyFeedback && <p className='mt-2 text-green-500'>{copyFeedback}</p>}
                        </div>
                    </div>
                    <div className='w-1/2 h-28 mt-4' style={{ backgroundColor: color.rgb }}>
                        {/* Color display area */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RandomColour;
