import { motion } from 'framer-motion'
import React from 'react'


const Footer = () => {
  return (
    <>
      <footer className='bg-slate-700 text-white px-10 py-8' style={{borderTop:"1px solid white"}}> 
    <motion.div
      initial={{opacity:0,translateY:50}}
      whileInView={{opacity:1,translateY:0}}
      transition={{duration:1}}
    >
        <div className="grid grid-cols-2">
            <div className="year">
                &#169;{new Date().getFullYear()} All rights reserved.
            </div>
            <div className="social-media-links text-end">
                <div className="flex justify-end space-x-5">
                    <a href="https://www.instagram.com/jay.websitedeveloper/" target="_blank" rel="noopener noreferrer">
                        <div>Instagram</div>
                    </a>
                    <a href="https://github.com/Jaygithubs" target="_blank" rel="noopener noreferrer">
                        <div>Github</div>
                    </a>
                    <a href="https://www.linkedin.com/in/jay-sharma-647687272/" target="_blank" rel="noopener noreferrer">
                        <div>Linkedin</div>
                    </a>
                </div>
            </div>
        </div>
    </motion.div>
      </footer>

    </>
  )
}

export default Footer
