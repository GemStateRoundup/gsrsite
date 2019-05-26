import React, { Component } from "react"
import Title from "../Globals/Title"

export default class Contact extends Component {
  state = {
    selectedOption: "No",
    name: "",
    email: "",
    phone: "",
    message: "",
  }

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value,
    })
  }

  onSubmit = () => {
    console.log(this.state)
  }

  render() {
    return (
      <section id="contact" className="py-5 grey-background">
        <div className="row">
          <div className="col-12 col-sm-10 mx-auto text-center">
            <div className="container">
              <Title title="contact" />

              <form
                className="py-5"
                target="_self"
                method="POST"
                id="mG61Hd"
                action="https://docs.google.com/forms/d/e/1FAIpQLSebWMHyDYkFG7VExDU7DrcG_z_fVtYys-KHVnwVFJ1RyLUVPA/formResponse"
              >
                <p>Please Contact Me For A Commitment:</p>
                <div className="form-check form-group row">
                  <div className="col-sm-12">
                    <div className="form-check">
                      <input
                        name="entry.1574635650"
                        className="form-check-input"
                        type="radio"
                        id="commitment-yes"
                        value="Yes"
                        checked={this.state.selectedOption === "Yes"}
                        onChange={this.handleOptionChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="commitment-yes"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        name="entry.1574635650"
                        className="form-check-input"
                        type="radio"
                        id="commitment-no"
                        value="No"
                        checked={this.state.selectedOption === "No"}
                        onChange={this.handleOptionChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="commitment-no"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-12">
                    <label htmlFor="name">Name:</label>
                    <input
                      name="entry.1141188181"
                      value={this.state.name}
                      onChange={e => this.setState({ name: e.target.value })}
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name..."
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-12">
                    <label htmlFor="email">Email:</label>
                    <input
                      name="entry.875360458"
                      value={this.state.email}
                      onChange={e => this.setState({ email: e.target.value })}
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email..."
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-12">
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                      name="entry.1639807107"
                      value={this.state.phone}
                      onChange={e => this.setState({ phone: e.target.value })}
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="Your Area Code & Phone Number...example 208-555-1212"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-12">
                    <label htmlFor="textarea">Message:</label>
                    <textarea
                      name="entry.1060375794"
                      value={this.state.message}
                      onChange={e => this.setState({ message: e.target.value })}
                      id="message"
                      className="form-control"
                      rows="5"
                      placeholder="Your Message here..."
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-12">
                    <button
                      type="submit"
                      className="btn btn-block btn-pink text-uppercase"
                      onClick={() => this.onSubmit()}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
