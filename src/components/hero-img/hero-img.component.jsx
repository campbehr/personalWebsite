import React from "react"
import { StyledHeroImg } from "./hero-img.styles"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const HeroImg = () => {
  const data = useStaticQuery(graphql`
    query Hero {
      image: file(relativePath: { eq: "hero/hero.png" }) {
        childImageSharp {
          fluid(fit: INSIDE) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledHeroImg>
      <Img fluid={data.image.childImageSharp.fluid} />
    </StyledHeroImg>
  )
}

export default HeroImg
