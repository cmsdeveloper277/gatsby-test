import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const FAQModule = pros => {
  return (
    <>
      <div className="py-64px mt-70px mt-md-96px bg-very-light">
        <Container>
          <Row className="">
            <Col md={{ span: 10, offset: 3 }}>
              <div className="title_1 text-primary text-center mb-64px">
                Join
              </div>
            </Col>
          </Row>
          <div></div>
          <Row>
            <Col md={11}></Col>
            <Col md={5}></Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default FAQModule
