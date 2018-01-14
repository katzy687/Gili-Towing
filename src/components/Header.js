import React from 'react'
import Link from 'gatsby-link'
import SelectLanguage from './SelectLanguage';
import styles from './header.module.css';
import MdMenuIcon from 'react-icons/lib/md/menu';
import PhoneButton from './PhoneButton';


const SideBarTrigger = (props) => (
  <div className={styles.SideBarTrigger}
    onClick={props.clicked}
  >
    <MdMenuIcon />
  </div>
);

const SiteTitle = (props) => {
  const styledTitle = props.langKey === "en" ?
    <span><span className={styles.Gili} >Gili's </span>Towing 24/7</span> :
    <span>שירותי גרירה <span className={styles.Gili}>גילי</span></span>;

  const serviceArea = props.langKey === "en" ? 'Tel Aviv / Central Israel' : 'תל אביב \\ מרכז הארץ';
  const towingMsg = props.langKey === "en" ? 'Need a tow? Call Now!' : 'נתקעת עם הרכב? צריך שירותי גרירה? התקשר עכשיו';

  return (
    <div className={styles.SiteTitle}>
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
        <h1>
          {styledTitle}		 
        </h1>
        <p>
          {serviceArea}		   
        </p>
			<p style={{fontSize:'0.7rem'}}>{towingMsg}</p>
      </Link>
    </div>
  );
}


// location needs to be made dynamic
const CallMeNow = (props) => {
  const callMe = props.langKey === "en" ? 'Need a tow? Call Now!' : 'צריך גרירה, תתקשר!';
  return (
    <div className={styles.CallMeNow} >
      <p>{callMe}</p>
      <PhoneButton customId="mobile-call" />
    </div>
  )
}



const Header = (props) => {
  console.log('headerprops', props);
  return (
    <div style={{ background: 'rebeccapurple', width: '100vw' }} >
      <div className={styles.HeaderContainer} >
        <SideBarTrigger clicked={props.sideBarTriggerClicked} />
        <SelectLanguage langs={props.langs} className={styles.SelectLanguage} langKey={props.langKey} />
        <SiteTitle title={props.title} langKey={props.langKey} />
        <CallMeNow langKey={props.langKey} />
      </div>
    </div>
  )
}

export default Header;
