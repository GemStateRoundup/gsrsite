import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Title from "../Globals/Title"

export default () => (
  <StaticQuery
    query={graphql`
      {
        allContentfulSwag {
          edges {
            node {
              id
              item
              image {
                fluid(maxWidth: 300) {
                  src
                  ...GatsbyContentfulFluid_tracedSVG
                }
              }
              price
              description {
                description
              }
              category
            }
          }
        }
      }
    `}
    render={data => (
      <section className="py-5">
        <div className="container">
          <Title title="Swag" />
          <div className="row">
            {data.allContentfulSwag.edges.map(({ node }) => {
              return (
                <div className="col-sm-12 col-md-6 col-lg-4 mt-4" key={node.id}>
                  <div className="card h-100">
                    <Img fluid={node.image.fluid} />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{node.item}</h5>
                      <p className="card-text">
                        <strong>Details:</strong>&nbsp;
                        {node.description.description}
                      </p>
                      <p className="card-text">
                        <strong>Price:</strong>&nbsp;
                        <span>$</span>
                        {node.price}
                        <span>.00</span>
                      </p>
                      <button
                        type="button"
                        className="btn btn-pink btn-lg btn-block mt-auto"
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
