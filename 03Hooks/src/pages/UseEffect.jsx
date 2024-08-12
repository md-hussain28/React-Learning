import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const UseEffect = () => {
  const [count,setCount]=useState(0);
 
  useEffect(()=>{
    setTimeout(()=>{
       setCount((c)=>c+1);
    },1000)
  },[count])
 
  return (
    <div className='bg-blue-800 h-screen p-4'>
      <Link to="/">
      <button className='bg-indigo-900 p-2'>Home</button>
      </Link>
      <h1 className='text-4xl text-center'>UseEffect Learning Tutorial</h1>
      <div className='flex'>
           <h1 className='text-2xl mx-auto'>The Count is {count}</h1>
         
      </div>
    </div>
  )
}

export default UseEffect
