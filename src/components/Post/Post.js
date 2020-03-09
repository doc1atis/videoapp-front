import React, { Component } from "react";
import { connect } from "react-redux";
import Comment from "../Comment/Comment";
import Moment from "react-moment";
import * as actions from "../../redux/actionCreators";
import { FaTrash } from "react-icons/fa";
import AddComment from "../AddComment/AddComment";
import { Row, Col } from "react-bootstrap";

class Post extends Component {
  componentDidUpdate() {
    console.log("post cdu");
    console.log(this.props);
  }

  componentDidMount() {
    console.log("post cdm");
    console.log(this.props);
  }

  render() {
    let comments = <h1>No Comments</h1>;

    let { post } = this.props;

    if (post.comments) {
      comments = post.comments.map((comment, i) => (
        <Comment key={i} comment={comment} />
      ));
    }

    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-xs-2 col-md-1">
            <img
              src="http://placehold.it/80"
              className="img-circle img-responsive"
              alt=""
            />
          </div>
          <div className="col-xs-10 col-md-11">
            <div>
              {/* <a href="http://bootsnipp.com/BhaumikPatel/snippets/4ldn">
                          Cool Sign Up
                        </a> */}
              <div className="mic-info">
                By: <a href="#">{post.owner.username}</a> on{" "}
                <a href="#">
                  <Moment format="DD MMM YYYY" date={post.createdAt} />
                </a>
              </div>
            </div>
            <div className="comment-text">
              <Row>
                <Col xs={11}>{post.body}</Col>
                <Col>
                  <button
                    type="button"
                    className="btn btn-light"
                    title="Delete"
                    onClick={() => this.props.deletePost(post._id)}
                  >
                    <FaTrash />
                  </button>
                </Col>
              </Row>
            </div>
            <div className="action">
              {/* <div onClick={this.showComment}>Reply</div> */}
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

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  deletePost: id => dispatch(actions.postActions.DeletePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
