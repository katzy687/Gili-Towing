import React from 'react'
import Link from 'gatsby-link'
import { Carousel } from 'react-responsive-carousel';
import carouselStyles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './index.module.css';

// images
import truckImg from '../assets/gili-truck.jpg';
import truckDesert from '../assets/truck-desert.jpg';
import desertImg from '../assets/desert.jpg';
import aradImg from '../assets/arad.jpg';

// const HomeButtons = () => (
//   <nav className={styles.navContainer} >
//     <ul>
//       <li><p>Towing / Roadside Assistance</p></li>
//       <li><p>Batteries</p></li>
//       <li><p>Metal Scrapping</p></li>
//     </ul>
//   </nav>
// );

const MainSlider = () => (
  <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} className={styles.Carousel} >
    <div>
      <img src={truckDesert} />
      {/* <p className="legend">Legend 1</p> */}
    </div>
    <div>
      <img src={truckImg} />
      {/* <p className="legend">Legend 2</p> */}
    </div>
    <div>
      <img src={aradImg} />
      {/* <p className="legend">Legend 3</p> */}
    </div>
  </Carousel>
)


const Description = () => (
  <section className={[styles.Description, styles.mobileContainer].join(' ')} >
    <p>Car broke down? Stuck in some mud? </p>
    <p> Hi, my name is Gili and I'm here to fix your day.
       No matter the vehicle, weather or time of day, I'll come get you. Just give me a call.</p>
    <p>Check out my full list of <a href=""> Towing Services.</a></p>
    <p>You can also see the map below to see how close I am to you.</p>
  </section>
)

const MapTracker = () => (
  <section className={styles.MapTracker} >
    <p>Hi, I'm currently in: <span style={{fontStyle: 'italic'}} >Petach Tikvah</span></p>
    <div className={styles.mapContainer}>
      <div>map goes here</div>
    </div>
  </section>
)


const IndexPage = () => (
  <main >
    {/* <HomeButtons /> */}
    <MainSlider />
    <Description />
    <MapTracker />
    {/* <Link to="/en/page-2/">Go to page 2</Link> */}
  </main>
)

export default IndexPage;
