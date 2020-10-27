import React from "react"

import SEO from "../seo/seo"
import Layout from "../layout-template/layout.component"
import CustomButton from "../custom-button/custom-button.component"
import Footer from "../footer/footer.component"

import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Img from "gatsby-image"

import {
  HeaderContainer,
  ImageContainer,
  ButtonContainer,
  DescriptionContainer,
} from "./projects-page-layout.styles.js"

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  let project = mdx.frontmatter

  let featuredImageFluid = project.featuredImage.childImageSharp.fluid

  return (
    <div>
      <SEO title={project.title} />
      <HeaderContainer>
        <Link className="back" to="/">
          ≤--- Back to home
        </Link>
        <h1>{project.title}</h1>
      </HeaderContainer>
      <Layout>
        <ImageContainer>
          <Img fluid={featuredImageFluid} />
        </ImageContainer>
        <DescriptionContainer>
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
          <ButtonContainer>
            <a
              href={project.liveSite}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CustomButton>Live</CustomButton>
            </a>
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CustomButton>Code</CustomButton>
            </a>
          </ButtonContainer>
        </DescriptionContainer>
        <Footer />
      </Layout>
    </div>
  )
}

export const pageQuery = graphql`
  query ProjectPagesQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        liveSite
        repository
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
