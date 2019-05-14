import React from "react"
import Title from "../Globals/Title"

export default function EventSchedules() {
  return (
    <div className="container mt-5 mb-5">
      <Title title="Friday" />
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col" />
            <th scope="col">Event</th>
            <th scope="col">Time</th>
            <th scope="col">Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">2</th>
            <td>Golf Tournament</td>
            <td>8:00AM - Shot Gun Start</td>
            <td>Boise Ranch Golf Course</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Registration</td>
            <td>1:00PM - 7:00PM</td>
            <td>Riverside Hotel</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Kickoff Meeting</td>
            <td>6:00PM - 9:00PM</td>
            <td>Riverside Hotel</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Alkathon & Alathon</td>
            <td>All Weekend</td>
            <td>Riverside Hotel</td>
          </tr>
        </tbody>
      </table>
      <Title title="Saturday" />
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col" />
            <th scope="col">Event</th>
            <th scope="col">Time</th>
            <th scope="col">Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Registration</td>
            <td>7:00AM - 7:00PM</td>
            <td>Riverside Hotel</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Hospitality Room</td>
            <td>7:00AM - 9:00PM</td>
            <td>Riverside Hotel</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Historical Trolley Tour</td>
            <td>9:00AM - 11:00AM</td>
            <td>Riverside Hotel</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Motorcycle Fun Run</td>
            <td>9:00AM - 11:00AM</td>
            <td>Riverside Hotel</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Al-Anon Luncheon</td>
            <td>11:30AM - 1:30PM</td>
            <td>Riverside Hotel</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Plated Dinner Party</td>
            <td>6:00PM - 9:00PM</td>
            <td>Riverside Hotel</td>
          </tr>
        </tbody>
      </table>
      <Title title="Sunday" />
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col" />
            <th scope="col">Event</th>
            <th scope="col">Time</th>
            <th scope="col">Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Hospitality Room</td>
            <td>7:00AM - 9:00AM</td>
            <td>Riverside Hotel</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Spiritual Breakfast</td>
            <td>9:00AM - 11:00AM</td>
            <td>Riverside Hotel</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
