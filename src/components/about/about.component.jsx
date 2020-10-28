import React from "react"
import CustomButton from "../custom-button/custom-button.component"
import {
  AboutContainer,
  ContentContainer,
  SectionTitle,
  SectionPara,
  ButtonContainer,
  Background,
} from "./about.styles"

const About = () => {
  return (
    <Background>
      <AboutContainer>
        <ContentContainer>
          <SectionTitle>About</SectionTitle>
          <SectionPara>
            Thanks for stopping by my page! This site showcases my projects to
            date which you can view and access below. I've also included a
            summary of the libraries and frameworks used on each project as well
            as my general takeaways. Now, on to a little more about myself.
          </SectionPara>
          <SectionPara>
            I enjoy trying new things - whether it be in the kitchen, traveling,
            or enjoying the outdoors. I find the unknown pretty exciting. I've
            always been a big picture person but I will obsess over the small
            things if not done correctly. I like collaborative efforts but I
            also enjoy running with my own responsibilities. Other than that, I
            consider myself a creative person and life long learner.
          </SectionPara>
          <SectionPara>
            <h3>Skills proficient in</h3>
            Javascript // React // SASS // Styled-Components // GraphQL <br />
            <h3>Other Skills</h3>
            Git // CSS3 // HTML5 // Github // Bootstrap // npm
          </SectionPara>
        </ContentContainer>
        <ButtonContainer>
          {/* Resume linked to public google doc set for view only */}
          <a
            href="https://docs.google.com/document/d/1mA3o5YYVEyXDly46XLi9vap2lH-dH129Wj7ntH_qVzQ/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomButton>Resume</CustomButton>
          </a>
          <a
            href="https://medium.com/@hunter.campbell843"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CustomButton>Articles</CustomButton>
          </a>
        </ButtonContainer>
      </AboutContainer>
    </Background>
  )
}

export default About
