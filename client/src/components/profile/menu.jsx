import { BookHeart, BookUser, MessageCircleMore, Search } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  
    return (
        <div className='mx-auto  bg-gray-200   my-7 flex flex-wrap  rounded-lg
        w-[95%] h-40 p-2 justify-center gap-4 
        md:gap-16
        lg:p-4 lg:justify-start lg:h-20 lg:gap-8 lg:w-[95%] xl:gap-28
        '>

            
            <NavLink  
                to="/profile/search"  
                className={({ isActive, isPending }) =>
                    isPending ? "bg-white rounded-lg font-semibold" : isActive ? " bg-red-500 rounded-lg  text-white font-semibold" : "  bg-white rounded-lg font-semibold"
                }>
                      <div 
                      className='w-44 items-center lg:w-52 flex gap-2  rounded-lg px-3 py-5   justify-center                lg:px-10 lg:py-3
                      '>
                      <Search></Search>
                    <h1>Search</h1>
            </div>
                  
                </NavLink>

                <NavLink  
                to="/profile/chat"  
                className={({ isActive, isPending }) =>
                    isPending ? "bg-white rounded-lg font-semibold" : isActive ? " bg-white rounded-lg font-semibold" : "  bg-white rounded-lg font-semibold"
                }>
                      <div className='w-44 items-center lg:w-52 flex gap-2  rounded-lg  px-3 py-5 justify-center
                      lg:px-10 lg:py-3'>
                      <BookHeart />
                <h1>Be Social</h1>
            </div>
                  
                </NavLink>
                <NavLink  
                to="/profile/chat"  
                className={({ isActive, isPending }) =>
                    isPending ? "" : isActive ? " bg-red-500 rounded-lg  text-white font-semibold" : "  bg-white rounded-lg font-semibold"
                }>
                      <div className='w-44 items-center lg:w-52 flex gap-2  rounded-lg  px-3 py-5 justify-center
                      lg:px-10 lg:py-3'>
                      <MessageCircleMore />
                <h1>Chat</h1>
            </div>
                  
                </NavLink>
                <NavLink  
                to="/profile"  
                className={({ isActive, isPending }) =>
                    isPending ? "" : isActive ? " bg-red-500 rounded-lg  text-white font-semibold" : "  bg-white rounded-lg font-semibold"
                }>
                      <div className='w-44 items-center lg:w-52 flex gap-2  rounded-lg  px-3 py-5 justify-center
                      lg:px-10 lg:py-3'>
                      <BookUser />
                <h1>Dashboard</h1>
            </div>
                  
                </NavLink>



           
           
            
            
        </div>
    )
}

export default Menu