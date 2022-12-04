import * as React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { FlexList, Button } from "./ui"

const CategoryList = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulList {
        edges {
          node {
            id
            link
            slug
            name
          }
        }
      }
    }
  `)

  return (
    <FlexList gap={2} variant="left" alignItems="start">
      {data.allContentfulList.edges.map((edge) => (
        <Button to={`/kategorija/${edge.node.slug}`} key={edge.node.id}>
          {edge.node.name}
        </Button>
      ))}
    </FlexList>
  )
}

export default CategoryList
