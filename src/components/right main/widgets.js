import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const StyledSocialBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 120px;
  width: 100%;
  /* background-color: lightblue; */

  .widget {
    height: 55px;
    width: 55px;
  }
`

const WidgetBar = () => {
  const data = useStaticQuery(graphql`
    query Social {
      widgetImg: allFile(
        filter: { relativeDirectory: { eq: "widgets" } }
        sort: { fields: name, order: ASC }
      ) {
        nodes {
          id
          name
          childImageSharp {
            fluid(fit: INSIDE) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <StyledSocialBar>
      {data.widgetImg.nodes.map(widgets => (
        <div className="widget">
          <Img
            key={widgets.id}
            alt={widgets.name}
            fluid={widgets.childImageSharp.fluid}
          />
        </div>
      ))}
    </StyledSocialBar>
  )
}

export default WidgetBar
