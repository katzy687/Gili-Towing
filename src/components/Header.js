import React from 'react'
import Link from 'gatsby-link'
import SelectLanguage from './SelectLanguage';
import styles from './header.module.css';
import FaPhone from 'react-icons/lib/fa/phone';
import MdMenuIcon from 'react-icons/lib/md/menu';


const SideBarTrigger = (props) => (
  <div style={{color: 'white', padding: '1rem', fontSize: '2rem'}} 
       onClick={props.clicked}
  >
    <MdMenuIcon />
  </div>
);

const SiteTitle = (props) => {
  const styledTitle = props.langKey === "en" ?
    <span><span className={styles.Gili} >Gili's </span>Towing 24/7</span> :
    <span>שירותי גריר <span className={styles.Gili}>גילי</span></span>;

  const serviceArea = props.langKey === "en" ? 'Tel Aviv / Central Israel' : 'תל אביב \\ מרכז הארץ';

  return (
    <div className={styles.SiteTitle}>
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
        <h1>
          {styledTitle}
        </h1>
        <p>
          {serviceArea}
        </p>
      </Link>
    </div>
  );
}

const PhoneButton = () => {
  const gilisNumber = '+1 (303) 499-7111';
  return(
    <button className={styles.Phone} >
      <FaPhone />
      <a style={{color: 'black'}} href={`tel:${gilisNumber}`}>{gilisNumber}</a>
    </button>
)};

// location needs to be made dynamic
const CallToAction = () => (
  <div className={styles.CallToAction} >
    <p>Gili is in: <span>Petach Tikva</span></p>
    <PhoneButton />
  </div>
)


const Header = (props) => (
  <div
    style={{
      background: 'rebeccapurple',
      // marginBottom: '1.45rem',
    }}
  >
    <SideBarTrigger clicked={props.sideBarTriggerClicked} />
    <SelectLanguage langs={props.langs} />
    <div className={styles.HeaderContent}>
      <SiteTitle title={props.title} langKey={props.langKey} />
      {/* <CallToAction /> */}
      <p>Need a tow? Call Now!</p>
      <PhoneButton />
    </div>
  </div>
)

export default Header;
