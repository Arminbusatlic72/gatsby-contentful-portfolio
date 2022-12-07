import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Container,
  Section,
  FlexList,
  Text,
  Kicker,
  Heading,
  Subhead,
  Box,
  Space,
  LinkList,
} from "../components/ui"
import Layout from "../components/layout"
import CategoryList from "../components/categoryList"
function Product(props) {
  return (
    <Box width="third" padding={4} left>
      {props.image && (
        <GatsbyImage
          alt={props.image.alt}
          image={getImage(props.image.gatsbyImageData)}
          size="large"
        />
      )}
      <Space size={3} />
      <Subhead variant="large" bold center>
        {props.heading}
      </Subhead>
      <Space size={3} />

      <Text variant="medium" left>
        {props.text}
      </Text>
      <LinkList links={props.links} />
    </Box>
  )
}

export default function CategoryPage(props) {
  console.log(props)
  return (
    <Layout>
      <Section>
        <Container width="tight">
          <Box center paddingY={4}>
            <Heading>
              {/* {props.data.allContentfulHomepageProduct.edges[0].node.category} */}
            </Heading>
            <CategoryList />
          </Box>
          <FlexList gap={0} variant="center" alignItems="start">
            {props.data.allContentfulHomepageProduct.edges.map((product) => (
              <Product key={product.node.id} {...product.node} />
            ))}
          </FlexList>
        </Container>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String) {
    allContentfulHomepageProduct(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          slug
          category
          heading
          image {
            alt
            gatsbyImageData
          }
          text
          links {
            href
          }
        }
      }
    }
  }
`
