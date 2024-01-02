import { BookUser, Heart, Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const MatchedBride = () => {
    const [match, setmatch] = useState()
    useEffect(()=>{
        fetch("/matchbride.json")
        .then(res =>res.json())
        .then(data => setmatch(data))
    },[])
    console.log(match);
    return (
        <div className='w-[450px] mx-3
        py-5 px-2
        bg-gray-100  lg:mx-4 lg:p-5 font-inter lg:w-[500px] 
        xl:w-[830px] '>

            <div className='flex flex-wrap gap-10'>
                <h1 className=' lg:text-xl xl:text-3xl font-extrabold flex-1'>Matches Information</h1>
                <div className='relative  '>
                        <input 
                        className='w-[220px] h-10 rounded-md
                        xl:w-[400px] xl:h-[50px] px-4 '
                        type="text" placeholder='Search' name="" id="" />
                       <div className='absolute top-0 right-0 bg-red-500 w-10  h-[38px] mt-[2px] rounded-md px-[7px] py-[6px] text-white'><Search></Search></div>
                    </div>
            </div>

            <div className='my-10 border-b-[2px] border-gray-200 flex '>
            <NavLink  
                to="/profile/dashboard"  
                className={({ isActive, isPending }) =>
                    isPending ? "" : isActive ? " text-purple-600 border-b-[3px] border-purple-600 font-semibold" : "  bg-white rounded-lg font-semibold"
                }>
                      <div className=' items-center flex gap-2  rounded-lg  px-3 py-5 justify-center
                      lg:px-10 lg:py-3'>
                      <BookUser />
                <h1>Friends</h1>
            </div>
                  
            </NavLink>
            <NavLink  
                to="/profile/dashboard"  
                className={({ isActive, isPending }) =>
                    isPending ? "" : isActive ? "  rounded-lg   font-semibold" : "  bg-white rounded-lg font-semibold"
                }>
                      <div className='items-center  flex gap-2  rounded-lg  px-3 py-5 justify-center
                      lg:px-10 lg:py-3'>
                      <BookUser />
                <h1>Request</h1>
            </div>
                  
            </NavLink>
            <NavLink  
                to="/profile/dashboard"  
                className={({ isActive, isPending }) =>
                    isPending ? "" : isActive ? "  rounded-lg   font-semibold" : "  bg-white rounded-lg font-semibold"
                }>
                      <div className=' items-center  flex gap-2  rounded-lg  px-3 py-5 justify-center
                      lg:px-10 lg:py-3'>
                      <BookUser />
                <h1>Massage</h1>
            </div>
                  
            </NavLink>
            <NavLink  
                to="/profile/dashboard"  
                className={({ isActive, isPending }) =>
                    isPending ? "" : isActive ? "  rounded-lg   font-semibold" : "  bg-white rounded-lg font-semibold"
                }>
                      <div className=' items-center  flex gap-2  rounded-lg  px-3 py-5 justify-center
                      lg:px-10 lg:py-3'>
                      <BookUser />
                <h1>Posts</h1>
            </div>
                  
            </NavLink>
            </div>

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

export default MatchedBride