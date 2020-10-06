import React from "react"
import LeftMain from "../components/leftMain"
import RightMain from "../components/rightMain"
import About from "../components/about"
import Portfolio from "../components/portfolio"
import Contact from "../components/contact"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <LeftMain />
    <RightMain />
    <About />
    <Portfolio />
    <Contact />
    <SEO title="Home" />
  </Layout>
)

export default IndexPage
