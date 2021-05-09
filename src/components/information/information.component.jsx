import React from "react"

import { WizardContainer, FooterHeader } from "./information.styles"

const Information = () => {
  return (
    <WizardContainer>
      <FooterHeader>
        <p>
          "A wizard is never late, Frodo Baggins. Nor is he early. He arrives
          precisely when he means to".
        </p>
        <p>- Gandalf the Grey</p>
      </FooterHeader>
    </WizardContainer>
  )
}

export default Information
