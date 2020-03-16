import React, { Component } from "react";
import { connect } from "react-redux";
import Comment from "../Comment/Comment";
import Moment from "react-moment";
import * as actions from "../../redux/actionCreators";
import { FaAlignJustify, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import AddComment from "../AddComment/AddComment";
import { Row, Col, Overlay, Button, ListGroup } from "react-bootstrap";
import "./Post.css";

class Post extends Component {
  // componentDidUpdate() {
  // this was not being hit when I used the state from redux in parent function and passed it down as props.
  //   console.log("post cdu");
  //   console.log(this.props);
  // }
  state = {
    show: false
  };

  target = React.createRef();

  likePost = async (e, id) => {
    e.preventDefault();
    await this.props.likePost(id);
  };

  dislikePost = async (e, id) => {
    e.preventDefault();
    await this.props.dislikePost(id);
  };

  render() {
    let comments = <h1>No Comments</h1>;

    let { post } = this.props;

    // wtf - why did I need to reference the posts from redux to pick up the changes to the comments subdocument. It was updating in redux dev tools but it wasnt updating the list in my ui. !very wierd!
    let populatedPost = this.props.posts.find(x => x._id == post._id);

    if (post.comments) {
      comments = populatedPost.comments.map((comment, i) => (
        <Comment key={i} comment={comment} />
      ));
    }

    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-xs-1 col-md-1">
            <img
              src={"/avatar.png"}
              className="img-circle img-responsive"
              alt=""
            />
          </div>
          <div className="col-xs-8 col-md-10">
            <div className="mic-info">
              By: <a href="#">{post.owner.username}</a> on{" "}
              <a href="#">
                <Moment format="DD MMM YYYY" date={post.createdAt} />
                <Button
                  variant="light"
                  onClick={e => this.likePost(e, post._id)}
                >
                  <FaThumbsUp /> {post.likes.length}
                </Button>
                <Button
                  variant="light"
                  onClick={e => this.dislikePost(e, post._id)}
                >
                  <FaThumbsDown /> {post.dislikes.length}
                </Button>
              </a>
            </div>

            <div className="comment-text">
              <Row>
                <Col xs={11}>{post.body}</Col>
                <Col>
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
                              onClick={() => this.props.deletePost(post._id)}
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
              <AddComment postId={post._id} />
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
            </div>
          </div>
        </div>
        {comments}
      </li>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.postReducer.posts
});

const mapDispatchToProps = dispatch => ({
  deletePost: id => dispatch(actions.postActions.DeletePost(id)),
  likePost: id => dispatch(actions.postActions.LikePost(id)),
  dislikePost: id => dispatch(actions.postActions.DislikePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
