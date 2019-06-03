import React from "react"

export default function Header({ title }) {
  return (
    <div className="row pages">
      <div className="col text-center">
        <h1 className="display-4 text-capitalize font-weight-bold text-white header-title">
          {title}
        </h1>
      </div>
    </div>
  )
}
