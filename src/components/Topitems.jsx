import React from 'react'
import Image1 from "../assets/3.png"
import Image2 from "../assets/4.png"
import Image3 from "../assets/5.png"

const FoodData = [
  {
    image: Image1,
    rating: "⭐⭐⭐⭐⭐",
    price: "500PKR",
    name: "Food Name",
    desc : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, provident."
  },
  {
    image: Image2,
    rating: "⭐⭐⭐⭐⭐",
    price: "500PKR",
    name: "Food Name",
    desc : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, provident."
  },
  {
    image: Image3,
    rating: "⭐⭐⭐⭐⭐",
    price: "500PKR",
    name: "Food Name",
    desc : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, provident."
  }

]

const Toplist = () => {
  return (
    <div className='container py-14'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-semibold'>Top Items</h1>
        <p>Our Top Item</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {FoodData.map((items, index) => (
        <div key={index} className='bg-white/50 p-3 rounded-3xl hover:scale-110 transition duration-300'>
          <img src={items.image} alt="" className='w-40 h-40 object-cover rounded-full img-shadow' />
          <div className='space-y-2'>
          <p className='text-red-500'>{items.rating}</p>
          <p className='text-lg font-semibold'>{items.name}</p>
          <p >{items.desc}</p>
          <p className='text-lg font-semibold'>{items.price}</p>
        </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Toplist
