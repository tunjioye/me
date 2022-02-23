import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import CONFIG from "../../me-config"

const Navbar = ({ navLinks }) => {
  navLinks = CONFIG.navLinks || navLinks

  const navLinksList = navLinks.map(({ href, title, target }, index) => {
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
          target={target}
          style={{
            color: `white`,
            textDecoration: `none`,
            textUnderlinePosition: `under`,
          }}
          activeStyle={{
            textDecoration: `underline`,
            textUnderlinePosition: `under`,
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
        {CONFIG?.resume?.url && (
          <li
            style={{
              display: `inline-block`,
              margin: `.4rem .8rem`,
            }}
          >
            <a
              href={CONFIG?.resume?.url}
              title={CONFIG?.resume?.title || `Resume`}
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CONFIG?.resume?.title || `Resume`}
            </a>
          </li>
        )}
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
  ],
}

export default Navbar
