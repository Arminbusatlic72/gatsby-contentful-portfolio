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
} from "./ui"
import CategoryList from "./categoryList"
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
        {props.heading}Hello
      </Subhead>
      <Space size={3} />

      <Text variant="medium" left>
        {props.text}
      </Text>
      <LinkList links={props.links} />
    </Box>
  )
}

export default function ProductList(props) {
  return (
    <Section>
      <Container width="tight">
        <Box center paddingY={4}>
          <Heading>
            {props.kicker && <Kicker>{props.kicker}</Kicker>}
            {props.heading}
          </Heading>
          <CategoryList />
          {props.text && <Text>{props.text}</Text>}
        </Box>
        <FlexList gap={0} variant="center" alignItems="start">
          {props.content.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </FlexList>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageProductListContent on HomepageProductList {
    id
    kicker
    heading
    text
    content {
      id
      heading
      text
      image {
        alt
        id
        gatsbyImageData
      }
      links {
        id
        href
        text
      }
    }
  }
`
