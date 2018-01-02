import React from 'react'
import Link from 'gatsby-link'
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// images
import truckImg from '../assets/gili-truck.jpg';
import truckDesert from '../assets/truck-desert.jpg';
import desertImg from '../assets/desert.jpg';
import aradImg from '../assets/arad.jpg';


const MainSlider = () => (
  <Carousel>
    <div>
      <img src={truckDesert} />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src={truckImg} />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img src={aradImg} />
      <p className="legend">Legend 3</p>
    </div>
  </Carousel>
)

const Description = () => (
  <div>
    <h3>Hi, my name is Gili</h3>
    <p>Car broke down? Need a tow? You've come to the right place!</p>
  </div>
)

const IndexPage = () => (
  <div>
    <MainSlider />
    <Description />
    <Link to="/en/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
