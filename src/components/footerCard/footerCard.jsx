import React from 'react'

const FooterCard = () => {
  return (
    <div className='lg:max-w-[917px] mx-auto flex items-center justify-between py-[76px] max-sm:flex-col max-sm:gap-[24px] sm:max-w-[573px] px-5'>
        <h2 className='text-center lg:text-[48px] md:text-[32px] sm:text-[32px] max-sm:text-[32px] text-[#012F34] font-bold'>Ready to get started?</h2>
        <button className='w-[153px] h-[48px] bg-transparent font-bold text-[18px] text-[#012F34] border-[2px] border-[#012F34] rounded-[24px] hover:bg-[#012F34] hover:text-[#fff]'>contact us</button>
    </div>
  )
}

export default FooterCard