import React from 'react'
import Link from 'gatsby-link'
import truckImg from '../assets/gili-truck.jpg';

const IndexPage = () => (
  <div>
    <h1>מה קורא???</h1>
    <p>ברוך הבא לאתר שלי. קורא'ם לי גילי</p>
    <p>אני אוהב מכוניות וזונות</p>
    <div className="truck-wrapper" style={{ textAlign: "center" }}>
      <img src={truckImg} alt="truck" />
    </div>
    <Link to="/he/page-2/">תמשיך אאלה לדף שני חביבי</Link>
  </div>
)

export default IndexPage
