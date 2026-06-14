import React from 'react'
import "./TripStyles.css"
import TripData from "./TripData"
import Trip1 from "../assets/5.jpg"
import Trip2 from "../assets/8.jpg"
import Trip3 from "../assets/6.jpg"

function Trip() {
  return (
    <div className='trip'>
      <h1>Recent Trips</h1>
      <p>You can discove unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
        image={Trip1}
        heading="Trip in Indonesia"
        text="From Bali's stunning beaches to Jakarta's bustling streets, Indonesia offers the perfect blend of natural beauty, culture, and adventure for travelers of all kinds."
        />

         <TripData
        image={Trip2}
        heading="Trip in Malaysia"
        text="Discover the charm of Malaysia, where modern cities meet lush rainforests and pristine beaches. From the iconic Petronas Towers to the cultural richness of Penang, every journey is filled with unforgettable experiences."
        />

         <TripData
        image={Trip3}
        heading="Trip in France"
        text="Experience the elegance of France, home to world-famous landmarks, charming villages, and exquisite cuisine. From the romantic streets of Paris to the breathtaking French countryside, every moment is a story worth remembering."
        />
      </div>
    </div>
  )
}

export default Trip