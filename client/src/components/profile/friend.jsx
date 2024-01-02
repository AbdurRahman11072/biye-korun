import { Heart } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Friends = () => {
    const [match, setmatch] = useState()
    useEffect(()=>{
        fetch("/matchbride.json")
        .then(res =>res.json())
        .then(data => setmatch(data))
    },[])
    console.log(match);
    return (
        <div>
             <div className='py-10 flex flex-wrap justify-center gap-5'>
                {
                    match?.map(bride =>(
                        <div key={bride.id} className=' w-[350px]  relative pt-2 '>
                <img
                        className='mx-auto '
                         src="/bride.png" alt="" />
             
                    <div className='bg-white shadow-lg -mt-[66px] rounded-md'>
                   
                        <div className='px-5 pt-[75px] pb-5'>
                            <div className='flex '>
                                <h1 className='text-2xl text-black/80 font-bold flex-1'>{bride.name} 
                                    <span className='text-sm text-gray-400 ml-2'>{bride.uid}</span>
                                </h1>
                                <button className='text-2xl text-black/80'>...</button>
                            </div>
                           <div className='border-b-[2px] border-gray-300 pb-6'>
                           <h5 className='mt-2  text-gray-500 font-semibold'>{bride.education}</h5>
                            <h5 className='text-gray-500 font-semibold mt-3'>{bride.details}</h5>
                            <h5 className='text-black font-semibold mt-3'>{bride.religon} .{bride.city}</h5>
                           </div>
                            <div className='mt-5 flex gap-2 items-center'>
                                <div className='flex-1 ml-2'>
                                <Heart color='red' size={32} />
                                </div>
                            <button 
                            className={`w-[160px]  h-10 text-sm  font-mono font-bold rounded-full border-[2px]  text-white
                            bg-gradient-to-tl from-[#9e36ed] to-[#ea2e31]   hover:text-white cursor-pointer `}> Send Message</button>
                           
                            </div>
                        </div>

                    </div>
                </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Friends