import React from 'react'

const Story = () => {
    return (
        <div className='mt-20 mb-24 relative h-[550px]  '>
            
            
            <div className=' rounded-md  
            lg:w-[50%] lg:h-80 lg:top-[150px] lg:left-[450px] lg:bg-white lg:absolute  lg:py-4 lg:shadow-md

            xl:w-[50%] xl:h-80 xl:top-[150px] xl:left-[600px] xl:bg-white xl:absolute  xl:py-8 px-6'>
               
                <h1 className=' text-black
                text-center text-4xl font-bold my-5
                lg:text-3xl lg:text-left lg:px-4
                xl:text-5xl xl:text-left xl:px-4
                '>Story of The Founder</h1>

                <p className='
                px-4  text-center
                lg:text-left
                xl:text-left '>The personal love story of Shiblu Ahmad serves as the inspiration behind BiyeKorun. He met his American wife on Yahoo chat in 2005, leading to their marriage in 2009. Shiblu's journey from Bangladesh to Singapore for studies and then finding love across continents underpins the platform's core value: connecting Bangladeshis worldwide.</p>

                <div className='w-full text-left px-4 mt-5'>
                    <button  
                        className='
                        w-28 h-10 text-white font-mono font-medium rounded-full  bg-[#F42A41] cursor-pointer hidden
                        lg:block
                        ' >
                    see more 
                 </button>
                 </div>
         
            </div>

            <div className='flex '>
                <img
                 className='w-[90%] mx-auto my-5 rounded-lg
                 lg:w-[50%] lg:mx-[6%] lg:rounded-none
                 xl:w-[40%] xl:mx-[10%] xl:rounded-none'
                 src="./story.png" 
                 alt="" />

                 <img 
                 className='w-28 h-[120px]  mt-5 shadow-sm hidden 
                 lg:block lg:-ml-12
                 xl:-ml-32'
                 src="/storyshape.png" 
                 alt="" />
            </div>

            <div className='w-full text-center mt-5'>
                <button  
                    className='w-28 h-10 text-white font-mono font-medium rounded-full  bg-[#F42A41] cursor-pointer
                      lg:hidden' >
                see more 
                </button>
             </div>
         
        </div>
    )
}

export default Story