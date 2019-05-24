import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Title from "../Globals/Title"

export default () => (
  <StaticQuery
    query={graphql`
      {
        allContentfulEvents(sort: { fields: number }) {
          edges {
            node {
              id
              number
              event
              day
              date
              time
              amOrPm
              note
              image {
                fluid(maxWidth: 300) {
                  src
                  ...GatsbyContentfulFluid_tracedSVG
                }
              }
              price
              category
            }
          }
        }
      }
    `}
    render={data => (
      <section className="py-5">
        <div className="container">
          <Title title="Events" />
          <div className="row">
            {data.allContentfulEvents.edges.map(({ node }) => {
              return (
                <div className="col-sm-12 col-md-6 col-lg-4 mt-4">
                  <div className="card h-100">
                    <Img fluid={node.image.fluid} />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{node.event}</h5>
                      <p className="card-text">
                        <strong>Day:</strong>&nbsp;{node.day}
                      </p>
                      <p className="card-text">
                        <strong>Date:</strong>&nbsp;{node.date}
                      </p>
                      <p className="card-text">
                        <strong>Time:</strong>&nbsp;
                        {node.time}
                        <span>{node.amOrPm}</span>
                      </p>
                      <p className="card-text">
                        <strong>Price:</strong>&nbsp;
                        <span>$</span>
                        {node.price}
                        <span>.00</span>
                      </p>
                      <p className="card-text">
                        <strong>Details:</strong>&nbsp;{node.note}
                      </p>
                      <button
                        type="button"
                        class="btn btn-pink btn-lg btn-block mt-auto"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )}
  />
)
