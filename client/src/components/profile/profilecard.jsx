import { CheckCircle, XCircle } from 'lucide-react'
import React from 'react'

const ProfileCard = () => {
    return (
        <div className='w-[465px]
        static' >
           <div className='p-6 mx-3 bg-gray-100 items-center'>
            <div className='flex border-b-[2px] border-gray-300 pb-6 px-2  '>
                <h1 className='text-2xl font-inter font-semibold flex-1'> Profile</h1>
                <h1 className='text-2xl font-inter font-semibold'>...</h1>
            </div>
            <div>
                <div className='text-center my-10'>
                    <img className='mx-auto' src="/bride.png" alt="" />
                    <h1 className='mt-3 font-inter text-xl font-extrabold'>Annamika Rahman</h1>
                    <h1 className='mt-3 font-inter font-medium text-gray-400'>User ID : kBKJDK26D6D5G6A</h1>
                </div>
                <div className='flex items-center'>
                    <h1 className='text-lg font-inter font-semibold flex-1'>Account Type : <span className='font-medium'> Free</span></h1>
                    <button className='px-4 py-2  font-inter bg-white shadow-xl font-semibold rounded-lg text-red-600'>Upgrade</button>
                </div>
                <div className='mt-10'>
                    <div className='flex '>
                        <h1 className='flex-1 font-inter font-medium'>Profile Completion</h1>
                        <h1 className='font-inter font-medium'>70%</h1>
                    </div>
                <progress className="progress progress-primary w-950%]" value="70" max="100"></progress>
                </div>
                <div className='grid grid-cols-3  font-inter text-sm text-center my-5 border-b-[2px] border-gray-300'>
                    <div className='flex '>
                       <div className='flex-1'>
                       <h1 className='font-semibold'>Pending Invitation</h1>
                        <h1 className='text-2xl font-extrabold my-3'>50</h1>
                       </div>
                       <div className='w-[2px] h-[70px] ml-2 bg-gray-400'></div>
                       
                    </div>
                    <div className='flex '>
                       <div className='flex-1'>
                       <h1 className='font-semibold'>Connection</h1>
                        <h1 className='text-2xl font-extrabold my-3'>50</h1>
                       </div>
                       <div className='w-[2px] h-[70px] ml-2 bg-gray-400'></div>
                       
                    </div>
                    <div className=' font-inter'>
                        <h1 className='font-semibold'>Visitors</h1>
                        <h1  className='text-2xl font-extrabold my-3'>50</h1>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-5'>
                    <div className='flex items-center bg-white px-4 py-3 rounded-lg'>
                        <h1 className='flex-1 text-lg font-bold '>
                            Email:
                        </h1>
                        <CheckCircle color="#51f138"/>
                    </div>
                    <div className='flex items-center bg-white px-4 py-3 rounded-lg'>
                        <h1 className='flex-1 text-lg font-bold '>
                            Mobile Number
                        </h1>
                        <CheckCircle color="#51f138"/>
                    </div>
                    <div className='flex items-center bg-white px-4 py-3 rounded-lg'>
                        <h1 className='flex-1 text-lg font-bold '>
                            Verify ID
                        </h1>
                        <CheckCircle color="#51f138"/>
                    </div>
                    <div className='flex items-center bg-white px-4 py-3 rounded-lg '>
                        <h1 className='flex-1 text-lg font-bold '>
                            Blue Badge
                        </h1>
                        <XCircle color="#ee2a2a"/>
                    </div>
                </div>
            </div>
           </div>
           <div></div>
        </div>
    )
}

export default ProfileCard