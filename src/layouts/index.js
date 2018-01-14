import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Helmet from 'react-helmet';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider } from 'react-intl';
import 'intl';
import './index.css'
import styles from './index.module.css';
import Sidebar from 'react-sidebar';
import SideBarContent from '../components/SideBarContent';
import Footer from '../components/Footer';

class TemplateWrapper extends Component {
  // props are data, location, i18nMessages, children
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false
    }

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  openSideBar = () => {
    this.setState({ sidebarOpen: true });
  }

  closeSideBar = () => {
    this.setState({ sidebarOpen: false });
  }

  render() {

    const url = this.props.location.pathname;
    const { langs, defaultLangKey } = this.props.data.site.siteMetadata.languages;
    const langKey = getCurrentLangKey(langs, defaultLangKey, url);
    const homeLink = `/${langKey}/`;
    const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));

    // const langAlign = langKey === 'he' ? 'right' : 'left';
    const langDirection = langKey === 'he' ? 'rtl' : 'ltr';
    const langTitle = langKey === 'he' ? 'גרר גילי' : 'Gili\'s Towing 24/7';

    return (
      <IntlProvider
        locale={langKey}
        messages={this.props.i18nMessages}
      >
        <div>
          <Helmet
            title="Gili's Towing 24/7"
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
              { name: 'keywords', content: 'Gili-towing, 24/7, towing, blondes' },
            ]}
          />
          <Sidebar sidebar={<SideBarContent langKey={langKey} closeHandler={this.closeSideBar}/>}
            open={this.state.sidebarOpen}
            sidebarClassName={styles.sideBar}
            contentClassName={styles.sideBarContent}
            onSetOpen={this.onSetSidebarOpen}
              
          >
            <Header langs={langsMenu} title={langTitle} langKey={langKey} sideBarTriggerClicked={this.openSideBar} />
            <div style={{ maxWidth: 1300, background: '#E0E0E0', padding: '0 0 2rem 0', margin: '0 auto' }}>
              <div
                dir={langDirection}
                style={{
                  margin: '0 auto',
                  maxWidth: 960,
                  // padding: '0px 1.0875rem 1.45rem',
                }}
              >
                {this.props.children()}
              </div>
            </div>
            <Footer />
          </Sidebar>
        </div>
      </IntlProvider>
    );
  }
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
