import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'

import ChatIcon from '../components/ChatIcon'
import Footer from '../components/Footer'
export const Home = () => {
  return (
    <>
      <Header />
      <Hero/>
      <About/>
       <Services/>
       <Projects />
     
       <ChatIcon />
       <Footer/>



    </>

    
  )
}

export default Home
