import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"

export default function Post({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <div className="container">
        <h1 style={{ marginTop: 20 }}> {post.frontmatter.title} </h1>

        <div
          style={{ textAlign: "justify" }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <div>
          <h5>Author: {post.frontmatter.author}</h5>
        </div>

        <Link to="/">
          <button className="link">Back to posts</button>
        </Link>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
      }
    }
  }
`
