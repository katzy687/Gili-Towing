import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';
import FlagIcon from './FlagIcon.js';

const EnglishSelect = (props) => {
  const activeFontSize = props.langSelected ? '1.1rem' : '0.7rem';
  const activeFlagSize = props.langSelected ? '1.2rem': '1rem';
  return (
    <div>
      <p style={{ margin: '0 0.5rem 0 0', fontSize: activeFontSize}}>En</p>
      <FlagIcon code="us" />
    </div>

  )
}

const HebrewSelect = (props) => {
  const activeFontSize = props.langSelected ? '1.1rem' : '0.7rem';
  const activeFlagSize = props.langSelected ? '1.2rem': '1rem';
  
  return (
    <div>
      <p style={{ margin: '0', fontSize: activeFontSize}}>עברית</p>
      <FlagIcon code="il"/>
    </div>
  )
}

const SelectLanguage = (props) => {
  const links = props.langs.map((lang, i, langArr) => {
    const separator = i === (langArr.length - 1) ? '' : '|';
    const paddingLeft = i === (langArr.length - 1) ? '0.5rem' : '';


    return (
      <li selected={lang.selected} key={lang.langKey} style={{ marginBottom: 0}}>
        <Link to={lang.link} style={{ color: '#FAFAFA' }}>
          {lang.langKey === 'en' ? <EnglishSelect langSelected={lang.selected} /> : <HebrewSelect langSelected={lang.selected} />}
        </Link>
      </li>
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
