import React from 'react'

const Seemore = ({hidden, text}) => {
    return (
        <div className='w-full text-center mt-5'>
        <button  
          className={`px-4 py-3 text-white  font-semibold rounded-full  bg-[#F42A41] cursor-pointer
          md:${hidden} `}>{text} </button>
        </div>
    )
}

export default Seemore