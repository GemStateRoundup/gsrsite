import React, { Component } from "react"
import { FaCartArrowDown } from "react-icons/fa"

export default class Checkout extends Component {
  render() {
    const hide = this.props.cartItem ? "" : " hide"
    return (
      <div className={"checkout-wrapper" + hide}>
        <div className="snipcart-checkout checkout">
          <FaCartArrowDown className="cart-icon" />
          <span className="snipcart-summary ml-3 text-white">
            Items:&nbsp;
            <span className="snipcart-total-items" />
            &nbsp; Price:&nbsp;
            <span className="snipcart-total-price" />
          </span>
        </div>
      </div>
    )
  }
}
