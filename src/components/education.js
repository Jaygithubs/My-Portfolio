import { motion } from 'framer-motion'
import React from 'react'

const education = (props) => {
  return (
    <motion.div
    initial={{opacity:0,translateY:-50}}
    whileInView={{opacity:1,translateY:0}}
    transition={{duration:1}}
    >
      <div className="text-3xl font-mono">Education</div>
      <div className="flex justify-between my-2 uppercase">
        <div>Bachelor of Computer Application (BCA)<div className='capitalize text-sm'>Mahatma Gandhi Kashi Vidyapith University</div>
        </div>
        <div>Sep 2023 - Oct 2025 (Expected Graduation)</div>
      </div>
      <div>
        <ul className='list-disc px-5'>
            <li className=''>Currently pursuing a Bachelor's degree in Computer Application (BCA) while working fulltime as a Full Stack Web Developer.</li>
            <li>Focused on gaining knowledge in software development, databases, programming, and web
            technologies in parallel with professional experience.</li>
        </ul>
      </div>
    </motion.div>
  )
}

export default education
