import React, { Component } from "react";
import Moment from "react-moment";
import {
  FaTrash,
  FaAlignJustify,
  FaThumbsUp,
  FaThumbsDown
} from "react-icons/fa";
import { Row, Col, Overlay, Button, ListGroup } from "react-bootstrap";
import * as actions from "../../redux/actionCreators";
import { connect } from "react-redux";

class Comment extends Component {
  state = {
    show: false
  };

  likeComment = async (e, id) => {
    e.preventDefault();
    await this.props.likeComment(id);
  };

  dislikeComment = async (e, id) => {
    e.preventDefault();
    await this.props.dislikeComment(id);
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
                <Button
                  variant="light"
                  onClick={e => this.likeComment(e, comment._id)}
                >
                  <FaThumbsUp /> {comment.likes.length}
                </Button>
                <Button
                  variant="light"
                  onClick={e => this.dislikeComment(e, comment._id)}
                >
                  <FaThumbsDown /> {comment.dislikes.length}
                </Button>
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
                              this.props.deleteComment(comment._id)
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
    dispatch(actions.commentActions.DeleteComment(id, postId)),
  likeComment: id => dispatch(actions.commentActions.LikeComment(id)),
  dislikeComment: id => dispatch(actions.commentActions.DislikeComment(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
