import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const randcol=()=>{
  let r=Math.floor(Math.random()*255);
  let g=Math.floor(Math.random()*255);
  let b=Math.floor(Math.random()*255);
  return `rgb(${r},${g},${b})`;
}

const UseRef = () => {
  console.log("rendered");
  
  const elem=useRef();
  const render=useRef(0);
  
  useEffect(()=>{
    render.current++;
  })

  const handleClick=(e)=>{
         //console.log(e.target);
         let but=e.target;
         e.target.style.backgroundColor=randcol();
         elem.current.style.backgroundColor=randcol();
         //console.log(elem.current);
         
  }

  return (
    <div className='bg-rose-700 h-screen w-full p-3'>
    <Link to="/">
        <button ref={elem} className='bg-slate-800 p-2'>Back</button>
    </Link>
    <div className=''>
         <button onClick={handleClick} className='border-2 p-2 border-cyan-300'>Click me</button>
         <h1>Number of Renders is {render.current}</h1>
    </div>
</div>
  )
}

export default UseRef
