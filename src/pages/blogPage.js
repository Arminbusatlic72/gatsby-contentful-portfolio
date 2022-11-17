import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { Text, Box, Space, FlexList, Section, Container} from "../components/ui"

const BlogPage = ({ data }) => {
const posts = data.allContentfulBlogPost.nodes
console.log(posts);
  return (
            <Layout>
               <Section>
                  <Container>
                        {posts.map(post => (
                              <FlexList  variant="center" responsive>
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
                              </FlexList>
                          ))}
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


export default BlogPage


