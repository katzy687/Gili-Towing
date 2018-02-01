import React from 'react';
import FaPhone from 'react-icons/lib/fa/phone';
import styles from './PhoneButton.module.css';

const PhoneButton = (props) => {
  const gilisNumber = '(052) 420-7470';
  return (
    <button id={props.customId} className={styles.Phone} style={props.customStyle} >
      <FaPhone />
      <a href={`tel:${gilisNumber}`}>{gilisNumber}</a>
    </button>
  )
};

export default PhoneButton;
