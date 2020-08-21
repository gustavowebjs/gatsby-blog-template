import React from "react"
import Layout from "../components/Layout"

import { graphql, Link } from "gatsby"

export default function Home({ data }) {
  return (
    <Layout>
      <div className="container">
        <h1 style={{ marginTop: 20 }}>Some Amazing posts about Tech</h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="list-posts">
            <Link to={node.fields.slug}>
              <h3>
                {node.frontmatter.title}
                <span>— {node.frontmatter.author}</span>
              </h3>
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
