import React, { Component } from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image';
import { Carousel } from 'react-responsive-carousel';
import carouselStyles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './index.module.css';
import PhoneButton from '../components/PhoneButton';
import { Collapse } from 'react-collapse';
import SmoothCollapse from 'react-smooth-collapse';

import {ServiceList} from './index.en';
import {MainSlider} from './index.en';
import GiliGlympse from '../components/GiliGlympse';

/*const IndexPage = () => (
  <div>
    <h3>אהלן, קוראים לי גילי.</h3>
    <p> צריך גרר וחילוץ? הגעת למקום הנכון!</p>
    <div className="truck-wrapper" style={{ textAlign: "center" }}>
      <img src={truckImg} alt="truck" />
    </div>
    <Link to="/he/page-2/">תמשיך הלאה לדף שני חביבי</Link>
  </div>
 */
// images
import truckImg from '../assets/giliTruck.jpg';
import classic from '../assets/classic.jpg';
import atv from '../assets/atv.jpg';
import garage from '../assets/garage.jpg'
import gf from '../assets/girlfriend.jpg';

//icons
import MdArrowDown from 'react-icons/lib/md/keyboard-arrow-down';
import MdArrowUp from 'react-icons/lib/md/keyboard-arrow-up';

//data 
import {heTowingServices, heRoadSide, heOtherServices, heGeneralServices} from '../data/services';

const Description = () => (
  <section className={[styles.Description, 'white-card'].join(' ')} >
    <p> היי, אני גילי ואני כאן כדי להציל את המצב אליו נקלעת! אני ממוקם בעיקר באזור תל אביב והמרכז, אך בתיאום מראש אוכל להגיע לכל נקודה בארץ, בכל שעות היממה 24/7 בכל מזג אויר ולתת עזרה מכל סוג בדרכים ובשטח 
    </p>    
    {/* desktop view */}
    <p className={styles.checkMap} >תוכל גם לבדוק את המפה שבהמשך כדי לראות את המיקום שלי</p>
    <p className={styles.callMe}> צריכים גרירה? התקשרו עכשיו!</p>
    <PhoneButton customId="tablet-call" customStyle={{ width: '222px', margin: '0 auto', padding: '0.3rem', fontSize: '1.2rem', color: 'white' }} />
  </section>
)

const Services = () => (
  <section className={styles.Services} >
    <h1>שרותים</h1>
	<ServiceList serviceArr={heGeneralServices} />
    <h3>גרירה:</h3>
    <ServiceList serviceArr={heTowingServices} />

    <h3>שרותי דרכים:</h3>
    <ServiceList serviceArr={heRoadSide} />
    
    <h3>שרותים נוספים:</h3>
    <ServiceList serviceArr={heOtherServices} />
    

  </section>
)

const MapTracker = () => (
  <section className={styles.MapTracker} >
    <p style={{textAlign: 'center', fontSize: '1.2rem'}}>המיקום הנוכחי שלי</p>
    <div className={styles.mapContainer} dir="ltr">
      {/* <div>map goes here</div> */}
      {/* <iframe id="glympser" width="500" height="400" src="//glympse.com/ext/!yo" scrolling="no" marginHeight="0" marginWidth="0" frameBorder="0"></iframe> */}
      <GiliGlympse />
    </div>
  </section>
)


const IndexPage = () => (
  <main className={styles.gridContainer} >
    {/* <HomeButtons /> */}
    <MainSlider />
    <Description />
    <Services />
    <MapTracker />
    {/* <Link to="/en/page-2/">Go to page 2</Link> */}
  </main>
)

export default IndexPage;

