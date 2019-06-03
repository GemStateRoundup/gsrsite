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
      <section id="swag" className="py-4">
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
                        className="btn btn-blue btn-lg btn-block mt-auto snipcart-add-item"
                        data-item-id={node.id}
                        data-item-name={node.item}
                        data-item-price={node.price}
                        data-item-image={node.image.fluid.src}
                        data-item-url="http://gemstateroundup.netlify.com"
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
