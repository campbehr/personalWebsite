import React from "react"
import { RightMainContainer } from "./right-main.styles"
import HeroImg from "../hero-img/hero-img.component"
import WidgetBar from "../social-widgets/social-widgets.component"

import CustomBtn from "../custom-btn/custom-btn.component"

const RightMain = () => {
  return (
    <RightMainContainer>
      <HeroImg />
      <WidgetBar />
      <CustomBtn>Contact Me</CustomBtn>
    </RightMainContainer>
  )
}

export default RightMain
