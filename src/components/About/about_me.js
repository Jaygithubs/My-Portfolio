import React, { useState } from 'react'
import Experience from '../../components/experience'
import Education from '../../components/education'
import Skills from '../../components/skills'
import Aboutme from '../../components/aboutme'

const About_me = () => {
  
  const [activesec,Setactivesec]=useState("experience");

  const active_section = (section) => {
    Setactivesec(section);
  }

  return (
    <>
      <div className="px-32 py-24 h-screen bg-slate-950 text-white">

        <div className="main grid grid-cols-12">
          <div className="left-side border p-5 col-span-4">
            <div className="text-4xl font-mono">Why hire me?</div>
            <div className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aperiam.</div>
            <div><button onClick={() => active_section('experience')} className='font-mono bg-slate-800 px-3 rounded-sm shadow-md border border-slate-800 hover:bg-transparent transition-background duration-500 my-2 w-full'>Experience</button></div>
            <div><button onClick={() => active_section('education')} className='font-mono bg-slate-800 px-3 rounded-sm shadow-md border border-slate-800 hover:bg-transparent transition-background duration-500 my-2 w-full'>Education</button></div>
            <div><button onClick={() => active_section('skills')} className='font-mono bg-slate-800 px-3 rounded-sm shadow-md border border-slate-800 hover:bg-transparent transition-background duration-500 my-2 w-full'>Skills</button></div>
            <div><button onClick={() => active_section('about-me')} className='font-mono bg-slate-800 px-3 rounded-sm shadow-md border border-slate-800 hover:bg-transparent transition-background duration-500 my-2 w-full'>About me</button></div>
          </div>
          <div className="right-side border p-5 col-span-8">
            {activesec === 'experience' ? <Experience/> : ""}  
            {activesec === 'education' ? <Education/> : ""}  
            {activesec === 'skills' ? <Skills/> : ""}  
            {activesec === 'about-me' ? <Aboutme/> : ""}  

          </div>
        </div>

      </div>
    </>
  )
}

export default About_me
