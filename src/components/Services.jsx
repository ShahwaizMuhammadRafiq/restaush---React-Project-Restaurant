import React from 'react'
import { FaMobileScreen } from "react-icons/fa6";
import { MdFastfood } from "react-icons/md";
import { MdOutlineDeliveryDining } from "react-icons/md";



const Services = () => {
  return (
    <div className='container py-12'>
        <div className='text-center'>
        <h1 className='text-4xl font-semibold'>Services</h1>
      </div>

      <div className='flex flex-row justify-between gap-12 mt-12'>
        <div className='flex justify-center items-center gap-3'>
        <FaMobileScreen className='text-3xl' />
        <p className='text-xl font-semibold'>Online Order</p>
        </div>
        <div className='flex justify-center items-center gap-3'>
        <MdFastfood className='text-3xl'/>
        <p className='text-xl font-semibold'>Fast Food</p>
        </div>
        <div className='flex justify-center items-center gap-3'>
        <MdOutlineDeliveryDining className='text-3xl' />
        <p className='text-xl font-semibold'>Delivery</p>
        </div>
      </div>
    </div>
  )
}

export default Services
