import React from 'react'
import Link from 'gatsby-link'
import SelectLanguage from './SelectLanguage';
import styles from './header.module.css';
import FaPhone from 'react-icons/lib/fa/phone';

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

const PhoneButton = () => {
  const gilisNumber = '+(972) 52-420-7470';
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
    <SelectLanguage langs={props.langs} />
    <div className={styles.HeaderContent}>
      <SiteTitle title={props.title} langKey={props.langKey} />
      {/* <CallToAction /> */}      
      <PhoneButton />
    </div>
  </div>
)

export default Header;
