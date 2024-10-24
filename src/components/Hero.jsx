import React from 'react'
import HeroImage from "../assets/1.png"

const Hero = (props) => {
  return (
    <div style={{backgroundColor : props.mode ==='dark'?'black':'white' , color : props.mode ==='dark'?'white':'black'}}>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px]">
        {/* text section */} 
        <div className='flex flex-col justify-center gap-5 text-center md:text-left pt-24 md:p-0 pb-10'>
            <h1 className='text-3xl font-semibold' style={{color : props.mode ==='light'?'black':'white' }}>Make Your Day Good With Rutaush</h1>
            <p className='' style={{color : props.mode ==='light'?'black':'white' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam beatae voluptatum perferendis modi corrupti veniam aut ex dicta quam deleniti labore, fugiat architecto, nemo animi quae sequi quidem exercitationem dolorem.</p>
        <div className='flex gap-4 items-center md:justify-start justify-center'>
            <button className='primary-btn hover:scale-105 duration-200'> Order Now </button>
            <button className='secondary-btn hover:scale-105 duration-200'>About Us</button>
        </div>
        </div>
        {/* image section */}
        <div className='flex flex-col justify-center'>
            <img src={HeroImage} alt=""  className='img-shadow animate-spin-slow'/>
        </div>
      </div>
    </div>
  )
}

export default Hero
