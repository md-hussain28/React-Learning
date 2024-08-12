import React, { useEffect, useState } from 'react'

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
    <div className='bg-gray-100 min-h-screen p-8'>
      <h1 className='text-3xl font-bold text-center text-emerald-800 mb-8'>Product List</h1>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {data.map((item, index) => (
          <div key={index} className='bg-white shadow-lg rounded-lg p-4'>
            <img src={item.thumbnail} alt={item.category} className='w-full h-48 object-cover rounded-t-lg' />
            <div className='p-4'>
              <h2 className='text-lg font-semibold truncate'>{item.title}</h2>
              <p className='text-sm text-gray-600 mt-2 truncate '>{item.description}</p>
              <p className='text-lg text-emerald-700 font-bold mt-4'>${item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {loading && (
        <div className='flex justify-center mt-8'>
          <span className='text-emerald-800 text-lg'>Loading...</span>
        </div>
      )}

      {!loading && (
        <div className='flex justify-center mt-8'>
          <button
            onClick={() => setPage(prevPage => prevPage + 1)}
            className='bg-emerald-600 text-white py-2 px-6 rounded-lg hover:bg-emerald-700 transition duration-200'
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default LoadMore;
