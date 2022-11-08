import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const BlogPage = ({ data }) => {
const posts = data.allContentfulBlogPost.nodes
  return (
    <Layout>
      <ul>
        {posts.map(post => (
          <div>
                <li key={post.slug}>
                  <h2>{post.title}</h2>
                  <p>{post.image.id}</p>
                </li>
          </div>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulBlogPost {
      nodes {
        slug
        title
        image {
          id
          gatsbyImage
        }
      }
    }
  }
`


export default BlogPage


