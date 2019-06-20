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
      <section id="accomodations" className="py-4">
        <Title title="accomodations" />
        <div className="text-center">
          <p>
            <strong>The Riverside Hotel</strong>
          </p>
          <p>
            <a className="clean-links" href="tel:208-343-1871">
              <strong>Phone:</strong> &nbsp; (208) 343-1871
            </a>
          </p>
          <p>
            Hotel price is $107.00 per night at the Riverside Hotel when you
            mention being apart of the Gem State Roundup.
          </p>
        </div>
        <div className="row">
          <div className="container px-2 py-2 mb-4">
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
