import React from 'react'
import "./DestinationStyles.css"
import DestinationData from './DestinationData'
import Mountain3 from "../assets/3.jpg"
import Mountain4 from "../assets/4.jpg"

function Destination() {
  return (
    <div className='destination'>
      <h1>Popular Destination</h1>
      <p>Tours give you opportunity to see a lot, within time frame</p>
      <DestinationData
      className="first-des"
        heading="Tall Volcano, Batangas"
        text="Taal is famous for its unique geography: a volcano on an island within a lake that lies inside a large volcanic caldera. If you need a short paragraph, essay, travel description, or facts for a school assignment about Taal Volcano, let me know and I can write it in the format you need."
     img1="https://plus.unsplash.com/premium_photo-1673240367277-e1d394465b56?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     img2="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     />
     <DestinationData
     className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text="Taal is famous for its unique geography: a volcano on an island within a lake that lies inside a large volcanic caldera. If you need a short paragraph, essay, travel description, or facts for a school assignment about Taal Volcano, let me know and I can write it in the format you need."
     img1={Mountain3}
     img2={Mountain4}
     />
    </div>
  )
}

export default Destination