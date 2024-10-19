import React from 'react'
import { FaMobileScreen } from "react-icons/fa6";
import { MdFastfood } from "react-icons/md";
import { MdOutlineDeliveryDining } from "react-icons/md";



const Services = (props) => {
  return (
    <div style={{backgroundColor : props.mode ==='light'?'white':'black' }}>
    <div className='container py-12'>
        <div className='text-center'>
        <h1 className='text-4xl font-semibold' style={{color : props.mode ==='light'?'black':'white' }}>Services</h1>
      </div>

      <div className='flex flex-row justify-between gap-12 mt-12'>
        <div className='flex justify-center items-center gap-3'>
        <FaMobileScreen className='text-3xl' style={{color : props.mode ==='light'?'black':'white' }} />
        <p className='text-xl font-semibold' style={{color : props.mode ==='light'?'black':'white' }}>Online Order</p>
        </div>
        <div className='flex justify-center items-center gap-3'>
        <MdFastfood className='text-3xl' style={{color : props.mode ==='light'?'black':'white' }} />
        <p className='text-xl font-semibold'style={{color : props.mode ==='light'?'black':'white' }}>Fast Food</p>
        </div>
        <div className='flex justify-center items-center gap-3'>
        <MdOutlineDeliveryDining className='text-3xl' style={{color : props.mode ==='light'?'black':'white' }}/>
        <p className='text-xl font-semibold'style={{color : props.mode ==='light'?'black':'white' }}>Delivery</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Services
