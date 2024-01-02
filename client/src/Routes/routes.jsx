import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from '../Layout/dashboardLayout'
import ProfileLayout from '../Layout/profilelayout'
import SearchPage from '../Page/Search'
import Chat from '../Page/chat'
import ErrorPage from '../Page/error'
import Home from '../Page/home'
import Profile from '../Page/profile'
import Dashboard from '../components/profile/dashboard'

const Routes = createBrowserRouter([
    {
        path:"/",
        element:<DashboardLayout></DashboardLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
           
        ]
    },
    {
        path:"/profile",
        element:<ProfileLayout></ProfileLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/profile",
                element:<Profile></Profile>
            },
            {
                path:"search",
                element:<SearchPage></SearchPage>
            },
            {
                path:"chat",
                element:<Chat></Chat>
            },
            {
                path:"dashboard",
                element:<Dashboard></Dashboard>
            }
        ]
        
      }
])

export default Routes