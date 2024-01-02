import { NavLink } from "react-router-dom"

const Banner = () => {
    return (
        <div className='relative w-[100%] h-[70vh] 
        lg:h-[70vh]
        xl:h-[80vh] overflow-hidden'>
            <img 
            className='w-[100%] h-[70vh] 
            lg:h-[70vh]
            xl:h-[80vh]' 
            src="/banar.avif" 
            alt="" />
            <div className='absolute top-0 flex'>
               <div className='w-full lg:w-[650px] xl:w-[855px] '>
               <div  className='px-5 md:px-20 py-5'>
                    <img
                     className='w-28 lg:w-32 xl:w-44'
                     src="Logo.png" 
                     alt="" />
                </div>
                <div className='flex mt-4 md:mt-8 lg:-ml-12   xl:ml-0'>
                    <img
                    className='w-[40px] h-[40px] -ml-2
                    md:w-[80px] md:h-[80px] md:ml-8
                    xl:ml-8  xl:w-[110px] xl:h-[110px]'
                    src="/bannerimg2.png" 
                    alt="" />
                    <div className="-mt-10">
                        <h1 className=' font-extrabold font-bannertext text-black shadow-inherit text-3xl text-center
                        md:text-4xl md:mt-5 md:-ml-12
                        xl:text-6xl xl:mt-20 xl:text-left xl:ml-1'>
                        Find the Right Person <br></br>to Spend Rest of Your <br></br> Life
                    </h1>

                 <div className='justify-center mt-10 '>              
                <div className='flex gap-3 md:gap-5 '>
                    <select className="select select-bordered bg-white text-black font-semibold
                    w-[175px] md:w-[250px] lg:w[230px]">
                        <option disabled selected className='text-black font-semibold'>Looking for</option>
                        <option>Girl</option>
                        <option>Boy</option>
                    </select>
                    <select className="select select-bordered  bg-white text-black font-semibold 
                     w-[175px] md:w-[250px] lg:w[230px]">
                        <option disabled selected className='text-black font-semibold'>Age</option>
                        <option>18-22</option>
                        <option>22-25</option>
                        <option>25-30</option>
                    </select>
                    </div>
                    <div className='flex gap-3 md:gap-5 mt-6'>
                    <select className="select select-bordered bg-white text-black font-semibold
                     w-[175px] md:w-[250px] lg:w[230px]">
                        <option disabled selected className='text-black font-semibold'>Select Religion</option>
                        <option>Islam</option>
                        
                    </select>
                    <select className="select select-bordered bg-white text-black font-semibold
                     w-[175px] md:w-[250px] lg:w[230px]">
                        <option disabled selected className='text-black font-semibold'>Select Langauage</option>
                        <option>Bangla</option>
                        <option>English</option>
                        <option>Chinese</option>
                    </select>
                    </div>
                     </div>
                     <div className="flex gap-4 mt-6">
                <NavLink to="/profile/dashboard">
                <button 
          className={` p-2 text-white  font-semibold rounded-full  bg-[#F42A41] cursor-pointer
          w-44 h-12
          md:w-52 md:h-12
          xl:w-36 xl:h-12
           `}> Go to Profile </button>
                </NavLink>
                <button  
          className={` text-white  font-semibold rounded-full  bg-[#992af4] cursor-pointer
          w-40 h-12
          xl:w-36 xl:h-12
           `}> Login</button>
           <img
                    className='hidden 
                    md:w-[70px] md:h-[70px] md:ml-28 md:-mt-10 md:block
                    lg:mt-0
                     xl:w-[100px] xl:h-[100px] xl:ml-44'
                    src="/bannerimg2.png" 
                    alt="" />
                     </div>

                </div>    
                </div>
               
                
               </div>
                <div className='right-0 hidden lg:block'>
                    <img
                     className='lg:h-[70vh]
                     xl:h-[80vh]' 
                     src="/bannerimg1.png" 
                     alt="" />
                </div>

            </div>
        </div>

    )
}

export default Banner