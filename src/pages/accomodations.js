/* eslint-disable */
import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Globals/Header"
import GMap from "../components/Globals/GMap"
import Contact from "../components/Globals/Contact"

const Accomodations = title => (
  <Layout>
    <SEO
      title="Accomodations"
      keywords={[
        `Gem State Roundup`,
        `Alcoholics Anonymous`,
        `Riverside Hotel`,
        `Boise Idaho`,
      ]}
    />
    <Header title="Accomodations" />
    <Contact />
    <GMap />
  </Layout>
)

export default Accomodations
