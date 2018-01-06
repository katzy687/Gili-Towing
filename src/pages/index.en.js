import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image';
import { Carousel } from 'react-responsive-carousel';
import carouselStyles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './index.module.css';
import PhoneButton from '../components/PhoneButton';

// images
import truckImg from '../assets/giliTruck.jpg';
import middleOf from '../assets/middleOfNoWhere.jpg';
import yo from '../assets/yo.jpg';
import gf from '../assets/girlfriend.jpg';

// const HomeButtons = () => (
//   <nav className={styles.navContainer} >
//     <ul>
//       <li><p>Towing / Roadside Assistance</p></li>
//       <li><p>Batteries</p></li>
//       <li><p>Metal Scrapping</p></li>
//     </ul>
//   </nav>
// );

const MainSlider = (props) => (
  <Carousel showThumbs={false} 
    infiniteLoop={true} 
    autoPlay={true} 
    interval={5000}
    className={styles.Carousel} 
  >
    <div>
      <img src={truckImg} alt=""/>
    {/* <Img
        title={'gili\'s truck'}
        sizes={props.img1}
    /> */}
      {/* <p className="legend">Legend 2</p> */}
    </div>
    <div>
    <img src={middleOf} alt=""/>
    {/* <Img
        title={'truck in middle of nowhere'}
        sizes={props.img2}
    /> */}
      {/* <p className="legend">Legend 3</p> */}
    </div>
    <div>
    <img src={yo} alt=""/>
      {/* <Img
        title={'gili\'s girl'}
        sizes={props.img3}
      /> */}
      {/* <p className="legend">Legend 1</p> */}
    </div>
    <div>
    <img src={gf} alt=""/>
      {/* <Img
        title={'gili\'s girl'}
        sizes={props.img3}
      /> */}
      {/* <p className="legend">Legend 1</p> */}
    </div>
  </Carousel>
)


const Description = () => (
  <section className={[styles.Description, styles.mobileContainer, 'white-card'].join(' ')} >
    <p>Car broke down? Stuck in some mud? </p>
    <p> Hi, my name is Gili and I'm here to fix your day.
       No matter the vehicle, weather or time of day, I'll come get you. Just give me a call.</p>
    <p>Check out my full list of <a href=""> Towing Services.</a></p>
    <p className={styles.checkMap} >You can also check the map below to see how close I am to you.</p>
    <p className={styles.callMe} >Need a tow? Call Now!</p>
    <PhoneButton customId="tablet-call" customStyle={{width: '222px', margin: '0 auto', padding: '0.3rem', fontSize: '1.2rem', color: 'white'}} />
  </section>
)

const MapTracker = () => (
  <section className={styles.MapTracker} >
    <p>Hi, I'm currently in: <span style={{ fontStyle: 'italic' }} >Petach Tikvah</span></p>
    <div className={styles.mapContainer}>
      <div>map goes here</div>
    </div>
  </section>
)


const IndexPage = () => (
  <main >
    {/* <HomeButtons /> */}
    <MainSlider />
    <div className={styles.BottomContainer} >
      <Description />
      <MapTracker />
    </div>
    {/* <Link to="/en/page-2/">Go to page 2</Link> */}
  </main>
)

export default IndexPage;

