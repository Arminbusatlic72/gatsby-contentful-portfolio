import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { Text, Box, Space, FlexList, Section, Container} from "../components/ui"

const BlogPage = (props) => {
// const post = props.allContentfulBlogPost.nodes
console.log(props);
  return (
           <Box>
                            <Link to={`/blog/${props.slug}`}>
                                <Box width="third" padding={4} center>
                                    <Box>
                                          {props.title && (
                                            <GatsbyImage
                                              alt={props.image.alt}
                                              image={getImage(props.image.gatsbyImageData)}
                                              />
                                          )}
                                    </Box>
                                    <Space size={2} />
                                    <Box>
                                          {props.title && (
                                            <Text variant="medium">
                                             {props.title}
                                            </Text>
                                          )}
                                    </Box>
                                </Box>
                            </Link>
           </Box>
          )
  }

  export default function BlogPostList(props) {
    // const post = props.allContentfulBlogPost
    console.log(props);
    return (
            <Layout>
                  <Section>
                    <Container width="tight">
                      <FlexList gap={0} variant="center" alignItems="start">
                      {props.data.allContentfulBlogPost.nodes.map((post) => (
                          <BlogPage key={post.id} {...post}/>
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





