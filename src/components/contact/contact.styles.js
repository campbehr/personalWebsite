import styled from "styled-components"

export const Footer = styled.footer`
  display: flex;
  background-color: black;
  z-index: 2;

  @media screen and (min-width: 750px) {
    width: 80%;
    justify-self: flex-start;
    box-shadow: 2px 2px 4px 1px black;
  }
`
