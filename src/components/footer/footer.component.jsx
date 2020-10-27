import React from "react"
import Contact from "../contact/contact.component"
import Information from "../information/information.component"

import { FooterContainer } from "./footer.styles"

const Footer = () => {
  return (
    <FooterContainer>
      <Contact />
      <Information />
    </FooterContainer>
  )
}

export default Footer
