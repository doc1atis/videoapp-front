import React, { Component } from "react";
import Moment from "react-moment";
import { FaTrash, FaAlignJustify } from "react-icons/fa";
import { Row, Col, Overlay, Button, ListGroup } from "react-bootstrap";
import * as actions from "../../redux/actionCreators";
import { connect } from "react-redux";

class Comment extends Component {
  state = {
    show: false
  };

  target = React.createRef();

  render() {
    const { comment } = this.props;
    return (
      <div className="row col-11 offset-1 mb-1">
        <div className="col-xs-2 col-md-1 mr-1">
          <img
            src="http://placehold.it/80"
            className="img-circle img-responsive"
            alt=""
          />
        </div>
        <div className="col-xs-10 col-md-10">
          <div>
            {/* <a href="http://bootsnipp.com/BhaumikPatel/snippets/4ldn">
                          Cool Sign Up
                        </a> */}
            <div className="mic-info">
              By: <a href="#">{comment.owner.username}</a> on{" "}
              <a href="#">
                <Moment format="DD MMM YYYY" date={comment.createdAt} />
              </a>
            </div>
          </div>
          <div className="comment-text">
            <Row>
              <Col xs={11}>{comment.body}</Col>
              <Col xs={1}>
                <Button
                  variant="light"
                  ref={this.target}
                  onClick={() => this.setState({ show: !this.state.show })}
                >
                  <FaAlignJustify />
                </Button>
                <Overlay
                  target={this.target.current}
                  show={this.state.show}
                  placement="bottom"
                >
                  {({
                    placement,
                    scheduleUpdate,
                    arrowProps,
                    outOfBoundaries,
                    show: _show,
                    ...props
                  }) => (
                    <div
                      {...props}
                      // style={{
                      //   padding: "2px 10px",

                      //   borderRadius: 3,
                      //   ...props.style
                      // }}
                    >
                      <ListGroup>
                        <ListGroup.Item>
                          <div
                            className="cursorP"
                            onClick={() =>
                              this.props.deleteComment(
                                comment._id,
                                comment.post
                              )
                            }
                          >
                            Delete
                          </div>
                        </ListGroup.Item>
                        {/* <ListGroup.Item>Edit</ListGroup.Item> */}
                      </ListGroup>
                    </div>
                  )}
                </Overlay>
              </Col>
            </Row>
          </div>
          <div className="action">
            {/* <button
                          type="button"
                          className="btn btn-primary btn-xs"
                          title="Edit"
                        >
                          <span className="glyphicon glyphicon-pencil"></span>
                        </button> */}
            {/* <button
                          type="button"
                          className="btn btn-success btn-xs"
                          title="Approved"
                        >
                          <span className="glyphicon glyphicon-ok"></span>
                        </button> */}
            {/* <button
                          type="button"
                          className="btn btn-danger btn-xs"
                          title="Delete"
                        >
                          <span className="glyphicon glyphicon-trash"></span>
                        </button> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  deleteComment: (id, postId) =>
    dispatch(actions.commentActions.DeleteComment(id, postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
