import React from 'react'
import Link from 'gatsby-link'
import SelectLanguage from './SelectLanguage';
import styles from './header.module.css';
import FaPhone from 'react-icons/lib/fa/phone';

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

const PhoneButton = () => (
    <button className={styles.Phone} >
      <FaPhone />
      <span>058-555-5555</span>
    </button>
);

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
      marginBottom: '1.45rem',
    }}
  >
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
