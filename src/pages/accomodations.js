/* eslint-disable */
import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Globals/Header"

const Accomodations = title => (
  <Layout>
    <SEO title="Accomodations" keywords={[`Riverside Hotel`, `Boise Idaho`]} />
    <Header title="Accomodations" />
  </Layout>
)

export default Accomodations
