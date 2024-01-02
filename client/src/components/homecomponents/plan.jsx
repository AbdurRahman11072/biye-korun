import React from 'react';

const Plan = ({plan,offer,taka}) => {
    console.log(plan);
    return (
        <div>
             <div className='group hover:bg-[#9908F5] w-[420px] my-2  mx-auto px-10 py-5 rounded-md
             border-[2px] border-gray-200 bg-white
             lg:w-[420px] lg:h-[700px] lg:mb-7'>
                    <h1 className='text-center font-inter text-2xl font-bold text-black group-hover:text-white'>{offer} Subscription</h1>
                    <p className='text-black group-hover:text-white text-xl font-inter font-extrabold mt-2 text-center'>BDT {taka} <span className='text-base font-normal text-black group-hover:text-white'> / per month</span></p>
                    <div className='h-[480px] mt-7 bg-[#fffcfc] group-hover:bg-white/30 border-[1px] border-gray-300 group-hover:border-white rounded-2xl'>
                        <div>
                        <h1 className='text-3xl text-center font-semibold text-black group-hover:text-white py-5 border-b-[1px] border-black/30 group-hover:border-white'>{offer}</h1>
                        </div>
                        <div className='px-10 py-2  '>
                       {
                        plan?.map(plan =>(
                            <p className='flex gap-5 mt-3 text-sm text-black group-hover:text-white items-center'>
                            <img className='w-4 h-4 visible   group-hover:hidden' src="/checkmark.png" alt="" />
                            <img className='w-4 h-4 hidden   group-hover:visible' src="/checkmark1.png" alt="" />
                            {plan.plan}
                            </p>
                        ))
                       }
                        </div>                        
                    </div>
                    <div className='mt-5'>
                            <button className=' w-full  h-[53px] rounded-xl bg-white font-bold border-[2px]  
                            border-[#a01ae3] group-hover:border-white ' > Subscribe Now</button>
                        </div>

                </div>
        </div>
    )
}

export default Plan