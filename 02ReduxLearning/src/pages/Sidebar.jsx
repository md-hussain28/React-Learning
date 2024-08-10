import React, { useState } from 'react'
import User from './User'

const Sidebar = () => {
   
  
    return (
        <div className='bg-gray-800 w-1/6 min-w-[200px]' >
         <div className='flex w-full bg-black py-3 px-3 rounded-full justify-selfend'>
            <img src='#' alt="userimage" />
            <h2 className='text-cyan-200'>UserName</h2>
         </div>
       </div>
     )
  
}

export default Sidebar
