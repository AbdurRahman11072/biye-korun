import React from 'react'

const Title = ({title, tdiraction ,mxdiraction}) => {
    return (
        <div>
            <h1 className={`text-4xl text-black font-bold ${tdiraction}`}>{title}</h1>
            <div className={`w-52 h-1 bg-gray-500 ${mxdiraction} mt-5`}></div>
        </div>
    )
}

export default Title