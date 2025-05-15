import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Projects from '../components/Projects'
import OurTeam from '../components/OurTeam'
import ChatIcon from '../components/ChatIcon'
import Footer from '../components/Footer'
export const Home = () => {
  return (
    <>
      <Header />
      <Hero/>
       <Services/>
       <Projects />
       <OurTeam />
       <ChatIcon />
       <Footer/>



    </>

    
  )
}

export default Home