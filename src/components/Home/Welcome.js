import React from "react"
import Title from "../Globals/Title"

export default function Welcome() {
  return (
    <section id="welcome" className="pt-3 pb-5">
      <div className="container">
        <Title title="welcome" />
        <div className="row">
          <div className="col-12 col-sm-10 mx-auto text-center">
            <p className="lead text-muted mb-5">
                <strong>Update:</strong> As of 8/8/22 our registration totals are up to 98. Our maximum capacity is 160 in the Jordan Ballroom.
                Online/paper registration will close on 8/20, at which time we will accommodate in-person registration at Boise
                State until we reach capacity. Zoom registration will remain open until 8/25 at 12 Noon. We can accommodate an
                additional 100 people via Zoom.
            </p>
             <p className="lead mb-5">
              We look forward to seeing you there!
            </p>
            <p className="lead text-muted mb-5">
                Hello Everyone, and Welcome Back! We are glad to host you for our 2022 Gem State Round Up, held this year on the
                beautiful, riverside campus of Boise State, inside the Jordan Ballroom, in downtown Boise, Idaho! This is our 1st
                Round Up since 2019, and we decided to make this year’s event a full one day, no holds barred – lollapalooza!
            </p>
            <p className="lead text-muted mb-5">
                Our event this year is being co-hosted with Al-Anon participation, panels hosted by AA and Al-Anon Groups from
                across the state, an Al-Anon Luncheon, Joy P. our speaker is from British Columbia, Canada, and our featured AA
                Speaker, Rod B. from Salt Lake City – after our evening meal. We’ll wrap up the day with a comedian and hypnotist –
                Terry Stokes – all the way from Las Vegas, NV. S
            </p>
            /*
            <Title title="Dinner Banquet Info" />
            <div>
              <p className="lead text-muted mb-5">
                This year, we will be leveraging the food service facilities
                which the University uses on campus for all events. For both
                lunch and dinner, we’ll be serving from a buffet located inside
                the Ballroom space. Full details of the meals, and associated
                pricing, for both lunch and dinner are available in the tabs
                below.
              </p>
            </div>
            <Title title="Registration Info" />
            <p className="lead text-muted mb-4">
              Please check event site registration information by clicking the
              Schedule link provided in the navigation above. Additionally you
              may still download a copy of The Gem State Roundup Registration
              Form by clicking the button below. Please present it at the
              registration desk in the lobby at the event when you arrive.
            </p>
           */
          </div>
        </div>
      </div>
    </section>
  )
}
