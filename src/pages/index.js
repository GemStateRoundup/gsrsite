/* eslint-disable */
import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainHero from "../components/Home/MainHero"
import Checkout from "../components/Globals/Checkout"
import Welcome from "../components/Home/Welcome"
import Events from "../components/Home/Events"
import GMap from "../components/Home/GMap"
import Contact from "../components/Home/Contact"
import Accomodations from "../components/Home/Accomodations"

export default class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItem: null,
    }
    this.setState = this.setState.bind(this)
  }

  componentDidMount() {
    Snipcart.subscribe("item.added", item => {
      console.log("An item is added: ", item)
      this.setState({ cartItem: item })
    })
  }

  render() {
    return (
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
        <Checkout cartItem={this.state.cartItem} />
        <MainHero
          img={this.props.data.img.childImageSharp.fluid}
          styleClass="default-background"
        />
        <Welcome />
        <Events />
        <Contact />
        <Accomodations />
        <GMap />
      </Layout>
    )
  }
}

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
