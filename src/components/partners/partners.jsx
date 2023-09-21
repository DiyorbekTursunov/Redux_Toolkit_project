import React from 'react'
import PartnersIcon from '../images/the-verge@2x (1).png'
import PartnersIcon2 from '../images/the-jakarta-post@2x.png'
import PartnersIcon3 from '../images/the-guardian (1).png'
import PartnersIcon4 from '../images/techradar@2x.png'
import PartnersIcon5 from '../images/gadgets-now (1).png'
const Partners = () => {
  return (
    <div className='max-w-[1110px] mx-auto pt-[140px] pb-[151px] px-5'>
        <h2 className='lg:text-[48px] md:text-[32px] sm:text-[32px] max-sm:text-[32px] font-bold text-center'>Some of our clients</h2>
        <div className='flex lg:flex-row  max-sm:flex-col items-center justify-between lg:gap-[80px] sm:gap-[55px] max-sm:gap-[55px] mt-[70px]'>
            <a href="#">
                <img src={PartnersIcon} alt="" className='lg:w-[165px] sm:w-[147px] max-sm:w-[147px]' />
            </a>
            <a href="#">
                <img src={PartnersIcon2} alt=""  className='lg:w-[165px] sm:w-[147px] max-sm:w-[147px]'/>
            </a>
            <a href="#">
                <img src={PartnersIcon3} alt="" className='lg:w-[165px] sm:w-[147px] max-sm:w-[147px]' />
            </a>
            <a href="#">
                <img src={PartnersIcon4} alt="" className='lg:w-[165px] sm:w-[147px] max-sm:w-[147px]' />
            </a>
            <a href="#">
                <img src={PartnersIcon5} alt="" className='lg:w-[135px] sm:w-[117px] max-sm:w-[117px]' />
            </a>
        </div>
    </div>
  )
}

export default Partners