import React from 'react'
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-6 bg-slate-800 h-screen'>
      <h1 className='text-4xl font-bold text-center'>A Project to learn React Hooks</h1>
      <div className=' '>
        <Link to="/usestate">
          <button className='border-4 border-black px-3 py-1 bg-cyan-500 rounded-lg'>UseState</button>
        </Link>
        <Link to="/useeffect">
          <button className='border-4 border-black px-3 py-1 bg-cyan-500 rounded-lg'>UseEffect</button>
        </Link>
        <Link to="/usememo">
          <button className='border-4 border-black px-3 py-1 bg-cyan-500 rounded-lg'>UseMemo</button>
        </Link>
        <Link to="/useref">
          <button className='border-4 border-black px-3 py-1 bg-cyan-500 rounded-lg'>UseRef</button>
        </Link>
        <Link to="/usecallback">
          <button className='border-4 border-black px-3 py-1 bg-cyan-500 rounded-lg'>UseCallback</button>
        </Link>
      </div>
    </div>
  )
}

export default App

