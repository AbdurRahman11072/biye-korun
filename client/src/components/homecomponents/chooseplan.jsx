import React, { useEffect, useState } from 'react'
import Title from '../shared/title'
import Plan from './plan'

const ChoosePlane = () => {
    const [plan,setplan] = useState()
    useEffect(()=>{
        fetch("/plan.json")
        .then(res =>res.json())
        .then(data => setplan(data))
    },[])
    // console.log(plan);
    return (
        <div>
            <Title title={"Choose Your Right Plan"} tdiraction={"text-center"} mxdiraction={"mx-auto"}></Title>
            <div className='my-10 flex flex-wrap gap-5 justify-center  '>
               {
                plan?.map((plan) =>(
                    <Plan key={plan.id} plan={plan.plan} offer={plan.offer} taka={plan.taka}></Plan>
                ))
               }
            </div>
        </div>
    )
}

export default ChoosePlane