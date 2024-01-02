import { BookUser, Search } from 'lucide-react'
import React from 'react'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'
import ProfileCard from '../components/profile/profilecard'

const DashboardLayout = () => {
    return (
        <div className='flex flex-wrap lg:mx-5 w-full '>
            <ProfileCard></ProfileCard>
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
                to="/profile/dashboard/request"  
                className={({ isActive, isPending }) =>
                    isPending ? "" : isActive ? "text-purple-600 border-b-[3px] border-purple-600    font-semibold" : "  bg-white  font-semibold"
                }>
                      <div className='items-center  flex gap-2    px-3 py-5 justify-center
                      lg:px-10 lg:py-3'>
                      <BookUser />
                <h1>Request</h1>
            </div>
                  
            </NavLink>
            <NavLink  
                to="/profile/dashboard/message"  
                className={({ isActive, isPending }) =>
                    isPending ? "" : isActive ? " text-purple-600 border-b-[3px] border-purple-600     font-semibold" : "  bg-white  font-semibold"
                }>
                      <div className=' items-center  flex gap-2    px-3 py-5 justify-center
                      lg:px-10 lg:py-3'>
                      <BookUser />
                <h1>Message</h1>
            </div>
                  
            </NavLink>
            <NavLink  
                to="/profile/dashboard/post"  
                className={({ isActive, isPending }) =>
                    isPending ? "" : isActive ? " text-purple-600 border-b-[3px] border-purple-600   font-semibold" : "  bg-white  font-semibold"
                }>
                      <div className=' items-center  flex gap-2   px-3 py-5 justify-center
                      lg:px-10 lg:py-3'>
                      <BookUser />
                <h1>Posts</h1>
            </div>
                  
            </NavLink>
            </div>
            
            <Outlet></Outlet>
            
            </div>
        <img src="no_message.png" alt="" />
           
           
        </div>
    )
}

export default DashboardLayout