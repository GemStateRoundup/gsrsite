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
              Welcome to the Official Website of the 2019 Gem State Roundup in
              beautiful Boise Idaho. We are looking forward to fellowshipping
              with you during the weekend of August 9th, 10th and 11th. You can
              conveniently register for The Gem State Roundup and all events on
              this site. We have also included a telephone link to the Riverside
              Hotel in the Accomodations section and a Google Map in the
              Location section of the website to make booking and navigating a
              breaze. Please drop us a message in the Contact Form provided
              below if you would like to have a commitment at the Roundup or if
              you have a question that you need answered.Finally, please check
              the Schedule link in the main navigation for information regarding
              all scheduled panels, presentations and events.
            </p>
            <Title title="Dinner Banquet Info" />
            <div>
              <h5 className="mt-4">Main course is your choice of:</h5>
              <ul className="lead text-muted" style={{ listStyleType: "none" }}>
                <li>Crusted Beef Sirloin with Truffle Demi-glace</li>
                <li>
                  Herb-Marinated Chicken Breast with Garlic Rosemary Cream Sauce
                </li>
                <li>Herb-Crusted Salmon with Horseradish Cream Sauce</li>
                <li>Vegetarian Wellington</li>
              </ul>
              <p className="lead text-muted mt-0 mb-5">
                Each plate is served with a crisp green salad with assorted
                dressings, an assortment of rolls with butter, garlic mashed
                potatoes, mixed vegetables with vegetarian demi-glace. Meal
                finished with a Chocolate Panna Cotta with Cherry Gelee, Water,
                Iced Tea, Lemonade, and Coffee Service at each table
              </p>
            </div>
            <Title title="Registration Info" />
            <p className="lead text-muted mb-4">
              If you would feel more comfortable downloading a copy of The Gem
              State Roundup Registration Form instead of registering online
              click the button below.
            </p>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://drive.google.com/file/d/16gXjlw2ObiRRw5jePOfJIelaHg8gq5hx/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-blue btn-lg"> Download</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
