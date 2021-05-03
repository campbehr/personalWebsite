import React from "react"
import CustomButton from "../custom-button/custom-button.component"
import {
  AboutContainer,
  ContentContainer,
  SectionTitle,
  SectionPara,
  ButtonContainer,
  Background,
  Badge,
} from "./about.styles"

import badge from "./aws-certified-cloud-practitioner.png"

const About = () => {
  return (
    <Background>
      <AboutContainer>
        <ContentContainer>
          <SectionTitle>Skills/Certifications</SectionTitle>
          <SectionPara>
            <h3>Front End</h3>
            Javascript (ES6, ReactJS, GatsbyJS) // HTML // CSS3 // SASS // Git <br />
            <h3>Back End</h3>
            NodeJS // MongoDB // AWS <br />
            <Badge>
              <a href="https://www.youracclaim.com/badges/8aa04a16-dcd7-4bba-9cbe-775db7e54842/public_url">
                <img src={badge} alt="AWS CP certification" />
              </a>
            </Badge>
          </SectionPara>
          <SectionTitle>About</SectionTitle>
          <SectionPara>
            Thanks for stopping by my page! This site showcases my projects to
            date which you can view and access below. I've also included a
            summary of the libraries and frameworks used on each project as well
            as my general takeaways. Now, on to a little more about myself.
          </SectionPara>
          <SectionPara>
            I enjoy trying new things, whether it be in the kitchen, traveling,
            or enjoying the outdoors. I find the unknown pretty exciting. I've
            always been a big picture person but I will obsess over the small
            things if not done correctly. I like collaborative efforts but I
            also enjoy running with my own responsibilities. Other than that, I
            consider myself a creative person and life long learner.
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
