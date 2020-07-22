import { Link } from "gatsby"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import footlogo from "../../images/logo.png"
import {
    AiOutlineInstagram,
    AiOutlineTwitter, 
    AiFillYoutube,
  } from "react-icons/ai"

const Footer = () => {

    return (
        <div>
            <div className="spline_bg_bt"></div>
            <footer className="bg-very-dark pt-30px">
                <Container>
                    <Row>
                        <Col md={3} className="text-center text-lg-left pb-5 pb-md-0">
                            <Link to="/">
                                <img src={footlogo} alt="the cookout" height="60"/>
                            </Link>
                        </Col>
                        <Col md={10} className="d-flex align-items-center pb-5 pb-md-0">
                            <div className="text-center w-100">
                                <Link to="/" className="text-white body_1_bold">Support Center</Link>
                                <Link to="/contactus" className="text-white body_1_bold mx-4 mx-sm-5">Contact Us</Link>
                                <Link to="/aboutus" className="text-white body_1_bold">About</Link>
                            </div>
                        </Col>
                        <Col md={3} className="text-center text-md-right pb-34px pb-md-0">
                            <a
                                href="https://www.instagram.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="text-white mr-3"
                                >
                                <AiOutlineInstagram size={30} />
                            </a>
                            <a
                                href="https://twitter.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="text-white mr-3"
                                >
                                <AiOutlineTwitter size={30} />
                            </a>
                            <a
                                href="https://twitter.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="text-white"
                                >
                                <AiFillYoutube size={30} />
                            </a>
                        </Col>
                    </Row>
                    
                    <div className="text-center border-bottom border-grey text-white body_2 pb-40px pb-md-4">Copyright All Rights Reserved @2020</div>
                    
                    <Row className="py-5">
                        <Col md={6} className="text-center text-md-left mb-5 mb-md-0">
                            <div className="text-white footertitle-1">Ready in the Today </div>
                        </Col>
                        <Col  md={10} className="d-flex align-items-center">
                            <div className="text-center text-md-right w-100">
                                <Link to="/" className="btn btn-primary text-white">Get All Bots</Link>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </footer>
        </div>
        
    )
}

export default Footer
