import React from 'react'
import Link from 'gatsby-link'
import SelectLanguage from './SelectLanguage';
import styles from './header.module.css';
import MdMenuIcon from 'react-icons/lib/md/menu';
import FaStarO from 'react-icons/lib/fa/star-o';
import PhoneButton from './PhoneButton';

// import woodBG from '../assets/wood-bg.jpg';

const SideBarTrigger = (props) => (
  <div className={styles.SideBarTrigger}
    onClick={props.clicked}
    style={{ cursor: 'pointer' }}
  >
    <MdMenuIcon />
  </div>
);

const SiteTitle = (props) => {
  const styledTitle = props.langKey === "en" ?
    <span><span className={styles.Gili} >Gili's </span>Towing 24/7</span> :
    <span>גרר <span className={styles.Gili}>גילי</span>  תל אביב 24/7</span>;

  const serviceArea = props.langKey === "en" ? 'Tel Aviv / Central Israel' : 'תל אביב \\ מרכז הארץ';
  const towingMsg = props.langKey === "en" ? 'Need a tow? Call Now!' : 'נתקעת עם הרכב? צריך שירותי גרירה? התקשרו עכשיו';

  return (
    <div>
      <div className={styles.SiteTitle}>
        <Link to={`/${props.langKey}`} style={{ textDecoration: 'none', color: '#FAFAFA' }}>
          <h1>
            {styledTitle}
          </h1>
          <p>
            {serviceArea}
          </p>
          {/* <p style={{fontSize:'0.7rem'}}>{towingMsg}</p> */}
        </Link>
      </div>
    </div>
  );
}


// location needs to be made dynamic
const CallMeNow = (props) => {
  const callMe = props.langKey === "en" ? 'Need a tow? Call Now!' : 'צריך גרירה? תתקשר';
  const batterySign = props.langKey === "en" ? 'Batteries' : 'מצברים';
  const roadSideSign = props.langKey === "en" ? 'Roadside Assistance' : 'חילוצי שטח';
  return (
    <div className={styles.CallMeNow}>
      <div className={[styles.batterySign, 'animated', 'tada', 'infinite'].join(' ')}>
        <FaStarO />
        <p>{batterySign}</p>
        <FaStarO/>
      </div>
      <div  >
        <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>{callMe}</p>
        <PhoneButton customId="mobile-call" />
      </div>
      <div className={[styles.roadSideSign, 'animated', 'tada', 'infinite'].join(' ')}>
        <FaStarO />
        <p>{roadSideSign}</p>
        <FaStarO />
      </div>
    </div>
  )
}



const Header = (props) => {
  console.log('headerprops', props);
  return (
    <div style={{ background: '#fda000', width: '100vw' }} >
      <div className={styles.HeaderContainer} >
        <SideBarTrigger clicked={props.sideBarTriggerClicked} />
        <SiteTitle title={props.title} langKey={props.langKey} />
        <SelectLanguage langs={props.langs} className={styles.SelectLanguage} langKey={props.langKey} />
      </div>
      <CallMeNow langKey={props.langKey} />
    </div>
  )
}

export default Header;

// alternate wood bg
// `url(${woodBG})`