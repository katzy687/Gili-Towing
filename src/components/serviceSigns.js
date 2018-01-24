import React from 'react';
import FaStarO from 'react-icons/lib/fa/star-o';
import styles from './serviceSigns.module.css';

const CrazyStar = () => (
  <FaStarO className={['animated', 'tada', 'infinite'].join(' ')}/>
)

export const BatterySign = (props) => {
  const batterySign = props.langKey === "en" ? 'Batteries' : 'מצברים';

  return (
    <div className={styles.batterySign}>
      <CrazyStar />
      <p>{batterySign}</p>
      <CrazyStar />
    </div>
  )
}

export const RoadSideSign = (props) => {
  const roadSideSign = props.langKey === "en" ? 'Roadside' : 'חילוצי שטח';
  return (
    <div className={styles.roadSideSign}>
      <CrazyStar />
      <p>{roadSideSign}</p>
      <CrazyStar />
    </div>
  )
}