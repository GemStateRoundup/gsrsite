import React from "react"
import Title from "../Globals/Title"

export default function Welcome() {
  return (
    <section id="welcome" className="py-4">
      <div className="container">
        <Title title="welcome" />
        <div className="row">
          <div className="col-12 col-sm-10 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Welcome to the Official Website of the 2019 Gem State Roundup in
              beautiful Boise Idaho. We are looking forward to fellowshipping
              with you during the weekend of August 9th, 10th and 11th. You can
              conveniently register for The Gem State Roundup and all events on
              this site. We have also included a telephone link to the Riverside
              Hotel in the Accomodations section and a Google Map in the
              Location section of the website to make booking and navigating a
              breaze. Please drop us a message in the Contact Form provided
              below if you would like to have a commitment at the Roundup or if
              you have a question that you need answered.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
