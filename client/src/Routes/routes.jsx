import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from '../Layout/dashboardLayout'
import MainLayout from '../Layout/mainlayout'
import ProfileLayout from '../Layout/profilelayout'
import SearchPage from '../Page/Search'
import Chat from '../Page/chat'
import ErrorPage from '../Page/error'
import Home from '../Page/home'
import Profile from '../Page/profile'
import Dashboard from '../components/profile/dashboard'
import Message from '../components/profile/massage'
import Post from '../components/profile/post'
import Request from '../components/profile/request'

const Routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
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
                element:<DashboardLayout></DashboardLayout>,
                children:[
                    {
                        path:"/profile/dashboard",
                        element:<Dashboard></Dashboard>
                    },
                    {
                        path:"/profile/dashboard/request",
                        element:<Request></Request>
                    },
                    {
                        path:"/profile/dashboard/post",
                        element:<Post></Post>
                    },
                    {
                        path:"/profile/dashboard/message",
                        element:<Message></Message>
                    }
                ]
              
                
            }
        ]
        
      }
])

export default Routes