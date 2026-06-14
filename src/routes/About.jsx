import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'


function About() {
  return (
      <div>
           <Navbar/>
           <Hero
           cName="hero-mid"
           heroImg="https://images.unsplash.com/photo-1495430288918-03be19c7c485?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
           title="About"

      
           
           />
           <AboutUs/>
           <Footer/>
         </div>
  )
}

export default About