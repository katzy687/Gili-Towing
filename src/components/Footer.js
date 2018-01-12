import React from 'react';
import Link from 'gatsby-link';
import PhoneButton from './PhoneButton';

const Footer = () => (
  <div style={styles} >
    <p>I am very involved with the local Harley Davidson Community and we provide lots of services in the community.  
      Check out my <Link to="/community/" style={footerLinkStyles}> community service page </Link> for more details.
    </p>
    <p>You can reach me by email at <a style={footerLinkStyles} href="">GiliLovesBlondes@gmail.com</a></p>
    <p>Or you can always call</p>
    <PhoneButton />

  </div>
);

export default Footer;

const styles = {
  // height: '10vh', 
  background: '#424242', 
  color: 'white', 
  textAlign: 'center',
  margin: '1rem 0 0',
  padding: '1.5rem',
  width: '100vw'
}

const footerLinkStyles = {
  color: '#4FC3F7', 
  textDecoration: 'underline'
}