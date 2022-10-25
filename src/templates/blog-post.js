import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import {
  Container,
  Flex,
  Box,
  Space,
  Heading,
  Text,
  Avatar,
} from "../components/ui"
import { avatar as avatarStyle } from "../components/ui.css"
import * as styles from "./blog-post.css"
// import { renderRichText } from "gatsby-source-contentful/rich-text"
import ContentfulRichTech from "../components/rich-text"
export default function BlogPost(props) {
  const { contentfulBlogPost } = props.data
  console.log(contentfulBlogPost)
  return (
    <Layout {...props} description={props.excerpt}>
      <Container>
        <Box paddingY={5}>
          <Heading as="h1" center>
            {contentfulBlogPost.title}
          </Heading>
          <Space size={4} />
          {props.author && (
            <Box center>
              <Flex>
                {props.author.avatar &&
                  (!!props.author.avatar.gatsbyImageData ? (
                    <Avatar
                      {...props.author.avatar}
                      image={props.author.avatar.gatsbyImageData}
                    />
                  ) : (
                    <img
                      src={props.author.avatar.url}
                      alt={props.author.name}
                      className={avatarStyle}
                    />
                  ))}
                <Text variant="bold">{props.author.name}</Text>
              </Flex>
            </Box>
          )}
          <Space size={4} />
          <Text center>
            {new Date(contentfulBlogPost.createdAt).toLocaleDateString()}
          </Text>
          <Space size={4} />
          {contentfulBlogPost.image && (
            <GatsbyImage
              alt={contentfulBlogPost.image.alt}
              image={contentfulBlogPost.image.gatsbyImageData}
            />
          )}
          <Space size={5} />

          <ContentfulRichTech richText={contentfulBlogPost.body} />
        </Box>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      image {
        gatsbyImageData
        alt
      }
      createdAt

      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            description
            gatsbyImageData(width: 400)
            __typename
          }
        }
      }
    }
  }
`
