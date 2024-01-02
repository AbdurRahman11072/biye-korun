
import React from 'react'
import MatchedBride from '../components/profile/matchedbrid'
import ProfileCard from '../components/profile/profilecard'

const Profile = () => {
    return (
        <div className='flex flex-wrap lg:mx-5 w-full '>
            <ProfileCard></ProfileCard>
            <MatchedBride></MatchedBride>
        </div>
    )
}

export default Profile