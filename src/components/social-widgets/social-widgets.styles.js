import styled from "styled-components"

export const StyledSocialBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 140px;
  width: 100%;
  z-index: 2;

  .widget {
    height: 55px;
    width: 55px;
  }

  @media screen and (min-width: 750px) {
    .widget {
      padding-top: 30px;
    }
  }

  @media screen and (min-width: 900px) {
    width: 80%;
  }
`
