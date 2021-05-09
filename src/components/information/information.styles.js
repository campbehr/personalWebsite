import styled from "styled-components"

export const WizardContainer = styled.div`
  display: none;
  width: 600px;
  color: white;
  font-style: italic;
  font-weight: bold;

  @media screen and (min-width: 1100px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const FooterHeader = styled.div`
  width: 350px;
`

// export const FooterTitle = styled.div``

// export const FooterSocialLinks = styled.div``
