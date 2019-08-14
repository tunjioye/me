import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query ProjectsPageQuery {
      markdownRemark(frontmatter: {path: {eq: "/projects"}}) {
        html
      }
    }
  `)

  const { markdownRemark } = data
  const { html } = markdownRemark

  return (
    <Layout>
      <SEO title="Page two" />
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export default SecondPage
