import styled from "styled-components"

export const FooterContainer = styled.footer`
  /* Section width and height controlled through the "grid" component */
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  justify-content: space-between;
  background-color: black;
  width: 100vw;
  z-index: 2;
  /* box-shadow: 2px 2px 4px 1px black; */

  @media screen and (min-width: 750px) {
    width: 80%;
    justify-self: flex-start;
    box-shadow: 2px 2px 4px 1px black;
  }

  @media screen and (min-width: 1100px) {
    flex-direction: row-reverse;
  }
`
