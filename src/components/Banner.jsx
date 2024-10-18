import React from 'react'
import BannerImg from '../assets/2.png'

const Banner = () => {
  return (
    <>
    <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className='flex justify-center items-center'>
                <img src={BannerImg} alt="" />
            </div>
            <div className='flex flex-col justify-center'>
                <h1 className="text-4xl font-bold">Delicious Food In Town</h1>
                <p className='font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit laboriosam ea inventore quod unde maxime modi harum magni! Expedita consectetur a mollitia totam, soluta debitis aliquid modi doloremque suscipit pariatur?</p>
            </div>

        </div>
    </div>
      
    </>
  )
}

export default Banner
