import React from 'react'

const Navbar = () => {
  return (
    <div className='py-4'>
      <div className="container flex justify-between items-center mx-auto">
        {/* Logo section */}
        <p className='text-lg font-semibold cursor-pointer'>Res <span className='text-red-500'>taush</span></p>

        {/* Menu Section */}
        <ul className="flex gap-8 font-semibold">
          <li className='hover:border-b-2 hover:border-red-500 uppercase cursor-pointer '>Home</li>
          <li className='hover:border-b-2 hover:border-red-500 uppercase cursor-pointer'>Menu</li>
          <li className='hover:border-b-2 hover:border-red-500 uppercase cursor-pointer'>About</li>
        </ul>
      </div>
        {/*Login Section */}
        <div>

        </div>

    </div>
  )
}

export default Navbar
