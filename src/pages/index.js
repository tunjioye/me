import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HomePageQuery {
      markdownRemark(frontmatter: {path: {eq: "/"}}) {
        html
      }
    }
  `)

  const { markdownRemark } = data
  const { html } = markdownRemark

  return (
    <Layout>
      <SEO title="Home" />
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <p className="text-large">
        Check out some of my <Link to="/projects" className="projects-link">projects</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
