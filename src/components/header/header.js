import { motion } from 'framer-motion'
import React, { useRef } from 'react'

const Header = () => {
  
  const header_main = useRef()

  document.onscroll = () => {
    if(window.scrollY > 100)
    {
      header_main.current.classList.remove("bg-transparent");
      header_main.current.classList.add("bg-slate-800");
    }
    else
    {
      header_main.current.classList.add("bg-transparent");

    }
  }

  return (
      <div ref={header_main} className='z-50 py-2 bg-transparent fixed top-0 left-0 right-0 text-white h-fit grid grid-cols-2 transition ease-in-out delay-75'>
        <div className="logo ml-28 p-2">
            <div className="name text-3xl"
            >Jay sharma</div>
        </div>
        <div className="links m-auto">
            <ul className="space-x-5 flex ">
                <motion.li className='hover:text-slate-600 font-bold hover:rotate-180 transition-all ease-linear px-5' 
                whileHover={{scale:1.1}}
                ><a href="#home">Home</a></motion.li>
                <motion.li className='hover:text-slate-600 font-bold hover:rotate-180 transition-all ease-linear px-5'
                whileHover={{scale:1.1}}
                ><a href="#about_me">About me</a></motion.li>
                <motion.li className='hover:text-slate-600 font-bold hover:rotate-180 transition-all ease-linear px-5'
                whileHover={{scale:1.1}}
                ><a href="#services">Services</a></motion.li>
                <motion.li className='hover:text-slate-600 font-bold hover:rotate-180 transition-all ease-linear px-5'
                whileHover={{scale:1.1}}
                ><a href="#projects">Projects</a></motion.li>
            </ul>
        </div>

      </div>
  )
}

export default Header
