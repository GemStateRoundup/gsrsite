/* eslint-disable */
/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Navbar from "./Globals/Navbar"
import Footer from "./Globals/Footer"
import GMap from "../components/Globals/GMap"
import Contact from "../components/Globals/Contact"

import "./bootstrap.min.css"
import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Contact />
    <GMap />
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
