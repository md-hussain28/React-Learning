import React, { useState } from 'react';
import data from './data.js';

const Accordion = () => {
    const [open, setOpen] = useState([]);
    const [multi, setMulti] = useState(false);

    const handleClick = (id) => {
        setOpen(prevOpen => {
            if (!multi) {
                return prevOpen.includes(id) ? [] : [id];
            } else {
                return prevOpen.includes(id)
                    ? prevOpen.filter(openId => openId !== id)
                    : [...prevOpen, id];
            }
        });
    };

    return (
        <div className='bg-slate-800 w-full min-h-screen  py-4'>
            <h1 className='text-4xl text-cyan-600 my-10 text-center'>Accordion Project</h1>
            <div className='w-2/3 h-fit mx-auto'>
                <h1 onClick={() => setMulti(o => !o)} className='bg-green-800 cursor-pointer text-white p-2'>
                    {multi ? "Multiple Open" : "Single Open"}
                </h1>
                {data.map((i) => (
                    <div key={i.id} className='mb-4'>
                        <h1 
                            onClick={() => handleClick(i.id)} 
                            className='bg-cyan-800 cursor-pointer text-white p-2'
                            aria-expanded={open.includes(i.id)}
                            role="button"
                            aria-controls={`content-${i.id}`}
                        >
                            {i.title}
                        </h1>
                        <div
                            id={`content-${i.id}`}
                            className={`overflow-hidden transition-all duration-300 ease-in-out max-h-0 ${
                                open.includes(i.id) ? 'max-h-40 opacity-100' : 'opacity-0'
                            }`}
                        >
                            <p className='p-2'>{i.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accordion;
