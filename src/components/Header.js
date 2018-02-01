import React from 'react'
import Link from 'gatsby-link'
import SelectLanguage from './SelectLanguage';
import styles from './header.module.css';
import MdMenuIcon from 'react-icons/lib/md/menu';
import PhoneButton from './PhoneButton';
import { BatterySign, RoadSideSign } from './serviceSigns';

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
  return (
    <div className={styles.CallMeNow}>
      <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>{callMe}</p>
      <PhoneButton customId="mobile-call" />
    </div>
  )
}

const CrazySigns = (props) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '1rem' }}>
      <BatterySign langKey={props.langKey} />
      <RoadSideSign langKey={props.langKey} />
    </div>
  )
}



const Header = (props) => {
  console.log('headerprops', props);
  return (
    <div style={{ background: '#fda000', width: '100vw', paddingBottom: '0.3rem' }} >
      <div className={styles.HeaderContainer} >
        <SideBarTrigger clicked={props.sideBarTriggerClicked} />
        <div className={styles.topRowSigns}>
          <BatterySign langKey={props.langKey} />
        </div>
        <SiteTitle title={props.title} langKey={props.langKey} />
        <div className={styles.topRowSigns}>
          <RoadSideSign langKey={props.langKey} />
        </div>
        <SelectLanguage langs={props.langs} className={styles.SelectLanguage} langKey={props.langKey} />
      </div>
      <CrazySigns langKey={props.langKey} />
      <CallMeNow langKey={props.langKey} />
    </div>
  )
}

export default Header;

// alternate wood bg
// `url(${woodBG})`