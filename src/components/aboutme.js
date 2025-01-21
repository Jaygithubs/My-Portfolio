import { motion } from 'framer-motion'
import React from 'react'


const aboutme = (props) => {
  return (
    <motion.div
    initial={{opacity:0,translateY:-50}}
    whileInView={{opacity:1,translateY:0}}
    transition={{duration:1}}
    >
      <div className="text-3xl font-mono">About me</div>
      <div>
          I am a passionate Full Stack Web Developer with experience in building and maintaining websites. I
          am currently pursuing a Bachelor’s degree in Computer Application (BCA) from Mahatma Gandhi
          Kashi Vidyapith University while working in a corporate IT company. I specialize in WordPress
          website development, custom plugin creation, theme customization, and API integration using
          JavaScript. I am also skilled in modern JavaScript frameworks like React.js and Node.js. Currently, I
          am developing e-commerce and portfolio websites to further enhance my skills and gain practical
          experience.
          Outside of coding, I enjoy bike riding and exploring new places. My dream is to become a
          successful entrepreneur who creates valuable solutions that help people and contribute to the
          progress of my country
      </div>
    </motion.div>
  )
}

export default aboutme
