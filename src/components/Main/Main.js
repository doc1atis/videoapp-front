import React, { Component } from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import { FaCaretDown } from "react-icons/fa";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Recommendation from "../Recommendation/Recommendation";
import { connect } from "react-redux";
class Header extends Component {
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
                    <Accordion defaultActiveKey="0" className="mb-3">
                      <Card>
                        <Card.Header style={{ backgroundColor: "#221E20" }}>
                          <Row
                            style={{
                              backgroundColor: "#E9ECEF",
                              paddingRight: "1rem"
                            }}
                          >
                            <Col xs={{ span: 10, offset: 0 }}>
                              <p
                                style={{
                                  color: "black",
                                  paddingTop: "0.5rem",
                                  fontSize: "1rem",
                                  overflow: "hidden",
                                  display: "-webkit-box",
                                  WebkitLineClamp: "1",
                                  WebkitBoxOrient: "vertical",
                                  textTransform: "capitalize"
                                }}
                              >
                                {this.props.video.id
                                  ? this.props.video.snippet.title
                                  : null}
                              </p>
                            </Col>
                            <Col xs={{ span: 1, offset: 1 }}>
                              <Accordion.Toggle
                                as={FaCaretDown}
                                variant="link"
                                eventKey="1"
                                style={{
                                  color: "#221E20",
                                  cursor: "pointer",
                                  fontSize: "2.5rem"
                                }}
                              ></Accordion.Toggle>
                            </Col>
                          </Row>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            <p style={{ color: "black" }}>
                              my video description
                            </p>
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
const mapStateToProps = entireState => {
  let { video } = entireState.newVideoReducer;
  if (!video) {
    video = entireState.randomVideoReducer.video;
  }
  console.log("olgy video1  is: ", entireState.newVideoReducer);
  console.log("olgy video2  is: ", entireState.randomVideoReducer.video);

  return { video };
};
export default connect(mapStateToProps, {})(Header);
