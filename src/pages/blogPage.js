import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const BlogPage = ({ data }) => {
const posts = data.allContentfulBlogPost.nodes
console.log(posts);
  return (
    // <Layout>
    //   <ul>
    //     {posts.map(post => (
    //       <div>
    //         <Link to={`/blog/${post.slug}`}>
    //             <li key={post.id}>
    //               <h2>{post.title}</h2>
    //               <GatsbyImage
    //                 alt={post.image.alt}
    //                 image={getImage(post.image.gatsbyImageData)}
    //               />
    //             </li>
    //           </Link>
    //       </div>
    //     ))}
    //   </ul>
    // </Layout>
    <Layout>
       <ul>
         {posts.map(post => (
          <Link to={`/blog/${post.slug}`}>
              <Box width="third" padding={4} center>
              {post.image && (
                <GatsbyImage
                  alt={post.image.alt}
                  image={getImage(post.image.gatsbyImageData)}
                />
              )}
              <Space size={3} />
              <Box>
                {post.title && (
                  <Text variant="medium" bold center>
                    {post.title}
                  </Text>
                )}
              </Box>
            </Box>
        </Link>
    ))}}
       </ul>
   </Layout>




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


