import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Container,
  FlexList,
  Section,
  Text,
  Box,
  Space,
  Heading,
} from "../components/ui"
import Layout from "../components/layout"
function BlogPost(props) {
  return (
    <Box width="half" padding={4} center>
      <Link to={`/blog/${props.node.slug}`}>
        {props.node.image && (
          <GatsbyImage
            alt={props.node.image.alt}
            image={getImage(props.node.image.gatsbyImageData)}
          />
        )}
        <Space size={3} />
        <Box>
          {props.node.title && (
            <Text variant="medium" bold center>
              {props.node.title}
            </Text>
          )}
        </Box>
      </Link>
    </Box>
  )
}

const Page = (props) => {
  return (
    <Layout>
      <Section>
        <Container width="tight">
          <Box center paddingY={4}>
            <Heading as={"h2"}>Blog posts</Heading>
          </Box>
          <FlexList gap={0} variant="center" alignItems="start">
            {props.data.allContentfulBlogPost.edges.map((blog) => (
              <BlogPost key={blog.node.id} {...blog} />
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
      edges {
        node {
          id
          title
          slug
          image {
            alt
            gatsbyImageData(height: 300, width: 300)
          }
        }
      }
    }
  }
`

export default Page
