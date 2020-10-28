import styled, { css } from "styled-components"

export const PortfolioContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 2;
`
export const Title = styled.h2`
  padding-bottom: 2em;

  @media screen and (min-width: 750px) {
    padding-top: 2em;
  }
`
export const TitleBox = styled.div`
  width: 300px;
  height: 150px;
  margin: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: white;
  box-shadow: 2px 2px 2px 2px fuchsia;
`

export const ThumbnailTitleContainer = styled.article`
  position: absolute;
  width: 200px;
  height: 100px;
  margin: 200px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 10px;
  background-color: black;
  opacity: 0.6;
  z-index: 5;

  &:hover {
    opacity: 0.9;
  }

  @media screen and (min-width: 750px) {
    margin: 200px 150px;
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

export const ThumbnailContainer = styled.div`
  width: 290px;
  height: 490px;
  background-color: white;
  border-radius: 10px;

  div {
    height: 100%;
  }

  @media screen and (min-width: 750px) {
    width: 490px;
  }
`

export const LeftThumbnailContainer = styled.div`
  ${centerChild}
  background-color: black;
  margin-bottom: 50px;

  @media screen and (min-width: 900px) {
    margin-right: 40%;
  }

  @media screen and (min-width: 1400px) {
  }
`

export const RightThumbnailContainer = styled.div`
  ${centerChild}
  background-color: purple;
  margin-bottom: 50px;

  @media screen and (min-width: 900px) {
    margin-left: 40%;
  }

  @media screen and (min-width: 1400px) {
    margin-top: -200px;
  }
`
