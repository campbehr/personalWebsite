import React from "react"
import styled from "styled-components"
import HeroImg from "./right main/heroImg"
import WidgetBar from "./right main/widgets"

const StyledRightMain = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    height: 55px;
    width: 135px;
    border-radius: 20px;
    color: white;
    font-size: 20px;
    background-color: black;
  }
`

const RightMain = () => {
  return (
    <StyledRightMain>
      <HeroImg />
      <WidgetBar />
      <button>Contact Me</button>
    </StyledRightMain>
  )
}

export default RightMain
