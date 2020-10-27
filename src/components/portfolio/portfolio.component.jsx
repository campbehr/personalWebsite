import React from "react"

import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import {
  PortfolioContainer,
  ThumbnailContainer,
  ThumbnailTitleContainer,
  LeftThumbnailContainer,
  RightThumbnailContainer,
  Title,
} from "./portfolio.styles"

const AlternateThumbnailStyles = ({ id, ...otherProps }) =>
  id % 2 === 0 ? (
    <RightThumbnailContainer {...otherProps} />
  ) : (
    <LeftThumbnailContainer {...otherProps} />
  )

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query ProjectsForPortfolio {
      projects: allMdx(sort: { fields: frontmatter___id, order: ASC }) {
        nodes {
          frontmatter {
            id
            liveSite
            category
            path
            repository
            title
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <PortfolioContainer>
      <Title>Portfolio</Title>
      {data.projects.nodes.map(project => (
        <AlternateThumbnailStyles id={project.frontmatter.id}>
          <ThumbnailContainer>
            <Link to={project.frontmatter.path}>
              <ThumbnailTitleContainer>
                <h3>{project.frontmatter.category}</h3>
              </ThumbnailTitleContainer>
            </Link>
            <Img
              fluid={project.frontmatter.featuredImage.childImageSharp.fluid}
              alt={`${project.frontmatter.category}`}
            />
          </ThumbnailContainer>
        </AlternateThumbnailStyles>
      ))}
    </PortfolioContainer>
  )
}

export default Portfolio
