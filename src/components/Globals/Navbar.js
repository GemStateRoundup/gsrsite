import React, { Component } from "react"
import { Link } from "gatsby"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "home",
      },
      {
        id: 2,
        path: "/#welcome",
        text: "welcome",
      },
      {
        id: 3,
        path: "/#events",
        text: "events",
      },
      {
        id: 4,
        path: "/#swag",
        text: "swag",
      },
      {
        id: 5,
        path: "/#contact",
        text: "contact",
      },
      {
        id: 6,
        path: "/#accomodations",
        text: "accomodations",
      },
      {
        id: 7,
        path: "/#location",
        text: "location",
      },
      {
        id: 8,
        path: "/event-schedule",
        text: "schedule",
      },
    ],
  }

  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({
          navbarOpen: false,
          css: "collapse navbar-collapse",
        })
      : this.setState({
          navbarOpen: true,
          css: "collapse navbar-collapse show",
        })
  }

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-xl bg-dark navbar-dark navbar-custom">
        <Link to="/" className="navbar-brand">
          <span>Gem State Roundup {new Date().getFullYear().toString()}</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav ml-auto">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item">
                  <Link
                    to={link.path}
                    onClick={this.navbarHandler}
                    className="nav-link text-capitalize"
                  >
                    {link.text}
                  </Link>
                </li>
              )
            })}
            <div className="dropdown-divider" />
          </ul>
        </div>
      </nav>
    )
  }
}

/* <li className="nav-item nav-link">
  <FaCartArrowDown className="cart-icon snipcart-checkout" />
</li> */
