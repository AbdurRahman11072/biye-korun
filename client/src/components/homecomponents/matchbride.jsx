import React, { useEffect, useState } from 'react'
import Title from '../shared/title'

const MatchBride = () => {
    const [match, setmatch] = useState()
    useEffect(()=>{
        fetch("/matchbride.json")
        .then(res =>res.json())
        .then(data => setmatch(data))
    },[])
    console.log(match);
    return (
        <div className='m-20'>
            <Title title={"Match Bride & Grooms"} tdiraction={"text-center"} mxdiraction={"mx-auto"}></Title>
            <div className='py-10 flex flex-wrap justify-center gap-5'>
                {
                    match?.map(bride =>(
                        <div key={bride.id} className=' md:w-[280px]  relative pt-2 '>
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
                            <h5 className='mt-2 text-gray-500 font-semibold'>{bride.education}</h5>
                            <h5 className='text-gray-500 font-semibold'>{bride.details}</h5>
                            <h5 className='text-black font-semibold'>{bride.religon} .{bride.city}</h5>
                            <div className='mt-5 flex gap-2'>
                            <button 
                            className={`w-[160px]  h-10 text-sm text-[#F42A41] font-mono font-bold rounded-full border-[2px] border-[#f14d60]   hover:bg-[#F42A41] hover:text-white cursor-pointer `}> Send Request</button>
                            <button 
                            className={`w-[160px]  h-10 text-sm text-[#F42A41]  font-mono font-semibold rounded-full border-[2px] border-[#f14d60] hover:bg-[#F42A41] hover:text-white cursor-pointer`}> View Profile</button>
                            </div>
                        </div>

                    </div>
                </div>
                    ))
                }
            </div>
          <div className='text-center'>
          <button  
          className={`w-32 h-10 text-white font-mono font-medium rounded-full  bg-[#F42A41] cursor-pointer
         `}>see more</button>
          </div>
        </div>
    )
}

export default MatchBride