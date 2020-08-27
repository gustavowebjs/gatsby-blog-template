import React from "react"
import Layout from "../components/Layout"

import { graphql, Link } from "gatsby"

export default function Home({ data }) {
  return (
    <Layout>
      <div className="container">
        <div className="header-index">
          <h1 style={{ marginTop: 20 }}>Some amazing posts about Tech</h1>
        </div>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="list-posts">
            <Link to={node.fields.slug}>
              <h3>{node.frontmatter.title}</h3>
            </Link>

            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          id
          frontmatter {
            title
            author
          }
          excerpt
        }
      }
    }
  }
`
