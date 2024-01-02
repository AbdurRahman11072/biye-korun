import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/navbar'
import Menu from '../components/profile/menu'

const ProfileLayout = () => {
    return (
        <div className='bg-white'>
             <div className='bg-white shadow-md'>
            <Navbar></Navbar>
            </div>
            <Menu></Menu>
            <Outlet></Outlet>
        </div>
    )
}

export default ProfileLayout