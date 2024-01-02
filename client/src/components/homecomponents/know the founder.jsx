import React from 'react'
import Title from '../shared/title'

const Ktf = () => {
    return (
        <div className='mt-28 mb-16  '>
           

           <div className=' relative mt-10'>
            <div>
                <img className='w-full h-[500px]  md:h-[700px] lg:h-[500px] blur-sm' src="/bannerbg.png" alt="" />
                
            </div>
            <div className='mt-7 absolute  z-20
            top-10
            lg:left-16
            xl:top-12 xl:left-56
            '>
            <Title title={"Know the Founder"} tdiraction={"text-center"} mxdiraction={"mx-auto"}></Title>
               <div className='relative'>
               <img 
                className='w-[90%] mx-auto p-4 mt-4 bg-gradient-to-b from-[#9F17F6] vai-[#9F17F6] to-[#FD123F] rounded-sm'
                src="/story.png"
                alt="" />
                <img className='w-12 top-28 left-48 md:w-28 absolute md:left-80 md:top-48 lg:top-56 lg:left-96' src="/playbutton.png" alt="" />
               </div>
            </div>
            <div className='w-full h-[300px] hidden lg:block bg-gradient-to-b from-[#42b4ed] to-[#dd22d3] blur-sm'>
            

            </div>
           </div>


        </div>
    )
}

export default Ktf