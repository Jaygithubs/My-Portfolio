import { motion } from 'framer-motion'
import React from 'react'

const services = () => {
  return (
    <>
     <div className="h-screen px-32 py-24 bg-slate-950 text-white">
        <h2 className="text-4xl font-semibold text-center text-white mb-12">
          My Services
        </h2>
      <motion.div className="first-row grid grid-cols-2"
      initial={{opacity:0,translateY:-50}}
      whileInView={{opacity:1,translateY:0}}
      transition={{duration:1}}
      >

        <div className="border-b p-5 m-2">
          <div className="number flex justify-between">
            <div className="text-2xl">01</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
            <div className="text-3xl font-mono py-3">Web Development</div>
            <div className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ipsam soluta reiciendis ipsa? Doloribus inventore odio illum harum doloremque quos!</div>
        </div>

        <div className="border-b p-5 m-2">
          <div className="number flex justify-between">
            <div className="text-2xl">02</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
            <div className="text-3xl font-mono py-3">App Development</div>
            <div className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ipsam soluta reiciendis ipsa? Doloribus inventore odio illum harum doloremque quos!</div>
        </div>

        <div className="border-b p-5 m-2">
          <div className="number flex justify-between">
            <div className="text-2xl">03</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          </div>
          <div className="text-3xl font-mono py-3">UI/UX Design</div>
            <div className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ipsam soluta reiciendis ipsa? Doloribus inventore odio illum harum doloremque quos!</div>
        </div>

        <div className="border-b p-5 m-2">
          <div className="number flex justify-between">
            <div className="text-2xl">04</div>
            <motion.svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </motion.svg>
          </div>
          <div className="text-3xl font-mono py-3">SEO</div>
            <div className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ipsam soluta reiciendis ipsa? Doloribus inventore odio illum harum doloremque quos!</div>
        </div>
        
      </motion.div>

     </div>
    </>
  )
}

export default services
