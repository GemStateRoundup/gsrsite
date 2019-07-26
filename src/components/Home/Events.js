import React from "react"
import { StaticQuery, graphql } from "gatsby"
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
      <section id="events" className="pt-3 pb-5 grey-background ">
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
                      {node.id === "472a23d0-a636-53ac-9919-2fac330e6557" ? (
                        <button
                          type="button"
                          className="btn btn-blue btn-lg btn-block mt-auto snipcart-add-item"
                          data-item-id={node.id}
                          data-item-name={node.event}
                          data-item-price={node.price}
                          data-item-price-vip="20.00"
                          data-item-image={node.image.fluid.src}
                          data-item-custom0-name="Home Group"
                          data-item-custom0-type="textarea"
                          data-item-custom1-name="Additional Registrants"
                          data-item-custom1-type="textarea"
                          data-item-url="https://gemstateroundup.org"
                        >
                          Add To Cart
                        </button>
                      ) : node.id === "daa21a34-00ce-53e0-b08d-afffb65daa48" ? (
                        <button
                          type="button"
                          className="btn btn-blue btn-lg btn-block mt-auto snipcart-add-item"
                          data-item-id={node.id}
                          data-item-name={node.event}
                          data-item-price={node.price}
                          data-item-image={node.image.fluid.src}
                          data-item-custom1-name="Main Entree"
                          data-item-custom1-options="Beef|Chicken|Salmon|Vegetarian"
                          data-item-custom1-value="Beef"
                          data-item-stackable="false"
                          data-item-url="https://gemstateroundup.org"
                        >
                          Add To Cart
                        </button>
                      ) : node.id === "b2f260bf-5a6c-5472-8d0f-dddcedcae311" ? (
                        <button
                          type="button"
                          className="btn btn-blue btn-lg btn-block mt-auto snipcart-add-item"
                          data-item-id={node.id}
                          data-item-name={node.event}
                          data-item-price={node.price}
                          data-item-image={node.image.fluid.src}
                          data-item-max-quantity="2"
                          data-item-url="https://gemstateroundup.org"
                        >
                          Add To Cart
                        </button>
                      ) : node.id === "2eee714b-82b9-51c9-8290-bd67ef3d9942" ? (
                        <button
                          type="button"
                          className="btn btn-blue btn-lg btn-block mt-auto snipcart-add-item"
                          data-item-id={node.id}
                          data-item-name={node.event}
                          data-item-price={node.price}
                          data-item-image={node.image.fluid.src}
                          data-item-custom2-name="Please Include Your Team Member's Names"
                          data-item-custom2-type="textarea"
                          data-item-url="https://gemstateroundup.org"
                        >
                          Add To Cart
                        </button>
                      ) : node.id === "b2ab3ccd-0eeb-5740-adc9-066872674994" ? (
                        <button
                          type="button"
                          className="btn btn-blue btn-lg btn-block mt-auto snipcart-add-item"
                          data-item-id={node.id}
                          data-item-name={node.event}
                          data-item-price={node.price}
                          data-item-image={node.image.fluid.src}
                          data-item-custom1-name="Donation Amount"
                          data-item-custom1-options="Single Scoop|Double Scoop[+15.00]|Triple Scoop[+40.00]|Hot Fudge Sunday[+65.00]|Banana Split[+90.00]"
                          data-item-custom1-value="Standard"
                          data-item-stackable="false"
                          data-item-url="https://gemstateroundup.org"
                        >
                          Add To Cart
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-blue btn-lg btn-block mt-auto snipcart-add-item"
                          data-item-id={node.id}
                          data-item-name={node.event}
                          data-item-price={node.price}
                          data-item-image={node.image.fluid.src}
                          data-item-url="https://gemstateroundup.org"
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
