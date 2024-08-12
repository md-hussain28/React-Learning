import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

const UseMemo = () => {
  const [inputValue, setInputValue] = useState(0);
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const cube = useMemo(() => {
    console.log("Cube calculation called");
    return inputValue * inputValue * inputValue;
  }, [inputValue]);

  return (
    <div className='bg-violet-800 h-screen p-4'>
      <Link to="/">
        <button className='bg-indigo-900 p-2'>Home</button>
      </Link>
      <div>
        <input type="number" onChange={handleChange} />
        <h1>The Value is {cube}</h1>
        <button onClick={() => setCount((i) => i + 1)} className='border-4 p-2 border-black'>Counter+</button>
        <h1>Counter {count}</h1>
      </div>
    </div>
  );
};

export default UseMemo;
