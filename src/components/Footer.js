import React from 'react';
import Link from 'gatsby-link';
import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official';
import PhoneButton from './PhoneButton';

const Footer = (props) => {

  const englishContent = (
    <div style={styles} >
      <p>I am very involved with the local Harley Davidson Association and we provide lots of services in the community.</p>
      <p>Check out my <Link to={`/${props.langKey}/community/`} style={footerLinkStyles}> community service page </Link> for more details.</p>
      <p>You can reach me by email at <a style={footerLinkStyles} href="">GiliTowing@gmail.com</a></p>
      <p>Or you can always call</p>
      <PhoneButton />
    </div>
  );

  const hebrewContent = (
    <div style={styles} >
      
      <p>מוזמנים להתרשם ולהצטרף אליי ב<Link to={`/${props.langKey}/community/`} style={footerLinkStyles}> עזרה לקהילה </Link></p>
      <p>ניתן גם להשיג אותי במייל <a style={footerLinkStyles} href="">GiliTowing@gmail.com</a></p>
      <p>או לחלופין בפלאפון</p>
      <PhoneButton />
	  <a href="https://www.facebook.com/GRARGILI/" target="_blank"><FaFacebookOfficial style={fbStyle} /></a>
    </div>
  );

  return props.langKey === 'en' ? englishContent : hebrewContent;

}

export default Footer;

const styles = {
  // height: '10vh', 
  background: '#fda000',
  color: '#FAFAFA',
  textAlign: 'center',
  padding: '1.5rem',
  width: '100vw'
}
const fbStyle = {
	height:'150px',
	width:'150px',
	padding:'5',
	margin:'5'
}
const footerLinkStyles = {
  // color: '#4FC3F7',
  textDecoration: 'underline'
}