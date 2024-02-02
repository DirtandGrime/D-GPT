/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `Pressure Washing Professionals`,
    siteUrl: `https://www.dirtandgrime.co/`
  },
  plugins: ["gatsby-plugin-scroll-reveal", "gatsby-plugin-netlify", "gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-mdx", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "service",
      "path": "./service/"
    },
    __key: "service"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "data",
      "path": "./data/"
    },
    __key: "service"
  }, {
    resolve: 'gatsby-plugin-sharp',
    options: {
      defaults: {
        formats: [`auto`, `webp`],
        placeholder: `blurred`,
        quality: 50,
        breakpoints: [750, 1080, 1366, 1920],
        backgroundColor: `transparent`,
        blurredOptions: {},
        jpgOptions: {},
        pngOptions: {},
        webpOptions: {},
        avifOptions: {},
      },
    },
  }, {
    resolve: 'gatsby-plugin-google-tagmanager',
    options: {
      id: "GTM-WMMF4QR3",
      includeInDevelopment: false,
      defaultDataLayer: { platform: "gatsby" },
      routeChangeEventName: "website_route_change",
      enableWebVitalsTracking: true,
    },
  }, {
    resolve: `gatsby-transformer-remark`,
    options: {},
  }, {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }],
};