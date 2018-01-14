import React from 'react';
import FaPhone from 'react-icons/lib/fa/phone';
import styles from './PhoneButton.module.css';

const PhoneButton = (props) => {
  const gilisNumber = '+1 (303) 499-7111';
  return (
    <button id={props.customId} className={styles.Phone} style={props.customStyle} >
      <FaPhone />
      <a href={`tel:${gilisNumber}`}>{gilisNumber}</a>
    </button>
  )
};

export default PhoneButton;
