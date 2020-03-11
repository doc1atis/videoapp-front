import React, { Component } from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import { FaCaretDown } from "react-icons/fa";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import Recommendation from "../Recommendation/Recommendation";
import { connect } from "react-redux";
import Moment from "react-moment";
import "./Main.css";
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
                    <Accordion className="mb-3">
                      <Card>
                        <Card.Header style={{ backgroundColor: "#221E20" }}>
                          <Row
                            style={{
                              backgroundColor: "#E9ECEF",
                              paddingRight: "1rem"
                            }}
                          >
                            <Col xs={{ span: 6, offset: 0 }}>
                              <p
                                style={{
                                  color: "black",
                                  paddingTop: "0.5rem",

                                  fontSize: "0.8rem",
                                  overflow: "hidden",
                                  display: "-webkit-box",
                                  WebkitLineClamp: "3",
                                  WebkitBoxOrient: "vertical",
                                  textTransform: "capitalize",
                                  textAlign: "left"
                                }}
                              >
                                {this.props.video.id
                                  ? this.props.video.snippet.title
                                  : null}
                              </p>
                            </Col>

                            <Col xs={{ span: 4, offset: 0 }}>
                              <p
                                style={{
                                  textAlign: "right",
                                  color: "black",
                                  paddingTop: "0.7rem",
                                  fontSize: "0.1rem",
                                  textTransform: "capitalize"
                                }}
                              >
                                {this.props.video.id ? (
                                  <Moment
                                    format="DD MMM YYYY"
                                    date={this.props.video.snippet.publishedAt}
                                  />
                                ) : null}
                              </p>
                            </Col>
                            <Col xs={{ span: 1, offset: 0 }}>
                              <Accordion.Toggle
                                as={FaCaretDown}
                                variant="icon"
                                eventKey="1"
                                style={{
                                  color: "#221E20",
                                  cursor: "pointer",
                                  fontSize: "1.8rem"
                                }}
                              ></Accordion.Toggle>
                            </Col>
                          </Row>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            <p
                              style={{
                                color: "black",
                                textAlign: "left",
                                fontSize: "0.9rem"
                              }}
                            >
                              {this.props.video.id
                                ? this.props.video.snippet.description
                                : null}
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
