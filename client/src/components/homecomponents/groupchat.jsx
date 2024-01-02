import React from 'react'
import LearnMore from '../shared/learnmore'
import Title from '../shared/title'

const GroupChat = () => {
    return (
        <div className='my-20 md:mt-10 relative'>
            <Title title={"Everything In One Platform"} tdiraction={"text-center"} mxdiraction={"mx-auto"} ></Title>

            <div className='bg-gray-200 my-8 px-5 py-5 
            lg:flex lg:w-[900px] lg:mx-10 lg:p-8 lg:mt-32 lg:rounded-2xl 
            xl:flex xl:w-[900px] xl:mx-32 xl:p-8 xl:mt-32 xl:rounded-2xl '>
              <div className='lg:w-[45%] xl:w-[50%]'>
              <h1 className='text-3xl text-center text-black font-bold
              md:text-5xl
             lg:text-left lg:text-5xl '>Group Chat</h1>
                <p className='text-center text-black/60 my-3
                lg:text-md
                lg:text-left lg:text-md lg:my-8'>Group chat is a type of communication platform that allows members of a group to quickly and easily exchange information in real-time through instant messaging. We can add you to different groups such as (Doctor group, American citizen group, Russian group, Engineer group etc) if you want.</p>
                <div className='hidden lg:block'>
                <LearnMore text={"Learn More"} ></LearnMore>
                </div>
              </div>
              <div className='mt-10 lg:hidden'>
                <img className='w-full' src="/groupchat (1).png" alt="" />
            </div>
            <div className='block lg:hidden text-left'>
            <LearnMore text={"Learn More"} tdiraction={"text-center"}></LearnMore>
            </div>
            </div>
            <div className='mt-10 hidden lg:block lg:absolute lg:w-[500px] lg:right-10 lg:top-32
             xl:w-[600px] xl:top-24  xl:right-32 '>
                <img className='' src="/groupchat (1).png" alt="" />
            </div>
            
        </div>
    )
}

export default GroupChat