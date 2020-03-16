import React, { Component } from "react";
import { FaCaretDown, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { Row, Col, Accordion, Card } from "react-bootstrap";
import Moment from "react-moment";

export default class InfoBar extends Component {
  render() {
    return (
      <Accordion className="mb-3">
        <Card>
          <Card.Header style={{ backgroundColor: "#221E20" }}>
            <Row
              style={{
                backgroundColor: "#E9ECEF",
                paddingRight: "1rem"
              }}
            >
              <Col
                xs={{ span: 9, offset: 0 }}
                sm={{ span: 8, offset: 0 }}
                lg={{ span: 8, offset: 0 }}
                md={{ span: 8, offset: 0 }}
                xl={{ span: 8, offset: 0 }}
              >
                <p
                  style={{
                    color: "black",
                    paddingTop: "0.5rem",

                    fontSize: "0.8rem",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                    textTransform: "capitalize",
                    textAlign: "left"
                  }}
                >
                  {this.props.video.id ? this.props.video.snippet.title : null}
                </p>
              </Col>

              <Col
                xs={{ span: 3, offset: 0 }}
                sm={{ span: 3, offset: 0 }}
                lg={{ span: 3, offset: 0 }}
                md={{ span: 3, offset: 0 }}
                xl={{ span: 3, offset: 0 }}
              >
                <p
                  style={{
                    textAlign: "right",
                    color: "black",
                    paddingTop: "0.5rem",
                    fontSize: "0.2rem",
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
              <Col
                xs={{ span: 1, offset: 5 }}
                sm={{ span: 1, offset: 0 }}
                lg={{ span: 1, offset: 0 }}
                md={{ span: 1, offset: 0 }}
                xl={{ span: 1, offset: 0 }}
              >
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
              <Col xl={12}>
                {/* row for like buttons */}
                <Row
                  style={{
                    paddingBottom: "0.2rem",
                    paddingTop: "0.2rem",
                    backgroundColor: "#F2F1EF",
                    marginLeft: "0.2rem",
                    borderRadius: "2px"
                  }}
                  className="shadow"
                >
                  {/* number of views column */}
                  <Col
                    xs={{ span: 5, offset: 0 }}
                    sm={{ span: 9, offset: 0 }}
                    md={{ span: 9, offset: 0 }}
                    lg={{ span: 9, offset: 0 }}
                    xl={{ span: 8, offset: 0 }}
                  >
                    <p
                      style={{
                        color: "black",
                        fontSize: "0.7rem",
                        textAlign: "left",
                        textTransform: "capitalize",
                        paddingTop: "0.3rem"
                      }}
                    >
                      200k <strong>views</strong>
                    </p>
                  </Col>
                  {/* thumbs column */}
                  <Col sm={3} md={3} lg={3} xl={4}>
                    <div className="d-flex justify-content-end align-items-baseline pt-1">
                      <>
                        <span style={{ color: "black" }}>200k</span>
                        <FaThumbsUp
                          style={{
                            color: "black",
                            fontSize: "1.5rem",
                            cursor: "pointer",
                            marginRight: "1.5rem"
                          }}
                        />
                        <span
                          style={{
                            color: "black"
                          }}
                        >
                          300k
                        </span>
                        <FaThumbsDown
                          style={{
                            color: "black",
                            fontSize: "1.5rem",
                            cursor: "pointer",
                            alignSelf: "flex-end"
                          }}
                        />
                      </>
                    </div>
                  </Col>
                </Row>
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
    );
  }
}
