import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Helmet from 'react-helmet';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider } from 'react-intl';
import 'intl';
import './index.css';
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
            title="גרר גילי - שירותי רכב וחילוצים 24/7 בתל אביב ואזור המרכז"
            meta={[
              { name: 'description', content: 'חילוץ וסיוע בדרכים, למצבי חירום, גרירה, אחסון רכבים, מכירה והתקנה של מצברי רכב ומשאיות, וטיפול בתקלות רכב דו גלגלי בתל אביב ואזור המרכז 24/7, 7 ימים בשבוע' },
              { name: 'keywords', content: 'Emergency roadside assistance, towing, car storage and car batteries for car, truck and motorcycle breakdowns in Tel Aviv and Central Israel 24 hours a day, 7 days a week (24/7)' },
              { name: 'og:title', content: 'גרר גילי - שירותי רכב וחילוצים 24/7' },
              { name: 'og:description', content: 'חילוץ וסיוע בדרכים, למצבי חירום, גרירה, אחסון רכבים, מכירה והתקנה של מצברי רכב ומשאיות, וטיפול בתקלות רכב דו גלגלי בתל אביב ואזור המרכז 24/7, 7 ימים בשבוע' },
              { name: 'og:image', content: 'https://scontent.ftlv2-1.fna.fbcdn.net/v/t1.0-9/1915364_906954752757495_3731075909287235474_n.jpg?oh=b35e087bb966d1111a5b5b61417c6fca&oe=5ADA6088' },
              { name: 'og:url', content: 'http://grargilitelaviv.co.il/' },
            ]}
          />
          <Sidebar sidebar={<SideBarContent langKey={langKey} closeHandler={this.closeSideBar}/>}
            open={this.state.sidebarOpen}
            sidebarClassName={styles.sideBar}
            contentClassName={styles.sideBarContent}
            onSetOpen={this.onSetSidebarOpen}
            styles={{ overflow: 'hidden' }}
          >
            <Header langs={langsMenu} title={langTitle} langKey={langKey} sideBarTriggerClicked={this.openSideBar} />
            <div style={{ maxWidth: 1300, background: '#9E9E9E', padding: '1rem 0 1rem 0', margin: '0 auto' }}>
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
            <Footer langKey={langKey}/>
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
