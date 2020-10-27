import React from "react"
// import {AnchorLink} from 'gatsby-plugin-anchor-links'

import { RightMainContainer } from "./right-main.styles"
import HeroImg from "../hero-img/hero-img.component"
import WidgetBar from "../social-widgets/social-widgets.component"

import CustomButton from "../custom-button/custom-button.component"

const RightMain = () => {
  return (
    <RightMainContainer>
      <HeroImg />
      <WidgetBar />
      <a href="#contact">
        <CustomButton>Contact Me</CustomButton>
      </a>
    </RightMainContainer>
  )
}

export default RightMain
