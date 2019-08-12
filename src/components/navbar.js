import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import CONFIG from "./../../me-config"

const Navbar = ({ navLinks }) => {
  navLinks = CONFIG.navLinks || navLinks

  const navLinksList = navLinks.map(({href, title}, index) => {
    return (
      <li
        key={index}
        style={{
          display: `inline-block`,
          margin: `.4rem .8rem`,
        }}
      >
        <Link
          title={title}
          to={href}
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {title}
        </Link>
      </li>
    )
  })

  return (
    <nav>
      <ul
        style={{
          margin: 0,
          listStyle: `none`,
          textAlign: `right`,
        }}
      >
        {navLinksList}
      </ul>
    </nav>
  )
}

Navbar.propTypes = {
  navLinks: PropTypes.array,
}

Navbar.defaultProps = {
  navLinks: [
    {
      href: `/`,
      title: `Home`,
    },
    {
      href: `/projects`,
      title: `Projects`,
    },
    {
      href: `/resume`,
      title: `Resume`,
    },
  ],
}

export default Navbar
