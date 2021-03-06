import React from "react"
import PropTypes from "prop-types"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = ({ location, children }) => {

  // console.log(location, children)

  return (
    <>
      <Header path={location && location.pathname ? location.pathname : "/"} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
