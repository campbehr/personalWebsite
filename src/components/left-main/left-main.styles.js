import styled from "styled-components"

export const LeftMainContainer = styled.aside`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  z-index: 2;

  @media screen and (min-width: 750px) {
    justify-content: space-between;

    h1 {
      align-self: center;
    }
  }
`
