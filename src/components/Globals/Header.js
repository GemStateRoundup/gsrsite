import React from "react"
import Title from "./Title"

export default function Header() {
  return (
    <section className="pt-5 default-background">
      <div className="row">
        <div className="col-12 text-center">
          <div className="container">
            <Title title="Header" />
          </div>
        </div>
      </div>
    </section>
  )
}

// Header.defaultProps = {
//   styleClass: "default-background",
// }
