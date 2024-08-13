import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RetroImageSlider = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [size, setSize] = useState(10); // Default to 10 images

  // Fetch images from API
  const fetchImages = async () => {
    const url = `https://picsum.photos/v2/list?limit=${size}`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setImages(data);
      setCurrentIndex(0);
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchImages();
  }, [size]);

  // Handle previous and next image transitions
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  const handleSizeChange = (e) => {
    setSize(Number(e.target.value));
  };

  return (
    <div className="h-screen bg-gray-900 flex flex-col items-center justify-center p-6">
      <div className="absolute top-4 left-4">
        <Link
          to="/"
          className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg hover:bg-gray-700 transition-transform transform hover:scale-105"
        >
          🏠 Home
        </Link>
      </div>
      <div className="bg-gray-800 border-4 border-gray-600 rounded-lg p-4 shadow-lg relative">
        <h1 className="text-4xl font-mono text-white text-center mb-4">Retro Image Slider</h1>
        <div className="relative bg-black p-2 border-4 border-gray-600 rounded-lg overflow-hidden">
          {loading ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <span className="text-white text-lg animate-pulse">Loading...</span>
            </div>
          ) : images.length === 0 ? (
            <p className="text-white text-center">No images available</p>
          ) : (
            <img
              src={images[currentIndex].download_url}
              alt={images[currentIndex].author}
              className="w-full h-64 object-cover rounded-lg transition-opacity duration-500"
              style={{ opacity: loading ? 0 : 1 }}
            />
          )}
        </div>
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrevious}
            className="bg-gray-600 text-white p-2 rounded-full hover:bg-gray-500 transition-transform transform hover:scale-110"
          >
            &#10094;
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-600 text-white p-2 rounded-full hover:bg-gray-500 transition-transform transform hover:scale-110"
          >
            &#10095;
          </button>
        </div>
        <form className="mt-6">
          <label htmlFor="size" className="block text-white mb-2 text-xl">
            Number of Images:
          </label>
          <input
            id="size"
            type="number"
            value={size}
            onChange={handleSizeChange}
            className="border-2 border-gray-600 bg-gray-900 text-white rounded-lg p-2 w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default RetroImageSlider;
