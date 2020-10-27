import styled from "styled-components"

export const LeftMainContainer = styled.aside`
  height: 200px;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  z-index: 2;

  @media screen and (min-width: 750px) {
    height: 750px;

    h1 {
      align-self: center;
    }
  }

  @media screen and (min-width: 1440px) {
    height: 950px;
  }
`
