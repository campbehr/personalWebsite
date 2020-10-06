import React from "react"
import PropTypes from "prop-types"
import Grid from "./grid"
import { useStaticQuery, graphql, Link } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <Grid>{children}</Grid>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
