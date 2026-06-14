import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

import Footer from '../components/Footer'
import Trip from '../components/Trip'
function Service() {
  return (
    <div>
    <Navbar/>
           <Hero
           cName="hero-mid"
           heroImg="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
           title="Service"
           
           />
           <Trip/>
           <Footer/>
    </div>
  )
}

export default Service