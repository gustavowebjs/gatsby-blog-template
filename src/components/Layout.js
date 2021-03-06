import React from "react"
import Helmet from "react-helmet"
import "../style.css"
import Nav from "./Nav"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <>
      <Helmet></Helmet>
      <Nav />
      <main>{children}</main>

      <Footer />
    </>
  )
}
