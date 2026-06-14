import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Destination from '../components/Destination'
import Trip from '../components/Trip'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero
      cName="hero"
      heroImg="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      title="Your Journey Your Story"
      text="Choose Your Favourite Destination."
      buttonText="Travel Plan"
      btnClass="show"
      url="/"
      />
      <Destination/>
      <Trip/>
      <Footer/>

    </div>
  )
}

export default Home