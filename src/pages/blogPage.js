import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
// import blogStyles from "./blog.module.scss"


const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishDate(fromNow: true)
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <main>
        <h1>Blog</h1>
        <ol>
          {data.allContentfulBlogPost.edges.map(edge => {
            return (

              <li>
                <Link to={`/blog/${edge.node.slug}`}>
                  <div>
                    <h2>{edge.node.title}</h2>
                    <p>{edge.node.publishDate}</p>
                  </div>
                </Link>
              </li>

            )
          })}
        </ol>
      </main>
    </Layout>
  )
}

export default BlogPage
    