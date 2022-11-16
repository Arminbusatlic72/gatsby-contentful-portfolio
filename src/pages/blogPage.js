import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const BlogPage = ({ data }) => {
const posts = data.allContentfulBlogPost.nodes
console.log(posts);
  return (
    <Layout>
      <ul>
        {posts.map(post => (
          <div>
            <Link to={`/blog/${post.slug}`}>
                <li key={post.id}>
                  <h2>{post.title}</h2>
                  <GatsbyImage
                    alt={post.image.alt}
                    image={getImage(post.image.gatsbyImageData)}
                  />
                </li>
              </Link>
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
        id
        image {
          alt
          gatsbyImageData
        }
      }
    }
  }
`


export default BlogPage


