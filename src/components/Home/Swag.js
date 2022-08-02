import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Title from "../Globals/Title"

export default class Swag extends Component {
  state = {
    isActive: false,
    css: "swag",
  }

  toggleFlipped = () => {
    this.setState({
      isActive: !this.state.isActive,
    })
  }

  toggleFlipped = () => {
    this.state.isActive
      ? this.setState({
          isActive: false,
          css: "swag",
        })
      : this.setState({
          isActive: true,
          css: "swag flipped",
        })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            allContentfulSwag {
              edges {
                node {
                  id
                  item
                  imageFront {
                    id
                    fluid(maxWidth: 300) {
                      src
                      ...GatsbyContentfulFluid_tracedSVG
                    }
                  }
                  imageBack {
                    id
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
          <section id="swag" className="pt-3 pb-5">
            <div className="container">
              <Title title="Swag" />
              <div className="row">
                {data.allContentfulSwag.edges.map(({ node }) => {
                  return (
                    <div
                      className="col-sm-12 col-md-6 col-lg-4 mt-4"
                      key={node.id}
                    >
                      <div className="card h-100">
                        <div
                          className={this.state.css}
                          onClick={this.toggleFlipped}
                        >
                          <Img
                            className="front"
                            fluid={node.imageFront.fluid}
                          />
                          <Img className="back" fluid={node.imageBack.fluid} />
                        </div>
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
                          {node.id === "1687c0f9-ef28-52f6-a59c-629303b3acae" ||
                          node.id === "6091fcde-cc1a-56f0-93b1-b2e0026f7edb" ? (
                            <button
                              type="button"
                              className="btn btn-blue btn-lg btn-block mt-auto snipcart-add-item"
                              data-item-id={node.id}
                              data-item-name={node.item}
                              data-item-price={node.price}
                              data-item-image={node.imageFront.fluid.src}
                              data-item-custom1-name="Size"
                              data-item-custom1-options="Small|Medium|Large|X-Large|2X-Large|3X-Large"
                              data-item-custom1-value="Large"
                              data-item-url="https://gemstateroundup.org"
                            >
                              Add To Cart
                            </button>
                          ) : (
                            <button
                              type="button"
                              className="btn btn-blue btn-lg btn-block mt-auto snipcart-add-item"
                              data-item-id={node.id}
                              data-item-name={node.item}
                              data-item-price={node.price}
                              data-item-image={node.imageFront.fluid.src}
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
  }
}
