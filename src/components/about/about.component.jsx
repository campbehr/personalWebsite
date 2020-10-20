import React from "react"
import CustomBtn from "../custom-btn/custom-btn.component"
import {
  AboutContainer,
  ContentContainer,
  SectionTitle,
  SectionPara,
  BtnContainer,
  Background,
} from "./about.styles"

const About = () => {
  return (
    <Background>
      <AboutContainer>
        <ContentContainer>
          <SectionTitle>About</SectionTitle>
          <SectionPara>
            Allow me a moment to tell you a little about myself. Throughout my
            professional career I have had a wide range of jobs. From making
            denture molds, to construction, to banking, I've enjoyed them all
            but never felt satisfied at the end of a work week. I could never
            put my finger on what all of these jobs were missing but the day I
            found programming the lightbulb went off! Endless opportunities to
            create something new and the ability to show the word with just a
            few lines of code. Simply amazing! That was about a year ago, and
            I've spent all of my spare time trying to learn as much as I can
            since.
          </SectionPara>
          <SectionPara>
            Below you will find links to some of my projects, resume, and some
            articles that I have posted. At the bottom of the page you will find
            a contact form if you have any questions.
          </SectionPara>
          <SectionPara>- Thanks again for stopping by!</SectionPara>
        </ContentContainer>
        <BtnContainer>
          <CustomBtn>Resume</CustomBtn>
          <CustomBtn>Articles</CustomBtn>
        </BtnContainer>
      </AboutContainer>
    </Background>
  )
}

export default About
