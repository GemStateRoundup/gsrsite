/* eslint-disable */
import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Globals/Header"
import EventSchedules from "../components/Globals/EventSchedules"

const EventSchedule = () => (
  <Layout>
    <SEO
      title=" Event Schedule"
      keywords={[
        `Gem State Roundup`,
        `Alcoholics Anonymous`,
        `Riverside Hotel`,
        `Boise Idaho`,
      ]}
    />
    <Header title="Event Schedule" />
    <EventSchedules />
  </Layout>
)

export default EventSchedule
