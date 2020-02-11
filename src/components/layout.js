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
import SocialLink from "./social-link"
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
            <SocialLink href={`mailto:${contacts.email || ''}`}>Email</SocialLink>
            <SocialLink href={`${contacts.github || ''}`}>Github</SocialLink>
            <SocialLink href={`${contacts.twitter || ''}`}>Twitter</SocialLink>
            <SocialLink href={`${contacts.linkedin || ''}`}>LinkedIn</SocialLink>
            <SocialLink href={`${contacts.instagram || ''}`}>Instagram</SocialLink>
            <SocialLink href={`${contacts.stackoverflow || ''}`}>Stackoverflow</SocialLink>
            <SocialLink href={`${contacts.medium || ''}`}>Medium</SocialLink>
          </div>
          <br />
          <div>
            <small>
              <strong>&copy;</strong> {new Date().getFullYear()},
              Built with <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>
            </small>
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
