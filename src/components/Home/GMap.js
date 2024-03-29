import React, { Component } from "react"
import GoogleMapReact from "google-map-react"
import Title from "../Globals/Title"

const HotelLocation = ({ text }) => (
  <section>
    <div
      style={{
        color: "white",
        background: "#808b7d",
        padding: "15px 10px",
        display: "inline-flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "100%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {text}
    </div>
  </section>
)

class GMap extends Component {
  static defaultProps = {
    center: {
      lat: 43.6036,
      lng: -116.208707,
    },
    zoom: 15,
  }

  render() {
    return (
      // Important! Always set the container height explicitly...
      <section id="location" className="pt-3 grey-background">
        <Title title="location" />
        <div className="text-center">
          <p>
            <a
              className="clean-links"
              href="https://goo.gl/maps/rSCTqcUYxENLmy8b9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Address:</strong> &nbsp; 1910 W University Dr. Boise, ID
              83725 <br />
              "The Jordan Ballroom"
            </a>
          </p>
        </div>
        <div style={{ height: "500px", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyAHlMBTfagMYZS3gyE3dkTkz1BiHJpesj0",
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <HotelLocation
              lat={43.6036}
              lng={-116.208707}
              text="Jordan Ballroom"
            />
          </GoogleMapReact>
        </div>
      </section>
    )
  }
}

export default GMap
