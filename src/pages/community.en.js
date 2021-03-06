import React from 'react';
import Link from 'gatsby-link';
import styles from './community.module.css';
import {enCards} from '../data/community';
import PhoneButton from '../components/PhoneButton';

export const CardList =(props) => {

  const cards = props.cards.map((card, index, cardsArray) => {
    const cardHeader = card.header ? <h2>{card.header}</h2> : null;
    const phone = index === cardsArray.length-1 ? <PhoneButton /> : null;

    return(
      <li key={index} className={styles.card} >
        <div><img src={card.pic} alt="community pic"/></div>
        <div className={styles.content} >
          {cardHeader}
          <p>{card.desription}</p>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            {phone}
          </div>
        </div>
      </li>
    )
  })

  return(
    <ul className={styles.cardContainer} >
      {cards}
    </ul>
  )
}


const CommunityPage = () => (
  <div>
    <CardList cards={enCards}/>
  </div>
)

export default CommunityPage;