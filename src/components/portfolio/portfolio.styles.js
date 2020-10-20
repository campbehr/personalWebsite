import styled, { css } from "styled-components"

export const PortfolioContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 2;
`
export const Title = styled.h2`
  padding-bottom: 1em;

  @media screen and (min-width: 750px) {
    padding-top: 4em;
  }
`

const centerChild = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 500px;
  box-shadow: 2px 2px 2px 2px grey;
  border-radius: 10px;

  @media screen and (min-width: 750px) {
    width: 500px;
  }
`
const margins = css`
  margin-bottom: 50px;
`

export const ChildDiv = styled.div`
  width: 290px;
  height: 490px;
  background-color: white;
  border-radius: 10px;

  @media screen and (min-width: 750px) {
    width: 490px;
  }
`

export const LeftContainer = styled.div`
  ${centerChild}
  ${margins}
  background-color: black;

  @media screen and (min-width: 900px) {
    margin-right: 40%;
  }

  @media screen and (min-width: 1400px) {
  }
`

export const RightContainer = styled.div`
  ${centerChild}
  ${margins}
  background-color: purple;

  @media screen and (min-width: 900px) {
    margin-left: 40%;
  }

  @media screen and (min-width: 1400px) {
    margin-top: -200px;
  }
`
