import React from 'react'
import Link from 'gatsby-link'
import SelectLanguage from './SelectLanguage';
import styles from './header.module.css';
import FaPhone from 'react-icons/lib/fa/phone';
import MdMenuIcon from 'react-icons/lib/md/menu';


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
  return (
    <button className={styles.Phone} >
      <FaPhone />
      <a style={{ color: 'black' }} href={`tel:${gilisNumber}`}>{gilisNumber}</a>
    </button>
  )
};

// location needs to be made dynamic
const CallMeNow = (props) => {
  const callMe = props.langKey === "en" ? 'Need a tow? Call Now!' : 'צריך גרירה, תתקשר!';
  return (
  <div className={styles.CallMeNow} >
    <p>{callMe}</p>
    <PhoneButton />
  </div>
)}


const Header = (props) => (
  <div className={styles.HeaderContainer} >
    <SideBarTrigger clicked={props.sideBarTriggerClicked} />
    <SelectLanguage langs={props.langs} className={styles.SelectLanguage} />
    <SiteTitle title={props.title} langKey={props.langKey} />
    <CallMeNow langKey={props.langKey}/>
  </div>
)

export default Header;
