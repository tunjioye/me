const { siteMetadata, pathPrefix } = require('./me-config')

console.log(pathPrefix)

module.exports = {
  pathPrefix: `${pathPrefix || '/'}`,
  siteMetadata: {
    ...siteMetadata
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `${siteMetadata.title}`,
        short_name: `me`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#404040`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,

    // Additional Config
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/me-md/`,
      },
    },

    // Installed Gatsby Plugins
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noopener noreferrer"
            }
          }
        ]
      }
    }
  ],
}
