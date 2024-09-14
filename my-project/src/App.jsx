import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import HeroImg from "./assets/hero.jpg"
import Explore from './components/Explore';
import Journal from './components/Journal';
import Footer from './components/Footer';


const bgImage = {
  backgroundImage: `url(${HeroImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  backgroundSize: "cover",
  position: "relative",
};
const App = () => {
  return (
    <div className="overflow-x-hidden bg-brandDark text-white">
      <div style={bgImage}>
        <NavBar />
        <Hero />
      </div>
      <Explore/>
      <Journal/>
      <Footer/>
    </div>
  )
}

export default App