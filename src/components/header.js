import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import CONFIG from "./../../me-config"
import Navbar from "./navbar"

const Header = ({ initials }) => {
  initials = CONFIG.initials || initials

  return (
    <header
      style={{
        background: `#404040`,
        marginBottom: `1.4rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0.8rem 0.4rem`,
        }}
      >
        <div
          style={{
            display: `inline-block`,
            width: `20%`,
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {initials}
            </Link>
          </h1>
        </div>
        <div
          style={{
            display: `inline-block`,
            width: `10%`,
          }}
        >
        </div>
        <div
          style={{
            display: `inline-block`,
            width: `70%`,
          }}
        >
          <Navbar />
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  initials: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  initials: `ME`,
}

export default Header
