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
      <section id="events" className="py-5 grey-background">
        <div className="container">
          <Title title="Events" />
          <div className="row">
            {data.allContentfulEvents.edges.map(({ node }) => {
              return (
                <div className="col-sm-12 col-md-6 col-lg-4 mt-4" key={node.id}>
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
                      {node.id === "daa21a34-00ce-53e0-b08d-afffb65daa48" ? (
                        <button
                          type="button"
                          className="btn btn-pink btn-lg btn-block mt-auto snipcart-add-item"
                          data-item-id={node.id}
                          data-item-name={node.event}
                          data-item-price={node.price}
                          data-item-image={node.image.fluid.src}
                          data-item-custom1-name="Main Entree"
                          data-item-custom1-options="Beef|Chicken|Salmon|Vegitarian"
                          data-item-custom1-value="Beef"
                          data-item-stackable="false"
                          data-item-url="http://gemstateroundup.netlify.com"
                        >
                          Add To Cart
                        </button>
                      ) : node.id === "b2f260bf-5a6c-5472-8d0f-dddcedcae311" ? (
                        <button
                          type="button"
                          className="btn btn-pink btn-lg btn-block mt-auto snipcart-add-item"
                          data-item-id={node.id}
                          data-item-name={node.event}
                          data-item-price={node.price}
                          data-item-image={node.image.fluid.src}
                          data-item-max-quantity="2"
                          data-item-url="http://gemstateroundup.netlify.com"
                        >
                          Add To Cart
                        </button>
                      ) : node.id === "2eee714b-82b9-51c9-8290-bd67ef3d9942" ? (
                        <button
                          type="button"
                          className="btn btn-pink btn-lg btn-block mt-auto snipcart-add-item"
                          data-item-id={node.id}
                          data-item-name={node.event}
                          data-item-price={node.price}
                          data-item-image={node.image.fluid.src}
                          data-item-max-quantity="2"
                          data-item-custom2-name="Your Golfing Partner's Name"
                          data-item-custom2-type="textarea"
                          data-item-url="http://gemstateroundup.netlify.com"
                        >
                          Add To Cart
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-pink btn-lg btn-block mt-auto snipcart-add-item"
                          data-item-id={node.id}
                          data-item-name={node.event}
                          data-item-price={node.price}
                          data-item-image={node.image.fluid.src}
                          data-item-url="http://gemstateroundup.netlify.com"
                        >
                          Add To Cart
                        </button>
                      )}
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
