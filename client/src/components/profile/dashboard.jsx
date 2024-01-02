import React from 'react'

const Dashboard = () => {
    return (
        <div className='flex flex-wrap lg:mx-5 w-full '>
            <ProfileCard></ProfileCard>
            <MatchedBride></MatchedBride>
        </div>
    )
}

export default Dashboard