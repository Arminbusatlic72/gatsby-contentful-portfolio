import React from "react"
import { graphql } from "gatsby"
import { render } from "react-dom"

const Page = ({ data }) => {
  console.log(data)
  return <h1>Hello</h1>
}

export const query = graphql`
  query {
    allContentfulHomepageProduct {
      edges {
        node {
          slug
        }
      }
    }
  }
`

export default Page
