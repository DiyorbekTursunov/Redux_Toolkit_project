import React from 'react'
import Navbar from '../components/navbar/navbar'
import About from '../components/about/about'
import MainCard from '../components/mainCard/mainCard'
import Partners from '../components/partners/partners'
import FooterCard from '../components/footerCard/footerCard'
import Footer from '../components/footer/footer'

const Home = () => {
    return (
        <>
            <div className="w-full bg-[#014E56]">
                <Navbar />
                <About />
            </div>
            <div className="w-full bg-[#004047]">
                <MainCard />
            </div>
            <div className="w-full bg-[#012F34]">
                <Partners />
            </div>
            <div className="w-full bg-[#F67E7E]">
                <FooterCard />
            </div>
            <div className="w-full bg-[#002529]">
                <Footer />
            </div>
        </>
    )
}

export default Home