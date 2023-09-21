import React from 'react'

const About = () => {
  return (
    <div className='max-w-[1110px] flex justify-between items-center pb-[120px] mx-auto mt-[130px] max-sm:flex-col px-5'>
        <h2 className='lg:mr-0 md:mr-3 text-[64px] font-bold'>About</h2>
        <div className='px-4 lg:max-w-[730px] max-md:max-w-[457px]'>
            <hr className='w-[50px] h-[4px] bg-[#F67E7E] border-none mb-[40px] lg:block  max-sm:hidden'/>
            <p className='lg:text-[18px] max-md:text-[15px] font-semibold text-justify'>We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.</p>
        </div>
    </div>
  )
}

export default About