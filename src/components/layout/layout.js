/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "bulma/css/bulma.css";
import "./layout.scss"
import "./responsive-sm-1.scss"
import "./responsive-sm-2.scss"
import "./responsive-sm-3.scss"
import "./responsive-xs-1.scss"
import "./responsive-xs-2.scss"
import "./responsive-xs-3.scss"
// import "./responsive-lg.scss"
// import "./responsive-md-1.scss"
// import "./responsive-md-2.scss"
// import "./responsive-md-3.scss"

const Layout = ({ children }) => {
  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]', {
      speed: 1000,
      speedAsDuration: true,
    });
  }
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
		<div className="landing-page" style={{height: '100%'}}>
      <div className="landing-page-container">
				<Header siteTitle={data.site.siteMetadata.title} />
				<div className="landing-page-container_main-content">
					<main>{children}</main>
				</div>
			</div>
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
