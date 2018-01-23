import React from 'react';
import Link from 'gatsby-link';
import {CardList} from './community.en';
import {heCards} from '../data/community';
const CommunityPage = () => (
  <div>  
    <CardList cards={heCards} />
  </div>
)

export default CommunityPage;