import React from 'react'
import News from './Components/News'
import Quiz from './Components/Quiz'
import Team from './Components/Team'
import Navbar from './Components/NavBar'
import HeroSection from './Components/Hero'
import CapSunSection from './Components/CapSun'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="bg-[#111216] h-full w-full relative">
      <Navbar />
      <HeroSection/>
      <CapSunSection/>
      <News/>
      <Quiz/>
      <Team/>
      <Footer/>
    </div>
  )
}

export default App