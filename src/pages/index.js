import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { contacts } from "../../me-config"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HomePageQuery {
      markdownRemark(frontmatter: { path: { eq: "/" } }) {
        html
      }
    }
  `)

  const { markdownRemark } = data
  const { html } = markdownRemark

  return (
    <Layout>
      <Seo title="Home" />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <p className="text-large">
        Check out some of my{" "}
        <Link to="/projects" className="projects-link">
          projects
        </Link>{" "}
        or{" "}
        <a href={`mailto:${contacts.email || ""}`} className="projects-link">
          Get in Touch
        </a>
      </p>
    </Layout>
  )
}

export default IndexPage
