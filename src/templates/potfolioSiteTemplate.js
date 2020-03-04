import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <main>
        <div className="">
        <h1>{frontmatter.title}</h1>
        <Img fluid={frontmatter.featuredimage.childImageSharp.fluid.src}/>
          <div className="">
            <div className="" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        path
        title
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp
            }
            fixed(width: 500) {
              src
            }
          }
        }
      }
    }
  }
`
