'use strict'

module.exports = {
  siteMetadata: {
    title: 'Slides',
    description: 'Slides',
    siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com',
    author: {
      name: 'Teppei Shintani',
      url: 'https://twitter.com/euglena1215',
      email: 'teppest1215@gmail.com'
    }
  },
  plugins: [
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: false
      }
    }
  ]
}
