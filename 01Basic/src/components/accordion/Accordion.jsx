import React, { useState } from 'react'
import data from './data.js'
const Accordion = () => {
    console.log(data);
    const [multi,setMulti]=useState(false);
    const handleClick = (e, id) => {
        console.log(id);
        let escapedId = CSS.escape(id);
        let pElement = document.querySelector(`div#${escapedId} > p`);
        let x = pElement.classList;
        console.log(typeof x, x);

        if (multi) {
            if (Object.values(x).includes('hidden')) {
                pElement.classList.remove('hidden');
            } else {
                pElement.classList.add('hidden')
            }
        }else{
            if (Object.values(x).includes('hidden')) {
                
                let el=document.querySelectorAll(`div>p`)
                Object.values(el).map((i)=>{
                    i.classList.add('hidden');
                    
                })
                pElement.classList.remove('hidden');
            } else {
                pElement.classList.add('hidden')
            }
        }



    }

    return (
        <div className='bg-slate-800 w-full h-screen flex justify-center items-center '>
            <div className='w-2/3 h-fit bg-black '>
                <h1 onClick={()=>(setMulti((p)=>(!p))) }className='bg-black text-cyan-300'>
                    {(multi)?"MultiOpen":"SingleOpen"}
                </h1>
                {
                    data.map((i) => (
                        <div key={i.id} id={i.id} className='bg-cyan-400 rounded-lg'>
                            <h1 className='bg-cyan-800' onClick={(e) => handleClick(e, i.id)}>{i.title}</h1>
                            <p className='hidden bg-cyan-400'>{i.content}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Accordion
