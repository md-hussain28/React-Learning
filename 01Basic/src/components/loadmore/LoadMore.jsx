import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LoadMore = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setLoading(true);
    const url = `https://dummyjson.com/products?limit=20&skip=${page * 20}`;

    const getData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const temp = await res.json();
        setData((prevData) => [...prevData, ...temp.products]);
        setLoading(false);
      } catch (e) {
        console.error("Error fetching data: ", e);
        setLoading(false);
      }
    };

    getData();
  }, [page]);

  return (
    <div className='bg-gray-900 min-h-screen p-8'>
      {/* Home Button */}
      <Link
        to="/"
        className='absolute top-4 left-4 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-700 transition-transform transform hover:scale-110'
      >
        🏠 Home
      </Link>

      {/* Heading */}
      <h1 className='text-4xl font-extrabold text-center text-emerald-400 mb-12 animate-pulse'>
        Explore Our Products
      </h1>
      
      {/* Product Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {data.map((item, index) => (
          <div
            key={index}
            className='bg-gray-800 shadow-xl rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl'
          >
            <img
              src={item.thumbnail}
              alt={item.category}
              className='w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110'
            />
            <div className='p-4'>
              <h2 className='text-lg font-semibold text-emerald-300 truncate transition-colors duration-300 hover:text-emerald-400'>
                {item.title}
              </h2>
              <p className='text-sm text-gray-400 mt-2 truncate transition-opacity duration-300 hover:opacity-80'>
                {item.description}
              </p>
              <p className='text-lg text-emerald-500 font-bold mt-4'>
                ${item.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Loading and Load More Button */}
      <div className='flex flex-col items-center mt-8'>
        {loading && (
          <div className='text-emerald-400 text-lg animate-spin'>
            Loading...
          </div>
        )}
        {!loading && (
          <button
            onClick={() => setPage(prevPage => prevPage + 1)}
            className='bg-emerald-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-emerald-700 transition-transform duration-300 transform hover:scale-110'
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
}

export default LoadMore;
