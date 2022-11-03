import React from "react";
import Link from "gatsby-link";
import Layout from "../components/layout"
import { graphql } from "gatsby"
// import PostLink from "../templates/blog-post.js"

const Page = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default Page;
    