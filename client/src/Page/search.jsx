import { Search } from 'lucide-react'
import React from 'react'
import SearchCard from '../components/profile/searchcards'

const SearchPage = () => {
    return (
        <div className='my-10 w-[95%] mx-auto bg-gray-200'>
            <div className='navbar block md:flex lg:px-5'>
                <div className='navbar-start block mb-5 w-full'>
                    <h1 className='text-red-500 font-medium font-inter'>Discover</h1>
                    <h1 className='font-inter font-bold text-2xl'>Potential Partner</h1>
                </div>
                <div className='flex gap-5'>
                    <div className='relative  '>
                        <input 
                        className='w-[220px] h-10 rounded-md
                        lg:w-[350px] lg:h-[45px] px-4 '
                        type="text" placeholder='Search' name="" id="" />
                        <div className='absolute top-0 right-0 bg-red-500 w-10  h-[90%] mt-[2px] rounded-md px-[7px] py-[6px] text-white'><Search></Search></div>
                    </div>
                    <button className='w-[160px] h-10 text-white font-inter font-medium rounded-md  bg-red-500'>Advanced Search</button>
                </div>            
      
            </div>

            <SearchCard></SearchCard>
        </div>
    )
}

export default SearchPage