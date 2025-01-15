import React, { useRef } from 'react'
import Experience from '../../components/experience'
import Education from '../../components/education'
import Skills from '../../components/skills'
import Aboutme from '../../components/aboutme'

const About_me = () => {
  
  const educationRef = useRef(null);

  const show_element = (e) =>{
    // console.log(e.target.innerText);
    console.log(educationRef.current)
  
  }

  return (
    <>
      <div className="px-32 py-24 h-screen bg-slate-950 text-white">

        <div className="main flex">
          <div className="left-side border p-5 flex-2">
            <div className="text-4xl font-mono">Why hire me?</div>
            <div className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aperiam.</div>
            <div><button onClick={show_element} className='font-mono bg-slate-800 px-3 rounded-sm shadow-md border border-slate-800 hover:bg-transparent transition-background duration-500 my-2 w-full'>Experience</button></div>
            <div><button className='font-mono bg-slate-800 px-3 rounded-sm shadow-md border border-slate-800 hover:bg-transparent transition-background duration-500 my-2 w-full'>Education</button></div>
            <div><button className='font-mono bg-slate-800 px-3 rounded-sm shadow-md border border-slate-800 hover:bg-transparent transition-background duration-500 my-2 w-full'>Skills</button></div>
            <div><button className='font-mono bg-slate-800 px-3 rounded-sm shadow-md border border-slate-800 hover:bg-transparent transition-background duration-500 my-2 w-full'>About me</button></div>
          </div>
          <div className="right-side border p-5 flex-2">
            <Experience mode="visible"/>
            <div ref={educationRef}>
              <Education mode="hidden"/>
            </div>
            <Skills mode="hidden"/>
            <Aboutme mode="hidden"/>
          </div>
        </div>

      </div>
    </>
  )
}

export default About_me
