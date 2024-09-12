import React from "react"
import PropTypes from "prop-types"

const SocialLink = (props) => {
  const { href, children } = props

  if (href) {
    return (
      <a className="social-link" href={`${href || ""}`} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return null
}

SocialLink.propTypes = {
  href: PropTypes.string,
}

SocialLink.defaultProps = {
  href: ``,
}

export default SocialLink
