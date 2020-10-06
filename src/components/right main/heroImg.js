import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const StyledHeroImg = styled.div`
  height: 250px;
  width: 250px;
  /* background-color: red; */
`

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
