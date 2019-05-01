import React, { Component } from "react"
import GoogleMapReact from "google-map-react"

const HotelLocation = ({ text }) => (
  <section>
    <div
      style={{
        color: "white",
        background: "#ee4aea",
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
      lat: 43.619837,
      lng: -116.235154,
    },
    zoom: 15,
  }

  render() {
    return (
      // Important! Always set the container height explicitly

      <div style={{ height: "500px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyAHlMBTfagMYZS3gyE3dkTkz1BiHJpesj0",
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <HotelLocation
            lat={43.619837}
            lng={-116.235154}
            text="Riverside Hotel"
          />
        </GoogleMapReact>
      </div>
    )
  }
}

export default GMap