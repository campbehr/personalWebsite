import React from "react"
import { StyledSocialBar } from "./social-widgets.styles"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const WidgetBar = () => {
  const data = useStaticQuery(graphql`
    query Social {
      widgetData: allWidgetsJson(sort: { fields: id, order: ASC }) {
        edges {
          node {
            id
            link
            name
            image {
              childImageSharp {
                fluid(fit: INSIDE) {
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
    <StyledSocialBar>
      {data.widgetData.edges.map(widgets => (
        <div className="widget">
          <a href={widgets.node.link} target="_blank" rel="noreferrer">
            <Img
              key={widgets.node.id}
              alt={widgets.node.name}
              fluid={widgets.node.image.childImageSharp.fluid}
            />
          </a>
        </div>
      ))}
    </StyledSocialBar>
  )
}

export default WidgetBar
