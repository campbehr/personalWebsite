import styled from "styled-components"

export const StyledHeroImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 250px;
  width: 250px;
  // border-style: solid;
  // border-color: red;
  border-radius: 50%;
  overflow: hidden;
  z-index: 2;

  div {
    width: 400px;
    right: 50px;
  }

  @media screen and (min-width: 1000px) {
    height: 350px;
    width: 350px;

    div {
      width: 550px;
      right: 75px;
    }
  }
`
