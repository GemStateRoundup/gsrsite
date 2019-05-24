import React from "react"
import Carousel from "nuka-carousel"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Title from "../Globals/Title"

export default () => (
  <StaticQuery
    query={graphql`
      {
        allContentfulSlider(sort: { fields: number }) {
          edges {
            node {
              id
              image {
                fluid(maxWidth: 1000) {
                  src
                  ...GatsbyContentfulFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <section className="py-5">
        <Title title="accomodations" />
        <div className="row">
          <div className="container">
            <Carousel>
              {data.allContentfulSlider.edges.map(({ node }) => {
                return <Img fluid={node.image.fluid} key={node.id} />
              })}
            </Carousel>
          </div>
        </div>
      </section>
    )}
  />
)