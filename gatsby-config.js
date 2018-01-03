const languages = require('./src/data/languages');

module.exports = {
  siteMetadata: {
    title: `Gili's Towing Service`,
    languages
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true
      }
    }
  ]
}
