import React from 'react'
import Link from 'gatsby-link'
import truckImg from '../assets/gili-truck.jpg';

const IndexPage = () => (
  <div>
    <h1>Hi Fuckers, my name is Gili</h1>
    <p>I love cars and blond hoes.</p>
    <div className="truck-wrapper" style={{ textAlign: "center" }}>
      <img src={truckImg} alt="truck" />
    </div>
    <Link to="/en/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
