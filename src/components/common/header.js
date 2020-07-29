import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar, Nav } from "react-bootstrap"
import logo from "../../images/logo.png"
import hamburger_icon from "../../images/hamburger-icon.svg"
import close from "../../images/close.svg"
import "./styles/header.scss"
import "./styles/navigation.scss"

const Header = ({ siteTitle, bgcolor }) => {
  const [menuToggle, setMenuToggle] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const setMenuToggleHandler = () => {
    setMenuToggle(!menuToggle)
  }
  
  window.onscroll = function() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		setIsScrolled(true)
	} else {
		setIsScrolled(false)
	}
  };
  
  return (
    <div className={`top_menu fixed-top bg-${bgcolor} is-scrolled-${isScrolled}`}>
      <Container>
        <Navbar expand="md">
          <Navbar.Brand href="/">
            LOGO
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={setMenuToggleHandler}
          >
            {menuToggle ? (
              <img src={close} alt="" className="close-icon" />
            ) : (
              <img src={hamburger_icon} alt="" />
            )}
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <ul>
                <li>
                  <Nav.Link
                    as={Link}
                    to={"/"}
                    key={"signin"}
                    activeClassName="active"
                  >
                    Home
                  </Nav.Link>
                </li>
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
