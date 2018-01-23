import React from 'react';
import FaStarO from 'react-icons/lib/fa/star-o';
import styles from './serviceSigns.module.css';

export const BatterySign = (props) => {
  const batterySign = props.langKey === "en" ? 'Batteries' : 'מצברים';

  return (
    <div className={[styles.batterySign, 'animated', 'tada', 'infinite'].join(' ')}>
      <FaStarO />
      <p>{batterySign}</p>
      <FaStarO />
    </div>
  )
}

export const RoadSideSign = (props) => {
  const roadSideSign = props.langKey === "en" ? 'Roadside Assistance' : 'חילוצי שטח';

  return (
    <div className={[styles.roadSideSign, 'animated', 'tada', 'infinite'].join(' ')}>
      <FaStarO />
      <p>{roadSideSign}</p>
      <FaStarO />
    </div>
  )
}