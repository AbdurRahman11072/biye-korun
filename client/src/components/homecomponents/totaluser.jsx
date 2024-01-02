import React from 'react'

const TotalUser = () => {
    return (
        <div className='h-auto lg:h-[25vh] bg-white shadow-md  grid grid-cols-2 md:grid-cols-4 justify-center'>
            <div className='w-48  lg:h-[20vh] xl:w-80 py-16 flex'>
               <div className='flex-1'>
               <h1 className='text-5xl font-extrabold text-center'>1,00K</h1>
                <p className='text-gray-600 font-semibold mt-2 text-center'>Bride & Grooms</p>
               </div>
                <div className='h-20 w-[2px] bg-gray-600'></div>
            </div>
            <div className='w-48  lg:h-[20vh] xl:w-80 py-16 flex'>
               <div className='flex-1'>
               <h1 className='text-5xl font-extrabold text-center'>10+</h1>
                <p className='text-gray-600 font-semibold mt-2 text-center'>Years of Exprience</p>
               </div>
                <div className='h-20 w-[2px] bg-gray-600'></div>
            </div>
            <div className='w-48  lg:h-[20vh] xl:w-80 py-16 flex'>
               <div className='flex-1'>
               <h1 className='text-5xl font-extrabold text-center'>500</h1>
                <p className='text-gray-600 font-semibold mt-2 text-center'>Event Completed</p>
               </div>
                <div className='h-20 w-[2px] bg-gray-600'></div>
            </div>
            <div className='w-48  lg:h-[20vh] xl:w-80 py-16 flex'>
               <div className='flex-1'>
               <h1 className='text-5xl font-extrabold text-center'>1.2k</h1>
                <p className='text-gray-600 font-semibold mt-2 text-center'>Happy Client</p>
               </div>
                
            </div>
          
            
            
        </div>
    )
}

export default TotalUser