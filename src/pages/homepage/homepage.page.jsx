import React from "react"

import Layout from "../../components/layout-template/layout.component"
import SEO from "../../components/seo/seo"
import LeftMain from "../../components/left-main/left-main.component"
import RightMain from "../../components/right-main/right-main.component"
import About from "../../components/about/about.component"
import Portfolio from "../../components/portfolio/portfolio.component"
import Contact from "../../components/contact/contact.component"
import Squares from "../../components/background-animations/squares.component"

import {} from "./homepage.styles"

const HomePage = () => (
  <Layout>
    <Squares />
    <SEO title="Home" />
    <LeftMain />
    <RightMain />
    <About />
    <Portfolio />
    <Contact />
  </Layout>
)

export default HomePage
