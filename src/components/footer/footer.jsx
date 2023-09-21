import Navlogo from '../images/myteam 2.png'
const Footer = () => {
  return (
    <div className='max-w-[1110px] py-[48px] mx-auto flex lg:flex-row  max-sm:flex-col items-center justify-between px-5'>
        <div className='flex lg:flex-row md:flex-col lg:gap-[125px] md:gap-[32px] sm:gap-[24px]  sm:flex-col max-sm:flex-col max-sm:items-center'>
            <div>
                <a href="#" className='hover:opacity-80 flex max-sm:justify-center'>
                        <img src={Navlogo} alt="" className=' flex lg:w-[160px] sm:w-[100px] max-sm:w-[100px]'/>
                </a>
                <nav className='mt-[25px]'>
                    <ul className='flex gap-10 text-white'>
                        <li>
                            <a href="#" className='hover:text-[#F67E7E] '>home</a>
                        </li>
                        <li>
                            <a href="#" className='hover:text-[#F67E7E]'>about</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='flex flex-col max-sm:items-center gap-1 opacity-60 max-sm:mt-[24px]'>
                    <p>987  Hillcrest</p>
                    <p> LaneIrvine, CA</p>
                    <p>California 92714</p>
                <span>
                    <span>Call Us :</span>
                    <a href="#" target='_blank'> 949-833-7432</a>
                </span>
            </div>
        </div>
        <div className='flex items-end flex-col max-sm:items-center max-sm:mt-[40px]'>
            <div className='flex gap-3 mb-[51px] max-sm:mb-[16px]'>
                <a href="#" target='_blank'>
                    <i className="fa-brands fa-square-facebook text-white hover:text-[#F67E7E] text-[28px]" ></i>
                </a>
                <a href="#" target='_blank'>
                    <i className="fa-brands fa-pinterest text-white hover:text-[#F67E7E] text-[28px]"></i>
                </a>
                <a href="#" target='_blank'>
                    <i className="fa-brands fa-twitter text-white hover:text-[#F67E7E] text-[28px]"></i>
                </a>
            </div>
            <p className=' opacity-60'>Copyright 2020. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer