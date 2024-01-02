import React from 'react'
import Banner from '../components/homecomponents/banner'
import ChoosePlane from '../components/homecomponents/chooseplan'
import GroupChat from '../components/homecomponents/groupchat'
import JourneyWithUs from '../components/homecomponents/journeywithus'
import Ktf from '../components/homecomponents/know the founder'
import MatchBride from '../components/homecomponents/matchbride'
import SecureInfo from '../components/homecomponents/secureinfo'
import Story from '../components/homecomponents/story'
import TotalUser from '../components/homecomponents/totaluser'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <TotalUser></TotalUser>
           <div className='mt-10 lg:mt-32 font-inter'>
           <Story></Story> 
            </div>          
                    
            <Ktf></Ktf>
            <div className='mt-10 lg:mt-32 font-inter'>
            <MatchBride></MatchBride>
            </div>
            <JourneyWithUs></JourneyWithUs>
            <SecureInfo></SecureInfo>
            <div className='mt-10 lg:mt-24 font-inter'>
            <GroupChat></GroupChat> 
            </div>         
            <div className='mt-10 lg:mt-60 font-inter'>
           <ChoosePlane></ChoosePlane>
           </div>
           
        </div>
    )
}

export default Home