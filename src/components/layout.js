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
import "./layout.css"
import { contacts } from "./../../me-config"

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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <br />

        <main className="main-content">{children}</main>

        <br />
        <br />

        <footer>
          <div>
            <a className="social-link" href={`mailto:${contacts.email || ''}`} target="_blank" rel="noopener noreferrer">Email</a>
            <a className="social-link" href={`${contacts.github || ''}`} target="_blank" rel="noopener noreferrer">Github</a>
            <a className="social-link" href={`${contacts.twitter || ''}`} target="_blank" rel="noopener noreferrer">Twitter</a>
            <a className="social-link" href={`${contacts.linkedin || ''}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="social-link" href={`${contacts.instagram || ''}`} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a className="social-link" href={`${contacts.stackoverflow || ''}`} target="_blank" rel="noopener noreferrer">Stackoverflow</a>
            <a className="social-link" href={`${contacts.medium || ''}`} target="_blank" rel="noopener noreferrer">Medium</a>
          </div>
          <br />
          <div>
            <strong>&copy;</strong> {new Date().getFullYear()},
            Built with <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
