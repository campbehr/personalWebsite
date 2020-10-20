import React from "react"
import {
  PortfolioContainer,
  ChildDiv,
  LeftContainer,
  RightContainer,
  Title,
} from "./portfolio.styles"

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <Title>Portfolio</Title>
      <LeftContainer>
        <ChildDiv />
      </LeftContainer>
      <RightContainer>
        <ChildDiv />
      </RightContainer>
      <LeftContainer>
        <ChildDiv />
      </LeftContainer>
    </PortfolioContainer>
  )
}

export default Portfolio
