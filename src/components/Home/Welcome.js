import React from "react"
import Title from "../Globals/Title"

export default function Welcome() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="welcome" />
        <div className="row">
          <div className="col-12 col-sm-10 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate tenetur rerum numquam laudantium, maxime quo quod, nam
              commodi aliquid amet neque repudiandae ea sed veniam corporis.
              Nostrum eaque aliquid sunt quidem ipsam. Dolorum nobis magni
              dolore veritatis architecto quia, cum nisi esse quam commodi?
              Consequatur ut quaerat velit doloribus est!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
