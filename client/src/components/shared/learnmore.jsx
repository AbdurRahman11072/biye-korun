import React from 'react'

const LearnMore = ({hidden, text, tdiraction}) => {
    return (
        <div className={`w-full ${tdiraction} mt-5`}>
        <button  
          className={`w-40 p-2 h-12 text-white font-mono font-semibold rounded-full  bg-[#F42A41] cursor-pointer text-lg
          md:${hidden}  `}>{text} </button>
        </div>
    )
}

export default LearnMore