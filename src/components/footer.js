import React from "react"
import PropTypes from "prop-types"

import SocialLink from "./social-link"

const Footer = (props) => {
  const { contacts } = props

  return (
    <footer>
      <div>
        <SocialLink href={`mailto:${contacts.email || ""}`}>Email</SocialLink>
        <SocialLink href={`${contacts.github || ""}`}>Github</SocialLink>
        <SocialLink href={`${contacts.twitter || ""}`}>Twitter</SocialLink>
        <SocialLink href={`${contacts.linkedin || ""}`}>LinkedIn</SocialLink>
        <SocialLink href={`${contacts.stackoverflow || ""}`}>Stackoverflow</SocialLink>
        <SocialLink href={`${contacts.instagram || ""}`}>Instagram</SocialLink>
        <SocialLink href={`${contacts.medium || ""}`}>Medium</SocialLink>
        <SocialLink href={`${contacts.angel || ""}`}>Angel</SocialLink>
      </div>
      <br />
      <div>
        <small>
          <strong>&copy;</strong> {new Date().getFullYear()}, Built with{" "}
          <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">
            Gatsby
          </a>
        </small>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  contacts: PropTypes.object,
}

Footer.defaultProps = {
  contacts: ``,
}

export default Footer
