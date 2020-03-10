import React, { Component } from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Recommendation from "../Recommendation/Recommendation";
export default class Header extends Component {
  render() {
    return (
      <header className="masthead text-center text-white">
        <div className="masthead-content">
          <Container fluid>
            <Row>
              <Col
                sm={12}
                md={{ span: 12, offset: 0 }}
                lg={12}
                xl={{ span: 7, offset: 0 }}
              >
                <Row>
                  <Col>
                    <VideoPlayer />
                  </Col>
                </Row>
                <Row>
                  <Col xl={12}>
                    <Accordion defaultActiveKey="0">
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle
                            as={"p"}
                            variant="link"
                            eventKey="1"
                            style={{ color: "black" }}
                          >
                            Info
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            <p style={{ color: "black" }}>my video body</p>
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </Col>
                </Row>
              </Col>

              <Col sm={12} md={12} lg={12} xl={{ span: 4, offset: -1 }}>
                <Recommendation />
              </Col>
            </Row>
            {/* <h1 className="masthead-heading mb-0">One Page Wonder</h1>
              <h2 className="masthead-subheading mb-0">
                Will Rock Your Socks Off
              </h2>
              <Link to="#" className="btn btn-primary btn-xl rounded-pill mt-5">
                Learn More
              </Link> */}
          </Container>
        </div>

        <div className="bg-circle-1 bg-circle"></div>
        <div className="bg-circle-2 bg-circle"></div>
        <div className="bg-circle-3 bg-circle"></div>
        <div className="bg-circle-4 bg-circle"></div>
      </header>
    );
  }
}
