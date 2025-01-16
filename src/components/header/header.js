import React from 'react'

const header = () => {
  return (
      <div className='bg-transparent fixed top-0 left-0 right-0 text-white h-fit grid grid-cols-2'>
        <div className="logo ml-28 p-2">
            <div className="name text-3xl">Jay sharma</div>
        </div>
        <div className="links m-auto">
            <ul className="space-x-5 flex ">
                <li><a href="#home">Home</a></li>
                <li><a href="#about_me">About me</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
        </div>

      </div>
  )
}

export default header
