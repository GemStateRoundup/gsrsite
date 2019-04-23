import React from "react"
import BackgroundImage from "gatsby-background-image"

export default function MainHero({ img, styleClass }) {
  return <BackgroundImage className={styleClass} fluid={img} />
}

MainHero.defaultProps = {
  styleClass: "default-background",
}
