import { Route, Routes } from "react-router-dom"
import About from "./components/about/about"
import Footer from "./components/footer/footer"
import FooterCard from "./components/footerCard/footerCard"
import MainCard from "./components/mainCard/mainCard"
import Navbar from "./components/navbar/navbar"
import Partners from "./components/partners/partners"
import Home from "./pages/home"
import CardFullDetail from "./pages/cardFullDetail"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path={`/item/:slug`} element={<CardFullDetail/>}/>
      </Routes>
    </>
  )
}

export default App
