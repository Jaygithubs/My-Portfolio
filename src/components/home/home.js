import { motion } from 'framer-motion'
import React from 'react'


const home = () => {
  return (
    <>
      <div className="h-screen px-32 py-32 bg-slate-950 text-white text-center font-bold">
        <div className="image w-52 h-52 mx-auto border-2 rounded-full">
          <img src="/jay-image.png" alt="jay-image" className='w-full h-full object-scale-down rounded-full'/>
        </div>
        <div className="my-7 text-3xl">Building digital products,brands,and experience.</div>
        <div className='text-2xl'>Full stack web developer</div>
        <button className='my-6 bg-slate-800 px-5 py-1 border-slate-300'>Download CV</button>
      </div>
    </>
  )
}

export default home
