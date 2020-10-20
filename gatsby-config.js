module.exports = {
  siteMetadata: {
    title: `Hunter Campbell`,
    description: `Personal website to link users to all of my social media profiles and a central location to show my portfolio.`,
    author: `@campbehr`,
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
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `./data/`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`light`, `300`, `bold`],
          },
          {
            family: `Nunito`,
            variants: [`regular`, `400`, `bold`],
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        // background_color: `#663399`,
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicons/android-chrome-512x512.png`,
        icon_options: {
          purpose: `any maskable`,
        },
        cache_busting_mode: `none`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: [`src/images/favicons/android-chrome-192x192.png`],
        },
      },
    },
  ],
}
