import styled, { css } from "styled-components"
import colors from "../../styles-global/colors"

export const Background = styled.article`
  display: flex;
  height: auto;
  background-color: ${colors.two};
  z-index: 5;

  @media screen and (min-width: 750px) {
    width: 80%;
    justify-self: flex-end;
    box-shadow: 2px 2px 4px 1px black;
  }
`

export const AboutContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const divStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContentContainer = styled.div`
  ${divStyles}

  @media screen and (min-width: 750px) {
    max-width: 900px;
  }
`

export const SectionTitle = styled.h2`
  padding-top: 1rem;
`

export const SectionPara = styled.p`
  padding: 0 1.5rem;
  font-size: 18px;
  line-height: 1.6em;
  text-align: justify;

  @media screen and (min-width: 1440px) {
    padding-left: 60px;
  }
`
export const Button = styled.button`
  margin-top: 30px;
`

export const ButtonContainer = styled.div`
  ${divStyles}
  width: 50%;
  height: 200px;
  justify-content: space-evenly;

  @media screen and (min-width: 750px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`
