import { motion } from 'framer-motion'
import React from 'react'


const home = () => {
  return (
    <>
      <div className="h-screen px-32 py-10 bg-slate-950 text-white grid grid-cols-2">
        <div className="banner-content my-auto">
            <motion.div className='text-2xl font-semibold'
            initial={{opacity:0,translateY:-50}}
            whileInView={{opacity:1,translateY:0}}
            transition={{duration:1,delay:0.2}}
            >Hii there,</motion.div>
            <motion.div className="text-7xl tracking-wider"
            initial={{opacity:0,translateY:-50}}
            whileInView={{opacity:1,translateY:0}}
            transition={{duration:1,delay:0.4}}
            >I'am Jay <br/>Sharma</motion.div>
            <motion.div className="text-2xl text-blue-800 font-semibold my-7"
            initial={{opacity:0,translateY:-50}}
            whileInView={{opacity:1,translateY:0}}
            transition={{duration:1,delay:0.6}}
            > Full Stack Web Developer</motion.div>
            <motion.div
            initial={{opacity:0,translateY:-50}}
            whileInView={{opacity:1,translateY:0}}
            transition={{duration:1,delay:0.8}}
            >I am a passionate Full Stack Web Developer with experience in building and maintaining websites.</motion.div>
            <a href="/Jay's Resume.pdf" download="/Jay's Resume.pdf">
              <motion.button className='text-1xl transition-background duration-500 hover:bg-transparent hover:border-solid border-2 border-blue-800 bg-blue-900 px-4 py-2 my-4 font-semibold'
              whileTap={{scale:0.9}}
              >Download CV</motion.button>
            </a>
        </div>
        <motion.div className="banner-image"
        // animate={{scale:1.1}}
        // transition={{ease:"linear",duration:2,repeat:Infinity}}
        >
            <img src="/jay-image.png" alt="jay-image" className='w-80 m-auto animation-' />
        </motion.div>
      </div>
    </>
  )
}

export default home
