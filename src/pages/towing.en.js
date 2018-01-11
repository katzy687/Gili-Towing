import React from 'react';
import Link from 'gatsby-link';
import Img from "gatsby-image";

const TowingPage = ({data}) => (
  <div>
    <h1>Hi from the towing page</h1>
    <Img 
      title={'classic car gets towed'}
      sizes={data.classicCar.sizes} 

    />
    <Link to="/en/">Go back to the homepage</Link>
  </div>
)

export default TowingPage;

export const query = graphql`
  query BlurUpQuery {
    classicCar: imageSharp(id: { regex: "/classic/" }) {
      sizes(maxWidth: 420) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`