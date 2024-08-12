import React from 'react'
import { Link } from 'react-router-dom';


const UseState = () => {
    return (
        <div className='bg-green-800 h-screen w-full p-3'>
            <Link to="/">
                <button className='bg-slate-800 p-2'>Back</button>
            </Link>

        </div>
    )
}

export default UseState
