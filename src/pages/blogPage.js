import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { Text, Box, Space, FlexList, Section, Container, Heading} from "../components/ui"

const BlogPage = ({ data }) => {
const posts = data.allContentfulBlogPost.nodes
  return (
           <Box>
                 {posts.map(post => (
                            <Link to={`/blog/${post.slug}`}>
                                <Box width="third" padding={4} center>
                                    <Box>
                                          {post.title && (
                                            <GatsbyImage
                                              alt={post.image.alt}
                                              image={getImage(post.image.gatsbyImageData)}
                                              />
                                          )}
                                    </Box>
                                    <Space size={2} />
                                    <Box>
                                          {post.title && (
                                            <Text variant="medium">
                                             {post.title}
                                            </Text>
                                          )}
                                    </Box>
                                </Box>
                            </Link>
                        ))}
           </Box>
          )
  }

  export default function BlogPostList(posts) {
    const blogPost = posts.data
    console.log(blogPost);
    return (
            <Layout>
                  <Section>
                    <Container width="tight">
                      <FlexList gap={0} variant="center" alignItems="start">
                      {blogPost.map(posts => (
                          <BlogPage {...posts}/>
                      ))}
                      </FlexList>
                    </Container>
                  </Section>
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





