import React, { useState } from 'react'
import Navlogo from '../images/myteam 2.png'
import Menu from '../images/Menu.png'
import Menu2 from '../images/Menu2.png'
const Navbar = () => {
  return (
    <>
      <div className='flex justify-between max-w-[1110px] mx-auto lg:pt-[77px] sm:pt-[48px] max-sm:pt-[48px] px-5'>
      <div className='flex items-center gap-[80px]'>
       <div className='flex items-center justify-between'>
        <a href="#" className='hover:opacity-80'>
            <img src={Navlogo} alt="" className=' flex lg:w-[160px] sm:w-[100px] max-sm:w-[100px]'/>
          </a>
       </div>
        <nav className='lg:block max-sm:hidden'>
          <ul className='flex gap-10 text-white'>
            <li>
              <a href="#" className='hover:text-[#F67E7E]'>home</a>
            </li>
            <li>
              <a href="#" className='hover:text-[#F67E7E]'>about</a>
            </li>
          </ul>
        </nav>
      </div>
      <div  className='lg:block  max-sm:hidden text-white border-[2px] border-white rounded-[24px]  hover:bg-[#FFFFFF] hover:text-[#002529]'>
        <button className='w-[153px] h-[48px] bg-transparent '>contact us</button>
      </div>
    </div>
    </>
  )
}

export default Navbar