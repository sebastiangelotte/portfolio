module.exports = {
  siteMetadata: {
    title: `Sebastian Gelotte`,
    description: `Höme of Seb`,
    author: `@sebastiangelotte`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: ``, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://feeds.fireside.fm/trevligmjukvara/rss`,
        name: `TrevligMjukvara`,
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `notes`,
        remote: `https://github.com/sebastiangelotte/notes`,
        branch: `master`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 962,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`open sans\:400,800`],
        display: "swap",
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
