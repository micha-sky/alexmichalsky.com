/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env`,
})

module.exports = {
  /* Your site config here */
  plugins: [ `gatsby-plugin-image`, `gatsby-plugin-sharp`, `gatsby-transformer-sharp`,
    {resolve: `gatsby-source-filesystem`, options: {path: `${__dirname}/src/img/`}, name: `images`}],
}
