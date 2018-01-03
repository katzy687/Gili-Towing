import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider } from 'react-intl';
import 'intl';
import './index.css'

const TemplateWrapper = ({ children, data, location, i18nMessages }) => {
  const url = location.pathname;
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  console.log(langKey);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));

  // const langAlign = langKey === 'he' ? 'right' : 'left';
  const langDirection = langKey === 'he' ? 'rtl' : 'ltr';
  const langTitle = langKey === 'he' ? 'גרר גילי' : 'Gili\'s Towing 24/7';

  return (
    <IntlProvider
      locale={langKey}
      messages={i18nMessages}
    >
      <div>
        <Helmet
          title="Gili's Towing 24/7"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header langs={langsMenu} title={langTitle} langKey={langKey}/>
        <div
          dir={langDirection}
          style={{
            margin: '0 auto',
            maxWidth: 960,
            // padding: '0px 1.0875rem 1.45rem',
          }}
        >
          {children()}
        </div>
      </div>
    </IntlProvider>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const pageQuery = graphql`
  query Layout {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }      
      }
    }
  }
`;
