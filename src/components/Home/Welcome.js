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
            As of August 20th, we've mostly closed down online registration. Zoom registration remains open, as well as contributions towards entertainment and our ongoing scholarship fund. 
            We are pleased to report that we have 137 registered participants! 
            In-person registration on the day of the event will be available on a 1st come, 1st served basis. 
            A total of 39 additional registrations will be accommodated for $30, payable in cash, check or card.
            </p>
             <p className="lead mb-5">
              Thank you for your support. See you August 27th at Boise State! LET'S HAVE SOME FUN!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
