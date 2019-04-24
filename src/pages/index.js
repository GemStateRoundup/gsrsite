/* eslint-disable */
import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainHero from "../components/Home/MainHero"
import Welcome from "../components/Home/Welcome"
import GMap from "../components/Globals/GMap"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <MainHero
      img={data.img.childImageSharp.fluid}
      styleClass="default-background"
    />
    <Welcome />
    <GMap />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
