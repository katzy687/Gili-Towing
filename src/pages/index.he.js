import React from 'react'
import Link from 'gatsby-link'
import truckImg from '../assets/gili-truck.jpg';

const IndexPage = () => (
  <div>
    <h3>אאלן, קוראים לי גילי.</h3>
    <p> צריך גרר וחילוץ? הגעת למקום הנכון!</p>
    <div className="truck-wrapper" style={{ textAlign: "center" }}>
      <img src={truckImg} alt="truck" />
    </div>
    <Link to="/he/page-2/">תמשיך אאלה לדף שני חביבי</Link>
  </div>
)

export default IndexPage
