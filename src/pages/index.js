/* eslint-disable */
import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainHero from "../components/Home/MainHero"
import Welcome from "../components/Home/Welcome"
import Events from "../components/Home/Events"
import Swag from "../components/Home/Swag"
import GMap from "../components/Home/GMap"
import Contact from "../components/Home/Contact"
import Accomodations from "../components/Home/Accomodations"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `Gem State Roundup`,
        `Alcoholics Anonymous`,
        `Boise ID`,
        `Riverside Hotel`,
      ]}
    />
    <MainHero
      img={data.img.childImageSharp.fluid}
      styleClass="default-background"
    />
    <Welcome />
    <Events />
    <Swag />
    <Contact />
    <Accomodations />
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
