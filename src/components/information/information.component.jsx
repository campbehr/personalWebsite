import React from "react"
import WidgetBar from "../social-widgets/social-widgets.component"

import { Link } from "gatsby"

import {
  InformationContainer,
  FooterHeader,
  FooterTitle,
  FooterSocialLinks,
} from "./information.styles"

const Information = () => {
  return (
    <InformationContainer>
      <FooterHeader>
        <FooterTitle>
          <h1>
            Hunter
            <br />
            Campbell
          </h1>
        </FooterTitle>
        <FooterSocialLinks>
          <WidgetBar />
        </FooterSocialLinks>
      </FooterHeader>
    </InformationContainer>
  )
}

export default Information
