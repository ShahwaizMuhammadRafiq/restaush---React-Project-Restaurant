import React from 'react'
import HeroImage from "../assets/1.png"

const Hero = () => {
  return (
    <div>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px]">
        {/* text section */} 
        <div className='flex flex-col justify-center gap-5 text-center md:text-left pt-24 md:p-0 pb-10'>
            <h1 className='text-3xl font-semibold'>Make Your Day Good With Rutaush</h1>
            <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam beatae voluptatum perferendis modi corrupti veniam aut ex dicta quam deleniti labore, fugiat architecto, nemo animi quae sequi quidem exercitationem dolorem.</p>
        <div className='flex gap-4 items-center md:justify-start justify-center'>
            <button className='primary-btn'> Order Now </button>
            <button className='secondary-btn'>About Us</button>
        </div>
        </div>
        {/* image section */}
        <div className='flex flex-col justify-center'>
            <img src={HeroImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
