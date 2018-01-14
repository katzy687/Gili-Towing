import React from 'react';
import Link from 'gatsby-link';
import PhoneButton from './PhoneButton';

const Footer = (props) => {

  const englishContent = (
    <div style={styles} >
      <p>I am very involved with the local Harley Davidson Association and we provide lots of services in the community.</p>
      <p>Check out my <Link to="/community/" style={footerLinkStyles}> community service page </Link> for more details.</p>
      <p>You can reach me by email at <a style={footerLinkStyles} href="">GiliLovesBlondes@gmail.com</a></p>
      <p>Or you can always call</p>
      <PhoneButton />
    </div>
  );

  console.log(englishContent);

  const hebrewContent = (
    <div style={styles} >
      <p>Hebrew text goes here</p>
      <p>Check out my <Link to="/community/" style={footerLinkStyles}> community service page </Link> for more details.</p>
      <p>You can reach me by email at <a style={footerLinkStyles} href="">GiliLovesBlondes@gmail.com</a></p>
      <p>Or you can always call</p>
      <PhoneButton />
    </div>
  );

  return props.langKey === 'en' ? englishContent : hebrewContent;

}

export default Footer;

const styles = {
  // height: '10vh', 
  background: '#424242',
  color: 'white',
  textAlign: 'center',
  padding: '1.5rem',
  width: '100vw'
}

const footerLinkStyles = {
  color: '#4FC3F7',
  textDecoration: 'underline'
}