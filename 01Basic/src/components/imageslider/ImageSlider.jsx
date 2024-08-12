import React, { useEffect, useState } from 'react';
import loadingImage from './loading.png'; // Adjust path according to your project structure

const ImageSlider = () => {
    const [images, setImages] = useState([]);
    const [size, setSize] = useState(10); // Default to 10 images
    const [it, setIt] = useState(0);
    const [load, setLoad] = useState(true); // Track loading state

    const getImage = async () => {
        console.log("API Called");
        
        const url = `https://picsum.photos/v2/list?limit=${size}`;
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error("Image is not OK");
            const data = await res.json();
            return data;
        } catch (er) {
            console.log("Error", er);
            return [];
        } finally {
            console.log("Everything is resolved");
        }
    };

    useEffect(() => {
        const fetchImages = async () => {
            setLoad(true); // Start loading
            const imagesData = await getImage();
            setImages(imagesData);
            setIt(0); // Reset iterator to 0 when new images are fetched
            setLoad(false); // Stop loading after fetch
        };
        fetchImages();
    }, [size]);

    const handlePrevious = () => {
        setIt((prevIt) => (prevIt > 0 ? prevIt - 1 : images.length - 1));
    };

    const handleNext = () => {
        setIt((prevIt) => (prevIt < images.length - 1 ? prevIt + 1 : 0));
    };

    const handleSizeChange = (event) => {
        setSize(Number(event.target.value)); // Update size with the value from the form
    };

    return (
        <div className='h-screen bg-gray-900 flex flex-col items-center justify-center p-6'>
            <div className='bg-white rounded-lg shadow-lg p-6 max-w-md w-full'>
                <h1 className='text-2xl font-bold mb-4 text-center'>Image Slider</h1>
                <form className='mb-4'>
                    <label htmlFor='size' className='block text-gray-700 text-lg mb-2'>Number of Images:</label>
                    <input
                        id='size'
                        type='number'
                        value={size}
                        onChange={handleSizeChange}
                        className='border border-gray-300 rounded-lg p-2 w-full'
                    />
                </form>
                <div className='flex items-center justify-center gap-4'>
                    <button
                        className='bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition'
                        onClick={handlePrevious}
                    >
                        {"<"}
                    </button>
                    {load ? (
                        <img
                            src={loadingImage}
                            alt="Loading"
                            className='h-60 w-60 object-cover rounded-lg'
                        />
                    ) : images.length === 0 ? (
                        <p className='text-gray-700'>No images available</p>
                    ) : (
                        <img
                            src={images[it].download_url}
                            alt={images[it].author}
                            className='h-60 w-60 object-cover rounded-lg'
                        />
                    )}
                    <button
                        className='bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition'
                        onClick={handleNext}
                    >
                        {">"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
