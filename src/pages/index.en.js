import React from 'react'
import Link from 'gatsby-link'
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import homeStyles from './index.module.css';

// images
import truckImg from '../assets/gili-truck.jpg';
import truckDesert from '../assets/truck-desert.jpg';
import desertImg from '../assets/desert.jpg';
import aradImg from '../assets/arad.jpg';

const HomeButtons = () => (
  <nav className={homeStyles.navContainer} >
    <ul>
      <li><p>Towing / Roadside Assistance</p></li>
      <li><p>Batteries</p></li>
      <li><p>Metal Scrapping</p></li>
    </ul>
  </nav>
);

const MainSlider = () => (
  <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} className={homeStyles.Carousel} >
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
  <section className={homeStyles.Description} >
    <h3>Hi, my name is Gili</h3>
    <p>Car broke down? Stuck in some mud up north? Trapped in the airport garage? Well I'm here to fix your day.</p>
    <p>No matter the vehicle, weather or time of day, I'll come get you. Just give me a call.</p>
    <p>Check the map below to see how close I am to you</p>
    <p>You can also check out my full list of <a href="">services</a></p>
  </section>
)

const MapTracker = () => (
  <section className={homeStyles.MapTracker} >
    <p>Hi, I'm currently in: <span style={{fontStyle: 'italic'}} >Petach Tikvah</span></p>
    <div className={homeStyles.mapContainer}>
      <div>map goes here</div>
    </div>
  </section>
)

const ServiceList = () => (
  <section className={homeStyles.ServiceContainer} >
    <h3>I offer the following services</h3>
    <ul>
      <li>towing</li>
      <li>dirty sanchez</li>
    </ul>
  </section>
)





const IndexPage = () => (
  <main className={homeStyles.GridContainer} >
    <HomeButtons />
    <MainSlider />
    <Description />
    <MapTracker />
    <ServiceList />
    {/* <Link to="/en/page-2/">Go to page 2</Link> */}
  </main>
)

export default IndexPage;
