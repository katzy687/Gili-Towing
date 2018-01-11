import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';
import FlagIcon from './FlagIcon.js';

const EnglishSelect = () => (
  <div>
    <p style={{ margin: '0 0.5rem 0 0', fontSize:'0.8rem'}}>En</p>
    <FlagIcon code="us" />
  </div>
  
)
const HebrewSelect = () => (
  <div>
    <p style={{ margin: '0', fontSize:'0.8rem'}}>עברית</p>
    <FlagIcon code="il" />
  </div>
  
)

const SelectLanguage = (props) => {
  const links = props.langs.map((lang, i, langArr) => {
    const separator = i === (langArr.length - 1) ? '' : '|';
    const paddingLeft = i === (langArr.length - 1) ? '0.5rem' : '';

    return (
      <Link to={lang.link} key={lang.langKey} style={{ color: 'white' }}>
        <li selected={lang.selected} >
          {lang.langKey === 'en' ? <EnglishSelect/> : <HebrewSelect/> }
        </li>
      </Link>
    )
  });

  return (
    <section className={props.className} >
      <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', margin: 0, padding: '0.5rem' }} >
        {links}
      </ul>
    </section>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectLanguage;
