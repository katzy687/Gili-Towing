import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';

const SelectLanguage = (props) => {
  const links = props.langs.map((lang, i, langArr) => {
    const separator = i === (langArr.length - 1) ? '' : '|';
    const paddingLeft = i === (langArr.length - 1) ? '0.5rem' : '';

    return (
      <Link to={lang.link} key={lang.langKey} style={{
        color: 'white',
        paddingLeft
      }}>
        <li selected={lang.selected}>
          {lang.langKey === 'en' ? 'English' : 'עברית'}
        </li>
      </Link>
    )
  });

  return (
    <section>
      <header style={{
        color: 'white'
      }}>
        {/* <FormattedMessage id="selectLanguage" /> */}
      </header>
      <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', margin: 0 }} >
        {links}
      </ul>
    </section>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectLanguage;
