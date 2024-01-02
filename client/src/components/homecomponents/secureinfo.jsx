import React from 'react'

const SecureInfo = () => {
    return (
        <div className='p-5 mb-20 flex  flex-col-reverse lg:flex-row lg:gap-16 xl:gap-20 xl:mb-10'>
            
            <div className='relative mt-10 '>
            <img
                className='px-12 w-[1650px]
                 lg:py-20 xl:py-5'
                src="/secureinfo.png" alt="" />
                <div className='w-32 h-32 rounded-full bg-[#9908F5] text-center  py-4 absolute top-[240px] -right-2
                md:w-56 md:h-56 md:top-[530px] md:-right-3 md:py-10 md:px-3
                lg:top-[350px] lg:w-40 lg:h-40 lg:py-6
                xl:w-60 xl:h-60 xl:top-[400px] xl:-right-10 xl:py-10 xl:px-3
                '>
                    <h1 className='text-4xl font-bold text-white
                    md:text-7xl
                    lg:text-4xl
                    xl:text-7xl'>AR</h1>
                    <p className='text-white
                    md:text-2xl md:font-medium md:mt-3
                    lg:text-lg lg:font-medium 
                    xl:text-2xl xl:font-medium xl:mt-3'>We only display your initial</p>
                      
                </div>

                
               
            </div>
            <div>
                <div className='mt-10 px-1 md:px-10'>
                    <h1 className='text-4xl font-bold text-black
                    xl:text-6xl'>Your Information is Protected and secure</h1>
                    <div className={`w-52 h-1 bg-gray-500  mt-5`}></div>
                    <p className='mt-6 text-black/60'>
                    Most Trusted Matrimony Service for Bangladeshis. Register Now to Find Your Life Partner. Thousands of Bangladeshis got married through Bangladeshi Matrimony, you could be next. Hassle-Free Registration. Free Registration. Safe & Secure
                    </p>
                  <div className='w-[70%] text-black/90'>
                  <p className='flex gap-5 mt-4 font-semibold'>
                        <img src="/checkmark.png" alt="" />
                        Register for Free!
                        </p>
                    <p className='flex gap-5 mt-4 font-semibold'>
                        <img src="/checkmark.png" alt="" />
                        100% human verified profiles
                        </p>
                    <p className='flex gap-5 mt-4 font-semibold'>
                        <img src="/checkmark.png" alt="" />
                        Chat, Voice & Video calling
                        </p>
                    <p className='flex gap-5 mt-4 font-semibold items-center'>
                    <img className='h-6' src="/checkmark.png" alt="" />
                        Private, personalized, and highly confidential service
                        </p>
                    <p className='flex gap-5 mt-4 font-semibold items-center'>
                        <img className='h-6' src="/checkmark.png" alt="" />
                        Safe and secured Matrimony site for Bangladeshi
                        </p>
                    <p className='flex gap-5 text-[#9908F5] font-semibold mt-4'>
                        <img src="/checkmark.png" alt="" />
                        Nobody sees your name
                        </p>
                        <button 
                            className={`w-[170px]  h-[50px] mt-8 font-mono font-semibold rounded-full  bg-[#F42A41] text-lg text-white cursor-pointer `}> Send Request</button>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default SecureInfo