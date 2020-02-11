import React from "react"
import PropTypes from "prop-types"

const SocialLink = (props) => {
  const { href, children } = props

  return (
    <>
      {href &&
        <a className="social-link" href={`${href || ''}`} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      }
    </>
  )
}

SocialLink.propTypes = {
  href: PropTypes.string
}

SocialLink.defaultProps = {
  href: ``
}

export default SocialLink
