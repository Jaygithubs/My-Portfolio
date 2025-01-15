import React from 'react'

const home = () => {
  return (
    <>
      <div className="h-screen px-32 py-10 bg-slate-950 text-white grid grid-cols-2">
        <div className="banner-content my-auto">
            <div className='text-2xl font-semibold'>Hii there,</div>
            <div className="text-7xl tracking-wider">I'am Jay <br/>Sharma</div>
            <div className="text-2xl text-blue-800 font-semibold my-7"> Full Stack Web Developer</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt enim aperiam minus sapiente dolorum fuga ratione temporibus recusandae est hic?</div>
            <button className='text-1xl transition-background duration-500 hover:bg-transparent hover:border-solid border-2 border-blue-800 bg-blue-900 px-4 py-2 my-4 font-semibold'>Download CV</button>
        </div>
        <div className="banner-image">
            <img src="/jay-image.png" alt="jay-image" className='w-80 m-auto animation-' />
        </div>
      </div>
    </>
  )
}

export default home
