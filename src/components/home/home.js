import React from 'react'

const home = () => {
  return (
    <>
      <div className="h-screen p-40 bg-slate-950 text-white grid grid-cols-3">
        <div className="banner-content my-auto">
            <div className='text-2xl font-semibold'>Hii there,</div>
            <div className="text-7xl tracking-wider">I'am Jay <br/>Sharma</div>
            <div className="text-2xl text-blue-800 font-semibold my-7"> Full Stack Web Developer</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt enim aperiam minus sapiente dolorum fuga ratione temporibus recusandae est hic?</div>
            <button className='text-1xl transition-background duration-500 hover:bg-transparent hover:border-solid border-2 border-blue-800 bg-blue-900 px-4 py-2 my-4 font-semibold'>Download CV</button>
        </div>
        <div className="banner-image">
            <img src="/jay-image.png" alt="jay-image" className='w-60 m-auto animation-' />
        </div>
        <div className="counts">
            <div className="my-10">
                <div className="text-3xl text-center">3 + </div>
                <div className='text-center'>Years experience</div>
            </div>
            <div className="my-10">
                <div className="text-3xl text-center">50 + </div>
                <div className='text-center'>Completed projects</div>
            </div>
            <div className="my-10">
                <div className="text-3xl text-center">35 + </div>
                <div className='text-center'>Satisfied clients</div>
            </div>
        </div>
      </div>
    </>
  )
}

export default home
