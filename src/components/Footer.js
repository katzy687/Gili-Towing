import React from 'react';
import Link from 'gatsby-link';

const Footer = () => (
  <div style={styles} >
    <p>Hi I'm a footer</p>
  </div>
);

export default Footer;

const styles = {
  height: '10vh', 
  background: '#424242', 
  color: 'white', 
  textAlign: 'center',
  marginTop: '1rem',
  padding: '1.5rem',
  width: '100vw'
}