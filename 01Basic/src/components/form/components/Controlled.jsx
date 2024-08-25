import React, { useEffect, useRef, useState } from 'react';

const Controlled = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const count=useRef(0);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit");
        setDob('');
        setEmail('');
        setName('');
    }
    useEffect(()=>{
       count.current+=1;
       console.log("render");
       
    },[])
    console.log("render");
    return (
        <div className='min-h-screen bg-gradient-to-r from-teal-800 to-blue-700 p-4 flex flex-col items-center'>
            <h1 className='text-white text-4xl font-bold mb-6'>Learning Form Handling in React</h1>
            <div className='flex w-5/6 gap-6 mx-auto justify-between'>
                <div className='bg-gray-800 w-full max-w-md p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
                    <h2 className='text-center text-white text-2xl mb-4'>Controlled Component</h2>
                    <form onSubmit={handleSubmit} className='space-y-4'>
                        <div className='flex flex-col'>
                            <label htmlFor="name" className='text-white text-sm mb-1'>Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className='px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300 transition-colors duration-300'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="email" className='text-white text-sm mb-1'>Email</label>
                            <input
                                type="email"
                                id='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300 transition-colors duration-300'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="dob" className='text-white text-sm mb-1'>Date of Birth</label>
                            <input
                                type="date"
                                name="dob"
                                id="dob"
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                                className='px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300 transition-colors duration-300'
                            />
                        </div>
                        <div className='flex items-center'>
                            <input
                                type="checkbox"
                                name="check"
                                id="check"
                                required
                                className='mr-2'
                            />
                            <label htmlFor="check" className='text-white text-sm'>Accept the Terms & Conditions</label>
                        </div>
                        <button
                            type='submit'
                            className='w-full bg-teal-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-teal-700 transition-colors duration-300 transform hover:scale-105'
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <div className='bg-gray-800 w-full max-w-md p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105'>
                <h2 className='text-center text-white text-2xl mb-4'>Un-Controlled Component</h2>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div className='flex flex-col'>
                        <label htmlFor="name" className='text-white text-sm mb-1'>Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300 transition-colors duration-300'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="email" className='text-white text-sm mb-1'>Email</label>
                        <input
                            type="email"
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300 transition-colors duration-300'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="dob" className='text-white text-sm mb-1'>Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            id="dob"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            className='px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300 transition-colors duration-300'
                        />
                    </div>
                    <div className='flex items-center'>
                        <input
                            type="checkbox"
                            name="check"
                            id="check"
                            required
                            className='mr-2'
                        />
                        <label htmlFor="check" className='text-white text-sm'>Accept the Terms & Conditions</label>
                    </div>
                    <button
                        type='submit'
                        className='w-full bg-teal-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-teal-700 transition-colors duration-300 transform hover:scale-105'
                    >
                        Submit
                    </button>
                </form>
            </div>
            </div>
            <div>
                <h1>This thing rendered {count.current}</h1>
            </div>
        </div>
    );
}

export default Controlled;
