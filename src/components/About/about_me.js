import React, { useState } from 'react'
import Experience from '../../components/experience'
import Education from '../../components/education'
import Skills from '../../components/skills'
import Aboutme from '../../components/aboutme'
import { motion } from 'framer-motion'

const About_me = () => {
  
  const [activesec,Setactivesec]=useState("experience");

  const active_section = (section) => {
    Setactivesec(section);
  }

  return (
    <>
      <div className="px-32 py-24 h-screen bg-slate-950 text-white">

        <motion.div className="main grid grid-cols-12"
        initial={{opacity:0,translateY:-50}}
        whileInView={{opacity:1,translateY:0}}
        transition={{duration:1}}
        >
          <div className="left-side border p-5 col-span-4">
            <div className="text-4xl font-mono">Why hire me?</div>
            <div className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aperiam.</div>
            <div><motion.button
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
            transition={{type:"spring",stiffness:400,damping:10}}
            onClick={() => active_section('experience')} className='font-mono bg-slate-800 px-3 rounded-sm shadow-md border border-slate-800 hover:bg-transparent transition-background duration-500 my-2 w-full'>Experience</motion.button></div>
            <div><motion.button
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
            transition={{type:"spring",stiffness:400,damping:10}}
            onClick={() => active_section('education')} className='font-mono bg-slate-800 px-3 rounded-sm shadow-md border border-slate-800 hover:bg-transparent transition-background duration-500 my-2 w-full'>Education</motion.button></div>
            <div><motion.button
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
            transition={{type:"spring",stiffness:400,damping:10}}
            onClick={() => active_section('skills')} className='font-mono bg-slate-800 px-3 rounded-sm shadow-md border border-slate-800 hover:bg-transparent transition-background duration-500 my-2 w-full'>Skills</motion.button></div>
            <div><motion.button
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
            transition={{type:"spring",stiffness:400,damping:10}}
            onClick={() => active_section('about-me')} className='font-mono bg-slate-800 px-3 rounded-sm shadow-md border border-slate-800 hover:bg-transparent transition-background duration-500 my-2 w-full'>About me</motion.button></div>
          </div>
          <div className="right-side border p-5 col-span-8">
            {activesec === 'experience' ? <Experience/> : ""}  
            {activesec === 'education' ? <Education/> : ""}  
            {activesec === 'skills' ? <Skills/> : ""}  
            {activesec === 'about-me' ? <Aboutme/> : ""}  

          </div>
        </motion.div>

      </div>
    </>
  )
}

export default About_me
