import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import logo from "../../images/logo.png"
import "./styles/header.scss"
import "./styles/navigation.scss"

const Header = ({ siteTitle, bgcolor }) => {
  return (
    <div className={`top_menu fixed-top bg-${bgcolor}`}>
      <Container>
        <Navbar expand="md">
          <Navbar.Brand href="/">
            <img src={logo} alt={siteTitle} height="60" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <ul>
                <li>
                  <Nav.Link
                    as={Link}
                    to={"/"}
                    key={"signin"}
                    activeClassName="active"
                    className={`text-orange`}
                  >
                    Sign In
                  </Nav.Link>
                </li>
                <li className="select-plan">
                  <Nav.Link
                    as={Link}
                    to={"/register"}
                    key={"select-a-plan"}
                    activeClassName="active"
                    className={`btn btn-primary`}
                  >
                    Select a Plan
                  </Nav.Link>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
